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
const app = new express();

console.log(process.env.PORT);
console.log(`live? ${process.env.LIVE}`);
console.log(`process: ${process.env.NODE_ENV}`);
console.log(__dirname);

// app.use('/', httpsRedirect(true));
app.use('/public', express.static(path.join(__dirname, '/static')));

app.use('/', (req, res, next) => {
  console.log(`getting store and react components...`);
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
    console.log(`rendering html and store...`);
    res
      .set('Content-Type', 'text/html')
      .status(200)
      .send(renderFullPage(html, preloadedState))
});

const renderFullPage = (html, initialState) => {
  return `
    <!doctype html>
    <html class="no-js" lang="">
      <head>
        <meta charset="UTF-8">
        <link rel="manifest" href="manifest.json">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="mobile-web-app-capable" content="yes">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="msapplication-starturl" content="/">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="theme-color" content="#000000"/>
        <title>Mug Math</title>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet" defer></link>
        <link href="/public/style.css" rel="stylesheet">
      </head>
      <body>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>

        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

        <div id="app">${html}</div>

        <!-- <noscript>
          <div class="no-script" style="position: absolute; left: 50%; top: 33%; transform: translate(-50%,-50%); width: 40em; height: 10em; background-color: #fff; padding: 2em; font-size: 1.2em">
            <p>You have turned off javascript or your browser does not support it. You'll have to enable it or use a different browser to us MugMath! :( </p>
          </div>
        </noscript> -->

        <div></div>
        <div></div>

        <script type="text/javascript" src="/public/vendor.js"></script>
        <script type="text/javascript" src="/public/dist.js"></script>
      </body>
    </html>
  `;
};

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
