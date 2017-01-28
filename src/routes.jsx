import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './apps/App.jsx';
import HomeMenu from './apps/home/index.jsx';
import ColdDripTimer from './apps/cold-drip-timer/index.jsx'

export default (
  <Route path="/" component={App}>
    <Route path="apps/cold-drip-timer/" component={ColdDripTimer} />
  </Route>
);
