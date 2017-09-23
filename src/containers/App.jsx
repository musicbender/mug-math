import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch, withRouter, Link } from 'react-router-dom';
import Perf from 'react-addons-perf';
import { mountAudio } from '../actions/index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muithemeStyle from '../style/muitheme-style';

// Pages
import BrewCalculator from '../sub-apps/brew-calculator/index.jsx';
import ColdDripTimer from '../sub-apps/cold-drip-timer/index.jsx';
import RoastMoistureCalculator from '../sub-apps/roast-moisture-calculator/index.jsx';
import RoastDevCalculator from '../sub-apps/roast-development-calculator/index.jsx';
import HomeMenu from './Home-Menu.jsx';

let muiTheme;

// window.Perf = Perf;

class App extends Component {
  componentWillMount() {
    console.log(`on server? ${process.env.ONSERVER}`);
    muiTheme = getMuiTheme(muithemeStyle);
    if (!process.env.ONSERVER) {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.props.mountAudio(audioContext);
      }
      catch(err) {
        console.error(`Web Audio API is not supported in this browser: ${err}`);
      }
    } else {
      GLOBAL.window = {};
    }
  }

  render() {
    return (
      <div>
        <MuiThemeProvider muiTheme={muiTheme}>
          <div className="app-container">
            <HomeMenu />
            <Route path="/sub-apps/brew-calculator" component={BrewCalculator} />
            <Route path="/sub-apps/cold-drip-timer" component={ColdDripTimer} />
            <Route path="/sub-apps/roast-moisture-calculator" component={RoastMoistureCalculator} />
            <Route path="/sub-apps/roast-development-calculator" component={RoastDevCalculator} />
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountAudio,
    }, dispatch);
}

export default withRouter(connect(null, mapDispatchToProps)(App));
