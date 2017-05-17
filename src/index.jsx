import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Perf from 'react-addons-perf';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import reducers from './reducers';
import routes from './routes.jsx';
import './style/base.scss';

OfflinePluginRuntime.install();

injectTapEventPlugin();

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

if (process.env.NODE_ENV === "development") {
	Perf.start();
}

if (!process.env.ONSERVER) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
    , document.getElementById('app'),
  );
}

if (process.env.NODE_ENV === "development") {
  Perf.stop();
  Perf.printInclusive();
  Perf.printExclusive();
  Perf.printWasted();
}
