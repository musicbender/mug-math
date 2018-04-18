import React from 'react';
import MugSlide from '../../../components/mugslide';
import colors from '../constants/colors.json';
import sliderConfig from '../constants/slider.json';

export default (props) => {
  return (
    <div className="color-slider-container">
      <MugSlide
        {...sliderConfig}
        max={Object.keys(colors).length}

      />
    </div>
  );
}
