import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../src/reducers';
import Test from '../src/containers/test.jsx';
import { renderToString } from 'react-dom/server';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(handleRender);

function handleRender(req, res, next) {
  //create new redux store instance
  const store = createStore(reducers);

  const html = renderToString(
    <Provider store={store}>
      <Test />
    </Provider>
  );

  const preloadedState = state.getState();
  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
  console.log('rending html');

  return `
    <!doctype html>
    <html>
      <head>
        <title>MugMath</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="../dist/vendor.js"></script>
        <script src="../dist/bundle.js"></script>
      </body>
    </html>
    `
}

// app.use(express.static(path.resolve(__dirname, '../dist')));

app.listen(PORT, err => {
  if (err) {
    console.error(err);
  }

  console.log(`server started on port ${PORT}`);
});
