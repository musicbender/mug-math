import express from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import httpsRedirect from 'express-https-redirect';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '../src/containers/App.jsx';
import reducers from '../src/reducers/index';
require('babel-core/register')({
    presets: ['es2015', 'react']
});

console.log(`live? ${process.env.LIVE}`);

const PORT = process.env.PORT || 3001;
const app = new express();

app.set('view engine', 'pug');
app.set('views', 'server/views');

// app.use('/', httpsRedirect(true));


app.use(express.static(path.join(__dirname, 'public/')));
app.use(bodyParser.json());

app.get('*', (req, res, next) => {
  const store = createStore(reducers);
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

    if (context.url) {
      res.redirect(301, context.url);
      res.end()
    }

    const preloadedState = store.getState();

    if (!req.secure && process.env.NODE_ENV === 'production') {
      console.log('moving to https?');
      const secureUrl = "https://" + req.headers['host'] + req.url;
      res.writeHead(301, { "Location":  secureUrl });
    } else {
      console.log('did not redirect');
    }

    res
      .set('Content-Type', 'text/html')
      .status(200)
      .render('index', {html, preloadedState});
});

// app.get('/manifest.json', (req,res) => {
//   console.log(`mf`);
//   res.set('Content-Type', 'application/manifest+json')
//      .status(200)
//      .send('manifest.json');
//
//   // res.status(200).sendFile('manifest.json');
// })

app.use(express.static(path.join(__dirname, 'static/')));

if (!process.env.LIVE) {
  const options = {
      key: fs.readFileSync('/Users/pjacobs/server.key'),
      cert: fs.readFileSync('/Users/pjacobs/server.crt'),
      requestCert: false,
      rejectUnauthorized: false
  };

  const server = https.createServer(options, app).listen(PORT, () => {
    console.log(`Mugmath local server started at port ${PORT}`);
  });
} else {
  app.listen(PORT, err => {
    if (err) { console.error(err); }
    console.log(`MugMath now live at ${PORT}!`);
  });
}
