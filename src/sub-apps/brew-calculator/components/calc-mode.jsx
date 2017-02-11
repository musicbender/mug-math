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
  var blocks;

  if (props.mode === "findRatio") {
    blocks = (
      <div className="brew-block-container">
        <BrewBlock {...nav} name="coffee" order="first">{coffee}g of coffee</BrewBlock>
        <BrewBlock {...nav} name="water" order="second">{water}g of water</BrewBlock>
        <BrewBlock {...nav} name="ratio" order="result">Ratio of 1:{ratio}</BrewBlock>
      </div>
    )
  } else if (props.mode === "findWater") {
    blocks = (
      <div className="brew-block-container">
        <BrewBlock {...nav} name="ratio" order="second">Ratio of 1:{ratio}</BrewBlock>
        <BrewBlock {...nav} name="coffee" order="first">{coffee}g of coffee</BrewBlock>
        <BrewBlock {...nav} name="water" order="result">{water}g of water</BrewBlock>
      </div>
    )
  } else if (props.mode === "findCoffee") {
    blocks = (
      <div className="brew-block-container">
        <BrewBlock {...nav} name="ratio" order="second">Ratio of 1:{ratio}</BrewBlock>
        <BrewBlock {...nav} name="water" order="first">{water}g of water</BrewBlock>
        <BrewBlock {...nav} name="coffee" order="result">{coffee}g of coffee</BrewBlock>
      </div>
    )
  } else {
    return (<p>Error: Could not load blocks</p>)
  }


  return (
    <div>
        {blocks}
    </div>
  )
}
