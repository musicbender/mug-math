import React from 'react';
import Slider from 'material-ui/Slider';
import IconButton from 'material-ui/IconButton';
import IconPlus from 'material-ui/svg-icons/content/add';
import IconMinus from 'material-ui/svg-icons/content/remove';
import SweetSpotBox from './sweet-spot-box';
import '../style/components/mugslide.scss';

export default ({
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
  onIconClick,
}) => {
  const iconStyle = iconColor || { color: '#000' };
  const handleDrag = onDragStart || (() => null);

  const handleChange = (e, value) => {
    return onChange(e, value, sliderClass);
  }

  return (
    <div className={`slider-div ${sliderClass}`}>
      <IconButton className="minus" onClick={() => onIconClick("down", sliderClass)} iconStyle={iconStyle}>
        <IconMinus className="material-icon">-</IconMinus>
      </IconButton>
      <Slider
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        onDragStart={() => handleDrag()}
        value={value}
        onChange={handleChange}
        className="slider"
        id={sliderClass}
      />
      <IconButton className="plus" onClick={() => onIconClick("up", sliderClass)} iconStyle={iconStyle}>
        <IconPlus className="material-icon">+</IconPlus>
      </IconButton>
      { hasSweetSpot && <SweetSpotBox sweetspot={sweetspot} /> }
    </div>
  );
}
