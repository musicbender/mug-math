import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { soundOn, soundOff, changeRipple, initRipple } from '../actions/index';
import TempoView from '../components/tempo-view.jsx';
import PlayButton from '../components/play-button.jsx';
import Tick from '../components/tick.jsx';
import Ripple from '../components/ripple.jsx';
import '../style/playback-controls.scss';

class PlaybackControls extends Component {
    handleClick() {
        const {playing, soundOff, soundOn, audioContext, ripple, initRipple, rippleIsInit } = this.props;
        if (playing) {
            soundOff();
        } else if (!playing) {
            if (ripple === 3 && !rippleIsInit) initRipple();
            soundOn();
        }
    }

    renderTick() {
      const { playing, tempo, audioContext, changeRipple } = this.props;
      if (playing) {
        return (
          <Tick
            ctx={audioContext}
            tempo={tempo}
            changeRipple={changeRipple}
          />
        );
      }
    }

    render() {
      const styles = { backgroundColor: this.props.color }
      return (
          <section id="playback-controls" className="section section-top playback-controls-div withcolorfade" style={styles}>
            <TempoView tempo={this.props.tempo} />
            <PlayButton playing={this.props.playing} click={() => this.handleClick()} />
            <Ripple
              rippleState={this.props.ripple}
              initRipple={this.props.initRipple}
              rippleIsInit={this.props.rippleIsInit}
            />
            {this.renderTick()}
          </section>
      )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        soundOn,
        soundOff,
        changeRipple,
        initRipple,
    }, dispatch);
}

function mapStateToProps({coldDripTimer}) {
  const { tempo, ripple, color, rippleIsInit } = coldDripTimer.speed;
  const { playing } = coldDripTimer.sound;
  return {
    tempo,
    ripple,
    rippleIsInit,
    color,
    playing,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PlaybackControls));
