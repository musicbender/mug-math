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
    return (name === block && notResult()) ? "selected" : '';
  }

  const getContent = () => {
    if (notResult()) {
      return (
        <div>
          <div className="brew-name">{name}</div>
          <div className="brew-value">{props[name]}{unit}</div>
        </div>
      )
    } else {
      if (name === "ratio") {
        return <div className="brew-result">{`${text} 1:${props[name]}`}</div>
      } else {
        return <div className="brew-result">{props[name]}{unit} {text}</div>
      }
    }
  }

  return (
    <div className={`brew-block-${mode} brew-block brew-${name}`} onClick={() => handleClick()}>
      <div className={`brew-calc-body ${selected()}`}>
        {getContent()}
      </div>
    </div>
  )
}
