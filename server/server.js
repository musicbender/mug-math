import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StaticServer } from 'react-router';
import reducers from '../src/reducers/index.js';
import App from '../src/containers/App.jsx';
import { renderToString } from 'react-dom/server';
import webpack from 'webpack';
import config from '../webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === 'development') {
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(handleRender);

function handleRender(req, res) {
  //create new redux store instance
  const store = createStore(reducers);
  const context = {};
  const html = renderToString(
    <Provider store={store}>
      <StaticServer location={req.url} context={context}>
        <App />
      </StaticServer>
    </Provider>
  );

  const preloadedState = store.getState();

  res.send(renderFullPage(html, preloadedState));
}

function renderFullPage(html, preloadedState) {
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
        <script src="dist.js"></script>
      </body>
    </html>
    `
}

app.listen(PORT, err => {
  if (err) {
    console.error(`ERROR: ${err}`);
  }

  console.log(`server started on port ${PORT}`);
});

export default app;
