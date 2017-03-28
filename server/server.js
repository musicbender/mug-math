require('babel-core/register')({
    presets: ['es2015', 'react']
})

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

const index = fs.readFileSync('dist/index.html', 'utf8');
const PORT = process.env.PORT || 3001;

const app = new express();
const server = new http.Server(app);

app.use(express.static('../dist'));

app.use((req, res) => {
  // const store = createStore(reducers);
  // const context = {};
  console.log(React !== 'undefined');
  const ejsx = 'test';

  const html = renderToString(
    ejsx
  )

  // const html;
  // const html = renderToString(
  //   <Provider store={store}>
  //     <StaticRouter location={req.url} context={context}>
  //       <App />
  //     </StaticRouter>
  //   </Provider>
  // );

  // var html = renderToString(
  //   React.createElement(
  //     Provider,
  //     { store: store },
  //     React.createElement(
  //       StaticRouter,
  //       { location: req.url, context: context },
  //       React.createElement(App, null)
  //     )
  //   )
  // );

  if (context.url) {
    // res.writeHead(301, {
    //   Location: context.url
    // })
    res.end();
  } else {
    // const preloadedState = store.getState();

    res.write(index.replace(
        /<div id="root"><\/div>/,
		'<div id="root">' + html + '</div>'
    ));

    // res.write(index.replace(
    //     /<script>window\.__PRELOADED_STATE__;<\/script>/,
		// `<script>window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')} </script>`
    // ));

    res.end();
  }
});

server.listen(PORT, (err) => {
  if (err) { console.error(err); }
  console.log(`MugMath avaliable at ${PORT}!`);
});
