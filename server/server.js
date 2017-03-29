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

const index = fs.readFileSync('dist/index.html', 'utf8');
const PORT = process.env.PORT || 3001;

const app = new express();
const server = new http.Server(app);

app.use((req, res) => {
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
    console.log('this one');

    res.writeHead(301, {
      Location: context.url
    })
    res.end();
  } else {
    const preloadedState = store.getState();

    console.log('rendering html...');

    res.write(index.replace(
        /<div id="app"><\/div>/,
		'<div id="app">' + html + '</div>'
    ));


    res.write(index.replace(
        /window\.__PRELOADED_STATE__;/,
		`window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}`
    ));

    res.end();
  }
});

app.use(express.static('dist'));

server.listen(PORT);

console.log(`MugMath avaliable at ${PORT}!`);
