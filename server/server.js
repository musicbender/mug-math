import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import App from '../src/containers/App.jsx';
import reducers from '../src/reducers/index';
import config from './config';
require('babel-core/register')({
    presets: ['es2015', 'react']
});

console.log(`live? ${process.env.LIVE}`);

const PORT = process.env.PORT || 3001;
// const HTTP_PORT = process.env.HTTP_PORT || 8002;
const viewDir = process.env.LIVE ? 'dist/views' : 'server/views';

const app = new express();

app.set('view engine', 'pug');
app.set('views', viewDir);

app.use(express.static(path.join(__dirname, 'public/')));
app.use(bodyParser.json());

app.get('*', (req, res) => {
  const store = createStore(reducers);
  const context = {};
  console.log('prerendering...');
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

  res
    .set('Content-Type', 'text/html')
    .status(200)
    .render('index', {html, preloadedState});
});

if (!process.env.LIVE) {
  const options = {
      key: fs.readFileSync('/Users/pjacobs/server.key'),
      cert: fs.readFileSync('/Users/pjacobs/server.crt'),
      requestCert: false,
      rejectUnauthorized: false
  };

  https.createServer(options, app).listen(PORT, () => {
    console.log(`Mugmath local server started at port ${PORT}`);
  });
  http.createServer(app).listen(3016, () => {
    console.log(`app at local server at port 3016`);
  })
} else {
  app.listen(PORT, err => {
    if (err) { console.error(err); }
    console.log(`MugMath now live at ${PORT}!`);
  });
}
