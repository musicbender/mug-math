import React from 'react';
import { Route } from 'react-router';

//route path imports
import App from './containers/App.jsx';
import BrewCalculator from './sub-apps/brew-calculator/index.jsx'
import ColdDripTimer from './sub-apps/cold-drip-timer/index.jsx'
import RoastMoistureCalculator from './sub-apps/roast-moisture-calculator/index.jsx';
import RoastDevCalculator from './sub-apps/roast-development-calculator/index.jsx';

export default (
  <Route path="/" component={App}>
    <div>
      <Route path="sub-apps/brew-calculator/" component={BrewCalculator} />
      <Route path="sub-apps/cold-drip-timer/" component={ColdDripTimer} />
      <Route path="sub-apps/roast-moisture-calculator/" component={RoastMoistureCalculator} />
      <Route path="sub-apps/roast-development-calculator/" component={RoastDevCalculator} />
    </div>
  </Route>
);
