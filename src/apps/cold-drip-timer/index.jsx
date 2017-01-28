import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onRange, offRange} from './actions/index';
import PlaybackControls from './containers/playback-controls.jsx';
import TempoSlider from './containers/tempo-slider.jsx';
import AppBar from 'material-ui/AppBar';
import DropdownMenu from './components/dropdown-menu.jsx';
import barStyle from './style/bar-style';
import '../../style/base.scss';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();

class ColdDripTimer extends Component {
  render() {
    return (
        <div className="app-div">
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
