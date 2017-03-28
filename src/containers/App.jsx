import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import HomeMenu from './Home-Menu.jsx';

//route path imports
import BrewCalculator from '../sub-apps/brew-calculator/index.jsx'
import ColdDripTimer from '../sub-apps/cold-drip-timer/index.jsx'
import RoastMoistureCalculator from '../sub-apps/roast-moisture-calculator/index.jsx';
import RoastDevCalculator from '../sub-apps/roast-development-calculator/index.jsx';

class App extends Component {
  render() {
    const muiTheme = getMuiTheme({
      slider: {
        handleSize: 20,
        selectionColor: this.props.speed.color,
        handleColorZero: 'rgb(70, 50, 42)',
        handleFillColor: 'rgb(70, 50, 42)',
        rippleColor: this.props.speed.color
      },
      userAgent: 'all'
    });

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-container">
          <HomeMenu />
          <Route path="sub-apps/brew-calculator/" component={BrewCalculator} />
          <Route path="sub-apps/cold-drip-timer/" component={ColdDripTimer} />
          <Route path="sub-apps/roast-moisture-calculator/" component={RoastMoistureCalculator} />
          <Route path="sub-apps/roast-development-calculator/" component={RoastDevCalculator} />
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({dripTimer_speed}) {
  return {
    speed: dripTimer_speed
  };
}

export default connect(mapStateToProps)(App);
