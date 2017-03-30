import express from 'express';
import http from 'http';
import { createServer } from 'http'
import fs from 'fs';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../src/reducers/index.js';
import { StaticRouter } from 'react-router';
import App from '../src/containers/App.jsx';
// import Test from '../test/test.jsx';

// const index = fs.readFileSync('dist/index.html', 'utf8');
const PORT = process.env.PORT || 3001;

const app = new express();
const server = new http.Server(app);

app.use((req, res, next) => {
  console.log('boom');
  const store = createStore(reducers);
  const context = {};

  console.log(`store loaded? ${store !== 'undefined'}`);

  // const html;
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end();
  } else {
    const preloadedState = store.getState();
    res
      .set('Content-Type', 'text/html')
      .status(200)
      .end(renderFullPage(html, preloadedState));
  }
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
        <script src='http://localhost:3001/dist/dist.js'></script>
      </body>
    </html>
  `;
};


app.use(express.static('../dist/dist.js'));

app.listen(PORT);

console.log(`MugMath avaliable at ${PORT}!`);


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
