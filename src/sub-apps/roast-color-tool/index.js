import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import DropdownMenu from './components/dropdown-menu.jsx';
import TopSection from './containers/top-section';
import BottomSection from './containers/bottom-section';
import barStyle from '../../style/app-bar-style';
import { openApp, closeApp } from '../../actions/index';
import { openHelp, closeHelp, onSweetspot, offSweetspot } from './actions/index';

const barStyleObj = {
  height: barStyle.bar.height,
  backgroundColor: "rgba(0, 0, 0, 0.4)"
}

class RoastColorTool extends Component {
  constructor(props) {
    super(props);
    this.handleBackButton = this.handleBackButton.bind(this);
  }

  componentDidMount() {
    document.body.classList.add('app-open');
    this.props.openApp();
  }

  componentWillUnmount() {
    document.body.classList.remove('app-open');
    this.props.closeApp();
  }

  handleBackButton() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="transition-item">
        <div className="sub-app preload">
          <AppBar
            title="Roast Bean Color"
            titleStyle={barStyle.title}
            style={barStyleObj}
            className="app-bar"
            iconElementLeft=
            {
              <IconButton onClick={this.handleBackButton}>
                <NavigationClose />
              </IconButton>
            }
            iconStyleLeft={barStyle.iconLeft}
            iconStyleRight={barStyle.iconRight}
            iconElementRight={
              <DropdownMenu
                sweetspot={this.props.sweetspot}
                onsweetspot={this.props.onSweetspot}
                offsweetspot={this.props.offSweetspot}
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
    );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onSweetspot,
        offSweetspot,
        openHelp,
        closeHelp,
        openApp,
        closeApp,
    }, dispatch);
}

function mapStateToProps({ roastColorTool }) {
    const { help } = roastColorTool.dialog;
    const { sweetspot } = roastColorTool.sweetspot;
    return {
      sweetspot,
      help,
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RoastColorTool));
