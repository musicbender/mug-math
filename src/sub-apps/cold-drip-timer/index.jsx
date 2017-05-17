import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, browserHistory } from 'react-router';
import {
  mountAudio,
  onSweetspot,
  offSweetspot,
  openDialog,
  closeDialog,
  openHelp,
  closeHelp
} from './actions/index';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { brown800 } from 'material-ui/styles/colors';
import PlaybackControls from './containers/playback-controls.jsx';
import TempoSlider from './containers/tempo-slider.jsx';
import DropdownMenu from './components/dropdown-menu.jsx';
import barStyle from '../../style/app-bar-style';

const barStyleObj = {
  height: barStyle.bar.height,
  backgroundColor: "rgba(0, 0, 0, 0.4)"
}

class ColdDripTimer extends Component {
  componentDidMount() {
    try {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      this.props.mountAudio(audioContext);
    }
    catch(err) {
      console.error(`Web Audio API is not supported in this browser: ${err}`);
    }
  }

  handleBackButton() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div className="transition-item">
        <div className="sub-app">
          <AppBar
            title="Cold Drip Coffee Timer"
            titleStyle={barStyle.title}
            style={barStyleObj}
            className="app-bar"
            iconElementLeft=
            {
              <IconButton>
                <NavigationClose />
              </IconButton>
            }
            iconStyleLeft={barStyle.iconLeft}
            onLeftIconButtonTouchTap={this.handleBackButton}
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
        mountAudio,
        openDialog,
        closeDialog,
        openHelp,
        closeHelp,
    }, dispatch);
}

function mapStateToProps({ coldDripTimer }) {
    const { audioContext } = coldDripTimer.sound;
    const { sweetspot } = coldDripTimer.sweetspot;
    const { dialog, help } = coldDripTimer.dialog;

    return {
      sweetspot,
      audioContext,
      dialog,
      help,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColdDripTimer);
