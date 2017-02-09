import React from 'react';
import BrewBlock from './block.jsx';

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
      <BrewBlock {...nav} name="coffee" type={coffee} order="first">{coffee}g of coffee</BrewBlock>
      <BrewBlock {...nav} name="water" type={water} order="second">{water}g of water</BrewBlock>
      <BrewBlock {...nav} name="ratio" type={ratio} order="result">Ratio of 1:{ratio}</BrewBlock>
    </div>
  )
}
