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
          <div className="brew-value">
            {name === "ratio" ? `1:${props[name]}` : `${props[name]}${unit}`}
          </div>
        </div>
      )
    } else {
        return (
          <div className="brew-result">
            {name === "ratio" ? `${text} 1:${props[name]}` : `${props[name]}${unit} ${text}`}
          </div>
        )
    }
  }

  return (
    <div className={`brew-block-${mode} brew-block brew-${name} ${selected()}`} onClick={() => handleClick()}>
      <div className="brew-calc-body">
        {getContent()}
      </div>
    </div>
  )
}
