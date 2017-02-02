import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { teal800 } from 'material-ui/styles/colors';
import TopSection from './containers/top-section.jsx';
import BottomSection from './containers/bottom-section.jsx';
import DropdownMenu from './components/dropdown-menu.jsx';
import barStyle from '../../style/app-bar-style';

const barStyleObj = {
  height: barStyle.bar.height,
  backgroundColor: teal800
}

class BrewCalculator extends Component {
  handleBackButton() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <div className="sub-app">
          <AppBar
            title="Brew Ratio Calculator"
            titleStyle={barStyle.title}
            style={barStyleObj}
            className="app-bar"
            iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
            iconStyleLeft={barStyle.iconLeft}
            onLeftIconButtonTouchTap={this.handleBackButton}
            iconStyleRight={barStyle.iconRight}
            iconElementRight={
              <DropdownMenu />
            }
          />
          <TopSection />
          <BottomSection />
        </div>
        <Link to="/" className="sub-app-outter" />
      </div>
    )
  }
}

export default BrewCalculator;
