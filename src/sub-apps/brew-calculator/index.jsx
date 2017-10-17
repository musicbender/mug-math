import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { grey900 } from 'material-ui/styles/colors';
import { openHelp, closeHelp } from './actions/index';
import TopSection from './containers/top-section.jsx';
import BottomSection from './containers/bottom-section.jsx';
import DropdownMenu from './components/dropdown-menu.jsx';
import Footer from '../../components/footer.jsx';
import barStyle from '../../style/app-bar-style';

class BrewCalculator extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    if (window.scrollY < 20 && window.innerWidth < 768) {
      setTimeout(() => {
        window.scrollTo(0,500);
      }, 1000)
    }
  }

  handleBackButton() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="sub-app-container">
        <div className="sub-app">
          <AppBar
            title="Brew Ratio Calculator"
            titleStyle={barStyle.title}
            className="app-bar"
            iconElementLeft=
            {
              <IconButton onClick={this.handleBackButton}>
                <NavigationClose />
              </IconButton>
            }
            iconStyleLeft={barStyle.iconLeft}
            iconStyleRight={barStyle.iconRight}
            iconElementRight=
            {
              <DropdownMenu
                help={this.props.help}
                openHelp={this.props.openHelp}
                closeHelp={this.props.closeHelp}
              />
            }
          />
          <TopSection />
          <BottomSection />
          <Footer type="inside" location={this.props.location.pathname} />
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

function mapStateToProps({ brewCalc }) {
  const { help } = brewCalc.dialog;
  return {
    help,
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BrewCalculator));
