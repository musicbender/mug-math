import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import {onRange, offRange} from './actions/index';
import PlaybackControls from './containers/playback-controls.jsx';
import TempoSlider from './containers/tempo-slider.jsx';
import AppBar from 'material-ui/AppBar';
import DropdownMenu from './components/dropdown-menu.jsx';
import barStyle from './style/bar-style';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

class ColdDripTimer extends Component {
  render() {
    return (
      <div>
        <div className="sub-app">
          <AppBar
            title="Cold Drip Coffee Timer"
            titleStyle={barStyle.title}
            style={barStyle.bar}
            iconStyleLeft={barStyle.iconLeft}
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

export default connect(mapStateToProps, mapDispatchToProps)(ColdDripTimer);
