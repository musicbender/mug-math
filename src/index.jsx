import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes.jsx';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}

injectTapEventPlugin();

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} routes={routes} />
  </Provider>
  , document.getElementById('app')
);
