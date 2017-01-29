import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import ColdDripTimer from './sub-apps/cold-drip-timer/index.jsx'

export default (
  <Route path="/" component={App}>
    <Route path="sub-apps/cold-drip-timer/" component={ColdDripTimer} />
  </Route>
);
