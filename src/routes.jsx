import React from 'react';
import {Route, IndexRoute } from 'react-router';
import Main from './apps/Main.jsx';
import HomeMenu from './apps/home/index.jsx';
import ColdDripTimer from './apps/cold-drip-timer/index.jsx'

export default (
  <Route path="/" component={Main}>
    <IndexRoute component={HomeMenu} />
    <Route path="app/cold-drip-timer" component={ColdDripTimer} />
  </Route>
);
