import React from 'react';

export default (props) => {
  const { mode, block, changeBlock, name, unit, text, order} = props;

  const handleClick = () => {
    if (notResult()) {
      changeBlock(name);
    }
  }

  const notResult = () => {
    return order !== 2 ? true : false;
  }

  const selected = () => {
    return (name === block && notResult()) ? <span>--</span> : '';
  }
  console.log(`${block}: ${order}`)

  return (
    <div className={`brew-block-${mode} brew-block brew-${name}`} onClick={() => handleClick()}>
      <div className="brew-calc-body">{selected()}</div>
    </div>
  )
}
