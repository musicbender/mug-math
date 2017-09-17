import express from 'express';
import https from 'https';
import fs from 'fs';
import path from 'path';
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

const PORT = process.env.PORT || 3001;
console.log(`live? ${process.env.LIVE}`);
console.log(`process:, ${process.env.NODE_ENV}`);
console.log(__dirname);
const app = new express();

// app.use('/', httpsRedirect(true));

app.use('/', (req, res, next) => {
  const store = createStore(reducers);
  const context = {};

  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

    // if (err) {
    //   console.log(err);
    //   return res.status(500).end();
    // }

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
      .send(renderFullPage(html, preloadedState))
      // .end();
      next();
});

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="UTF-8">
        <link rel="manifest" href="manifest.json">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="msapplication-starturl" content="/">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <title>Mug Math</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" defer>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>

      </body>
    </html>
  `;
};

app.use(express.static('dist'));

if (!process.env.LIVE) {
  const options = {
      key: fs.readFileSync('/Users/patrickj/server.key'),
      cert: fs.readFileSync('/Users/patrickj/server.crt'),
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
