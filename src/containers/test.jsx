import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const preloadedState = window.__PRELOADED_STATE__;

delete window.__PRELOADED_STATE__;

const store = createStore(reducers, preloadedState);

class Test extends Component {
  render() {
    return (
      <div>
        <h1>Woohoo!</h1>
      </div>
    );
  }
}

if(typeof window !== 'undefined') {
  ReactDOM.render(
    <Provider store={store}>
      <Test />
    </Provider>,
    document.getElementById('app')
  );
} else {
  console.log("can't find window object...not in browser");
}

export default Test;
