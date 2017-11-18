import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { soundOn, soundOff, changeTempo } from '../actions/index';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import IconPlus from 'material-ui/svg-icons/content/add';
import IconMinus from 'material-ui/svg-icons/content/remove';
import FontIcon from 'material-ui/FontIcon';
import SweetSpotBox from '../components/sweet-spot-box.jsx';
import '../style/tempo-slider.scss';

const config = {
  min: 10,
  max: 120,
  step: 1,
  defaultValue: 40
}

class TempoSlider extends Component {
  constructor(props) {
    super(props);

    this.handleSlider = this.handleSlider.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
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
        <div className="tempo-slider-div">
          <IconButton className="minus" onClick={() => this.handleIcon("down")} iconStyle={iconColor}>
            <IconMinus className="material-icon">-</IconMinus>
          </IconButton>
          <Slider
            {...config}
            onDragStart={() => this.stopSound()}
            value={this.props.tempo}
            onChange={this.handleSlider}
            className="tempo-slider"
          />
          <IconButton className="plus" ref="plus" onClick={() => this.handleIcon("up")} iconStyle={iconColor}>
            <IconPlus className="material-icon">+</IconPlus>
          </IconButton>
          <SweetSpotBox sweetspot={this.props.sweetspot} />
        </div>
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
