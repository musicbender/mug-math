import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../src/reducers/index.js';
import { StaticRouter } from 'react-router';
import http from 'http';
import express from 'express';
import fs from 'fs';
import App from '~/components/App.jsx';

const index = fs.readFileSync('dist/index.html', 'utf8');
const PORT = process.env.PORT || 3001;

const app = new express();

app.use(express.static('dist'));

app.use((req, res) => {
  const store = createStore(reducers);
  const context = {}

  const html = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App/>
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    })
    res.end();
  } else {
    res.write(index.replace(
        /<div id="root"><\/div>/,
		'<div id="root">' + html + '</div>'
    ));
    res.end();
  }
});

app.listen(POST, (err) => {
  if (err) { console.error(err); }
  console.log(`MugMath avaliable at ${PORT}!`);
});
