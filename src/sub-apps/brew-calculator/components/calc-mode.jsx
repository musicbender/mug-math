import React from 'react';
import 'array.prototype.move';
import BrewBlock from './block.jsx';
import '../style/calc-modes.scss';

export default (props) => {

  const orderBlocks = () => {
    const blockArray = [
      {name: "coffee", unit: "g", resultText: "of coffee"},
      {name: "water", unit: "g", resultText: "of water"},
      {name: "ratio", unit: "", resultText: "Ratio of"}
    ]

    switch(props.mode) {
      case "findRatio":
        return blockArray;
      case "findWater":
        return blockArray.move(2, 0);
      case "findCoffee":
        return blockArray.move(0, 2);
    }
  }

  const blocks = orderBlocks();
  const blockList = blocks.map((block, index) => {
    return (
      <BrewBlock
        {...props}
        name={block.name}
        key={block.name}
        order={index}
        unit={block.unit}
        text={block.resultText}
      />
    )
  });

  return (
    <div>
        {blockList}
    </div>
  )
}
