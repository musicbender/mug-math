import React from 'react';
import CoffeeBlock from './block_coffee.jsx';
import WaterBlock from './block_water.jsx';
import RatioBlock from './block_ratio.jsx';
import '../style/calc-modes.scss';

export default (props) => {
  const nav = {
    mode: props.mode,
    block: props.block,
    changeBlock: props.changeBlock
  }

  const {coffee, water, ratio} = props;

  return (
    <div>
      <CoffeeBlock {...nav} coffee={coffee} order="first"/>
      <WaterBlock {...nav} water={water} order="second"/>
      <RatioBlock {...nav} ratio={ratio} order="result"/>
    </div>
  )
}
