import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Perf from 'react-addons-perf';
import injectTapEventPlugin from 'react-tap-event-plugin';
import * as OfflinePluginRuntime from 'offline-plugin/runtime';
import reducers from './reducers';
import App from './containers/App.jsx';
import './style/base.scss';

// OfflinePluginRuntime.install();

injectTapEventPlugin();

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// if (process.env.NODE_ENV === "development") {
// 	Perf.start();
// }

const Index = () => (
	<BrowserRouter basename="/">
	<Provider store={store}>

    		<App />

  </Provider>
	</BrowserRouter>
)

render(<Index />, document.getElementById('app'));


if (process.env.NODE_ENV === "development") {
  // Perf.stop();
  // Perf.printInclusive();
  // Perf.printExclusive();
  // Perf.printWasted();
}
