import React from 'react';

export default (props) => {
  const { mode, block, changeBlock, name, order} = props;

  const handleClick = () => {
    if (notResult()) {
      changeBlock(name);
    }
  }

  const notResult = () => {
    return order !== "result" ? true : false;
  }

  const selected = () => {
    return (name === block && notResult()) ? <span>--</span> : '';
  }

  return (
    <div className={`brew-block-${mode} brew-block ${order} brew-${name}`} onClick={() => handleClick()}>
      <div className="brew-calc-body">{selected()}{props.children}</div>
    </div>
  )
}
