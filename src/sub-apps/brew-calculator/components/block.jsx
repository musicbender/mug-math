import React from 'react';

export default (props) => {
  const { mode, block, changeBlock, type, name, order} = props;

  function handleClick() {
    changeBlock(name);
  }

  function addArrow() {
    return name === block ? <span>--</span> : '';
  }

  return (
    <div className={`brew-block-${mode} brew-block ${order} brew-${type}`} onClick={() => handleClick()}>
      <div className="brew-calc-body">{addArrow()}{props.children}</div>
    </div>
  )
}
