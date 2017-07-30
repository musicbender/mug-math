import React from 'react';
import { Router, Route } from 'react-router';

import App from './containers/App.jsx';
import BrewCalculator from './sub-apps/brew-calculator/index.jsx';
import ColdDripTimer from './sub-apps/cold-drip-timer/index.jsx';
import RoastMoistureCalculator from './sub-apps/roast-moisture-calculator/index.jsx';
import RoastDevCalculator from './sub-apps/roast-development-calculator/index.jsx';

// export default (props) => {
//   return (
//     <Router history={props.history}>
//       <Route path="/" component={App}>
//         <Route path="sub-apps/brew-calculator/" component={BrewCalculator} />
//         <Route path="sub-apps/cold-drip-timer/" component={ColdDripTimer} />
//         <Route path="sub-apps/roast-moisture-calculator/" component={RoastMoistureCalculator} />
//         <Route path="sub-apps/roast-development-calculator/" component={RoastDevCalculator} />
//       </Route>
//     </Router>
//   );
// }

module.exports = React.createClass({
  render: function() {
    return (
      <Router history={props.history}>
        <Route path="/" component={App}>
          <Route path="sub-apps/brew-calculator/" component={BrewCalculator} />
          <Route path="sub-apps/cold-drip-timer/" component={ColdDripTimer} />
          <Route path="sub-apps/roast-moisture-calculator/" component={RoastMoistureCalculator} />
          <Route path="sub-apps/roast-development-calculator/" component={RoastDevCalculator} />
        </Route>
      </Router>
    )
  }
});
