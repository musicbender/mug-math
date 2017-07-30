import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import Perf from 'react-addons-perf';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import reducers from './reducers';
import Routes from './routes.js';
import './style/base.scss';

OfflinePluginRuntime.install();

injectTapEventPlugin();
console.log(Routes);

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const middleware = routerMiddleware(browserHistory);

const store = createStore(reducers, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV === "development") {
	Perf.start();
}

if (!process.env.ONSERVER) {
  ReactDOM.render(
    <Provider store={store}>
      <Routes history={history} />
    </Provider>
    , document.getElementById('app'),
  );
}

if (process.env.NODE_ENV === "development") {
  Perf.stop();
  // Perf.printInclusive();
  // Perf.printExclusive();
  // Perf.printWasted();
}
