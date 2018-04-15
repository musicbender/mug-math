import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { soundOn, soundOff, changeTempo } from '../actions/index';
import Mugslide from '../../../components/mugslide';
import '../style/tempo-slider.scss';

class TempoSlider extends Component {
  constructor(props) {
    super(props);

    this.handleSlider = this.handleSlider.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
    this.stopSound = this.stopSound.bind(this)
  }
  stopSound() {
    const {playing, soundOff, audioContext} = this.props;
    if(playing) { soundOff(audioContext); }
  }

  handleSlider(e, value) {
    this.props.changeTempo(value);
  }

  handleIcon(a) {
    const { changeTempo, tempo } = this.props;
    const currentTempo = tempo;

    this.stopSound();

    if (a === "up") {
      changeTempo(currentTempo + 1);
    } else {
      changeTempo(currentTempo - 1);
    }
  }

  render() {
    var bgColor = {backgroundColor: this.props.color};
    var iconColor = {color: this.props.color};

    return (
      <section className="section section-bottom tempo-slider-section withcolorfade">
        <Mugslide
          min={10}
          max={120}
          step={1}
          defaultValue={40}
          onDragStart={this.stopSound}
          value={this.props.tempo}
          sliderClass="tempo-slider"
          iconColor={iconColor}
          onIconClick={this.handleIcon}
          onChange={this.handleSlider}
          hasSweetSpot="true"
          sweetspot={this.props.sweetspot}
        />
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      soundOn,
      soundOff,
      changeTempo,
    }, dispatch);
}

function mapStateToProps({coldDripTimer}) {
  const { tempo, color } = coldDripTimer.speed;
  const { playing } = coldDripTimer.sound;
  const { sweetspot } = coldDripTimer.sweetspot;

  return {
    tempo,
    color,
    playing,
    sweetspot,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TempoSlider));
