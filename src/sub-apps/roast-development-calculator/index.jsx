import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { openHelp, closeHelp } from './actions/index';
import { openApp, closeApp } from '../../actions/index'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { black } from 'material-ui/styles/colors';
import TopSection from './containers/top-section.jsx';
import BottomSection from './containers/bottom-section.jsx';
import DropdownMenu from './components/dropdown-menu.jsx';
import Footer from '../../components/footer.jsx';
import barStyle from '../../style/app-bar-style';

const barStyleObj = {
  height: barStyle.bar.height,
  backgroundColor: black,
  boxShadow: barStyle.bar.shadow
}

const bodyClass = ['app-open', 'roast-dev'];

class BrewCalculator extends Component {
  constructor(props) {
    super(props);

    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    document.body.classList.add(...bodyClass);
    this.props.openApp();
  }

  componentWillUnmount() {
    document.body.classList.remove(...bodyClass);
    this.props.closeApp();
  }

  handleBackButton() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
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
    openApp,
    closeApp,
  }, dispatch);
}

function mapStateToProps({ roastDevCalc }) {
  const { help } = roastDevCalc.dialog;
  return {
    help,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrewCalculator));
