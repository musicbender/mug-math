import React, { Component } from 'react';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import IconPlus from 'material-ui/svg-icons/content/add';
import IconMinus from 'material-ui/svg-icons/content/remove';
import SweetSpotBox from './sweet-spot-box';
import '../style/components/mugslide.scss';

class MugSlide extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      min,
      max,
      step,
      defaultValue,
      onDragStart,
      value,
      onChange,
      sliderClass,
      sweetspot,
      hasSweetSpot,
      iconColor,
      handleIcon,
      handleSlider
    } = this.props;

    return (
      <div className={`slider-div ${sliderClass}`}>
        <IconButton className="minus" onClick={() => handleIcon("down")} iconStyle={iconColor}>
          <IconMinus className="material-icon">-</IconMinus>
        </IconButton>
        <Slider
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
          onDragStart={() => onDragStart()}
          value={value}
          onChange={handleSlider}
          className="slider"
        />
        <IconButton className="plus" ref="plus" onClick={() => handleIcon("up")} iconStyle={iconColor}>
          <IconPlus className="material-icon">+</IconPlus>
        </IconButton>
        { hasSweetSpot && <SweetSpotBox sweetspot={sweetspot} /> }
      </div>
    );
  }
}

export default MugSlide;
