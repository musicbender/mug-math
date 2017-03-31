import express from 'express';
import http from 'http';
import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../src/reducers/index.js';
import routes from '../src/routes.jsx';
import { match, RouterContext } from 'react-router';

// const index = fs.readFileSync('dist/index.html', 'utf8');
const PORT = process.env.PORT || 3001;

const app = new express();
// const server = new http.Server(app);

console.log('serving static files...');
app.use(express.static('dist'));

app.use((req, res) => {
  match({ routes, location: req.url }, (err, redirectLocation, renderProps) => {
    if (err) {
      return res.status(500).end();
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return next();
    }

    const store = createStore(reducers);
    const context = {};

    console.log('rendering react...');
    const html = renderToString(
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    );

    const preloadedState = store.getState();
    console.log('boomshakalaka');

    res
      .set('Content-Type', 'text/html')
      .status(200)
      .end(renderFullPage(html, preloadedState));
  });
});

const renderFullPage = (html, initialState) => {
  console.log('rendering full page...');
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
          console.log('initial state injected');
        </script>
        <script type="text/javascript" src="/dist.js"></script>
      </body>
    </html>
  `;
};

app.listen(PORT, err => {
  if (err) { console.error(err); }

  console.log(`MugMath avaliable at ${PORT}!`);
});


// res.write(index.replace(
//     /<div id="app"><\/div>/,
// '<div id="app">' + html + '</div>'
// ));
//
//
// res.write(index.replace(
//     /window\.__PRELOADED_STATE__;/,
// `window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`
// ));
