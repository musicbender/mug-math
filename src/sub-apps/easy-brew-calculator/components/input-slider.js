import React from 'react';
import Mugslide from '../../../components/mugslide';
import '../style/input-slider.scss';

export default (props) => {
  const getValue = () => {
    const { name, value, strengthArray } = props;
    return name === "strength" ? strengthArray[value - 1] : `${value} cups`;
  }

  return (
    <div className={`slider-container ${props.name}`}>
      <p className="name">{props.label}:</p>
      <p className="value">{getValue()}</p>
      <Mugslide {...props} />
    </div>
  );
}
