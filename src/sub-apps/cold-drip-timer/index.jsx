import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link, browserHistory } from 'react-router';
import { onRange, offRange } from './actions/index';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationArrowBack from 'material-ui/svg-icons/navigation/arrow-back';
import { brown800 } from 'material-ui/styles/colors';
import PlaybackControls from './containers/playback-controls.jsx';
import TempoSlider from './containers/tempo-slider.jsx';
import DropdownMenu from './components/dropdown-menu.jsx';
import barStyle from '../../style/app-bar-style';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

const barStyleObj = {
  height: barStyle.bar.height,
  backgroundColor: "rgba(78, 52, 46, 0.4)"
}

class ColdDripTimer extends Component {
  handleBackButton() {
    browserHistory.push('/');
  }

  render() {
    return (
      <div>
        <div className="sub-app">
          <AppBar
            title="Cold Drip Coffee Timer"
            titleStyle={barStyle.title}
            style={barStyleObj}
            className="app-bar"
            iconElementLeft={<IconButton><NavigationArrowBack /></IconButton>}
            iconStyleLeft={barStyle.iconLeft}
            onLeftIconButtonTouchTap={this.handleBackButton}
            iconStyleRight={barStyle.iconRight}
            iconElementRight={
              <DropdownMenu range={this.props.range} onRange={this.props.onRange} offRange={this.props.offRange}/>
            } />
          <PlaybackControls audioContext={ audioContext } />
          <TempoSlider audioContext={ audioContext } />
        </div>
        <Link to="/" className="sub-app-outter" />
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        onRange,
        offRange
    }, dispatch);
}

function mapStateToProps({dripTimer_speed, dripTimer_range}) {
    return {
    speed: dripTimer_speed,
    range: dripTimer_range
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ColdDripTimer));
