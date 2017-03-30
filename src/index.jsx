import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
// import runtime from 'serviceworker-webpack-plugin/lib/runtime';
import reducers from './reducers';
import routes from './routes.jsx';
import './style/base.scss';


// if ('serviceWorker' in navigator) {
//   const registration = runtime.register();
// }

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

injectTapEventPlugin();

const store = createStore(reducers, preloadedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

if(window !== undefined) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>
    , document.getElementById('app')
  );
}
