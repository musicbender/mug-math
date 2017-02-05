import React from 'react';
import CoffeeBlock from './block_coffee.jsx';
import WaterBlock from './block_water.jsx';
import RatioBlock from './block_ratio.jsx';
import '../style/calc-modes.scss';

export default (props) => {
  const { mode } = props;

  return (
    <div>
      <CoffeeBlock mode={mode} order="first"/>
      <WaterBlock mode={mode} order="second"/>
      <RatioBlock mode={mode} order="result"/>
    </div>
  )
}
