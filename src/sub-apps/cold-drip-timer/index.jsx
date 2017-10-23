import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';
import { Link, withRouter } from 'react-router-dom';
import {
  onSweetspot,
  offSweetspot,
  openDialog,
  closeDialog,
  openHelp,
  closeHelp,
  reset
} from './actions/index';
import { openApp, closeApp } from '../../actions/index'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import PlaybackControls from './containers/playback-controls.jsx';
import TempoSlider from './containers/tempo-slider.jsx';
import DropdownMenu from './components/dropdown-menu.jsx';
import Footer from '../../components/footer.jsx';
import barStyle from '../../style/app-bar-style';

const barStyleObj = {
  height: barStyle.bar.height,
  backgroundColor: "rgba(0, 0, 0, 0.4)"
}

class ColdDripTimer extends Component {
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
            title="Cold Drip Coffee Timer"
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
                dialog={this.props.dialog}
                openDialog={this.props.openDialog}
                closeDialog={this.props.closeDialog}
                help={this.props.help}
                openHelp={this.props.openHelp}
                closeHelp={this.props.closeHelp}
              />
            }
          />
          <PlaybackControls audioContext={ this.props.audioContext } />
          <TempoSlider audioContext={ this.props.audioContext } />
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
        openDialog,
        closeDialog,
        openHelp,
        closeHelp,
        reset,
        openApp,
        closeApp,
    }, dispatch);
}

function mapStateToProps({ coldDripTimer, subApp }) {
    const { sweetspot } = coldDripTimer.sweetspot;
    const { dialog, help } = coldDripTimer.dialog;
    const { audioContext } = subApp;

    return {
      sweetspot,
      audioContext,
      dialog,
      help,
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColdDripTimer));
