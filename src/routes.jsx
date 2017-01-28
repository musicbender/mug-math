import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App.jsx';
import HomeMenu from './containers/Home-Menu.jsx';
import ColdDripTimer from './apps/cold-drip-timer/index.jsx'

export default (
  <Route path="/" component={App}>
    <Route path="apps/cold-drip-timer/" component={ColdDripTimer} />
  </Route>
);
