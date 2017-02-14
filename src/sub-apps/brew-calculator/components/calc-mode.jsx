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
  console.log(blocks);
  const blockList = blocks.map((block, index) => {
    return (
      <BrewBlock
        {...props}
        name={block.name}
        key={block.name}
        order={index}
        text={block.text}
        unit={block.unit}
      />
    )
  });

  return (
    <div>
        {blockList}
    </div>
  )
}




// var blocks;
//
// if (props.mode === "findRatio") {
//   blocks = (
//     <div className="brew-block-container">
//       <BrewBlock {...props} name="coffee" order="first">{coffee}g of coffee</BrewBlock>
//       <BrewBlock {...props} name="water" order="second">{water}g of water</BrewBlock>
//       <BrewBlock {...props} name="ratio" order="result">Ratio of 1:{ratio}</BrewBlock>
//     </div>
//   )
// } else if (props.mode === "findWater") {
//   blocks = (
//     <div className="brew-block-container">
//       <BrewBlock {...props} name="ratio" order="first">Ratio of 1:{ratio}</BrewBlock>
//       <BrewBlock {...props} name="coffee" order="second">{coffee}g of coffee</BrewBlock>
//       <BrewBlock {...props} name="water" order="result">{water}g of water</BrewBlock>
//     </div>
//   )
// } else if (props.mode === "findCoffee") {
//   blocks = (
//     <div className="brew-block-container">
//       <BrewBlock {...props} name="ratio" order="first">Ratio of 1:{ratio}</BrewBlock>
//       <BrewBlock {...props} name="water" order="second">{water}g of water</BrewBlock>
//       <BrewBlock {...props} name="coffee" order="result">{coffee}g of coffee</BrewBlock>
//     </div>
//   )
// } else {
//   return (<p>Error: Could not load blocks</p>)
// }
