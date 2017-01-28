import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, browserHistory } from 'react-router';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import routes from './routes.jsx';
import reducers from './reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import runtime from 'serviceworker-webpack-plugin/lib/runtime';

if ('serviceWorker' in navigator) {
  const registration = runtime.register();
}

injectTapEventPlugin();

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const muiTheme = getMuiTheme({
  slider: {
    handleSize: 20,
    selectionColor: this.props.speed.color,
    handleColorZero: 'rgb(70, 50, 42)',
    handleFillColor: 'rgb(70, 50, 42)',
    rippleColor: this.props.speed.color
  }
});

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={muiTheme}>
      <Router history={browserHistory} routes={routes} />
    </MuiThemeProvider>
  </Provider>
  , document.getElementById('app')
);
