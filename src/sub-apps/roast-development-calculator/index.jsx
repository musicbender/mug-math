import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openHelp, closeHelp } from './actions/index';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { black } from 'material-ui/styles/colors';
import TopSection from './containers/top-section.jsx';
import BottomSection from './containers/bottom-section.jsx';
import DropdownMenu from './components/dropdown-menu.jsx';
import barStyle from '../../style/app-bar-style';

const barStyleObj = {
  height: barStyle.bar.height,
  backgroundColor: black,
  boxShadow: barStyle.bar.shadow
}

class BrewCalculator extends Component {
  handleBackButton() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="transition-item">
        <div className="sub-app">
          <AppBar
            title="Roast Developer Calculator"
            titleStyle={barStyle.title}
            style={barStyleObj}
            className="app-bar"
            iconElementLeft={
              <IconButton onClick={this.handleBackButton}>
                <NavigationClose />
              </IconButton>
            }
            iconStyleLeft={barStyle.iconLeft}
            iconStyleRight={barStyle.iconRight}
            iconElementRight={
              <DropdownMenu
                help={this.props.help}
                openHelp={this.props.openHelp}
                closeHelp={this.props.closeHelp}
              />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openHelp,
    closeHelp,
  }, dispatch);
}

function mapStateToProps({ roastDevCalc }) {
  const { help } = roastDevCalc.dialog;
  return {
    help,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewCalculator);
