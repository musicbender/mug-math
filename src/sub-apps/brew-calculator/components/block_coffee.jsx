import React from 'react';

export default (props) => {
  const { mode, block, changeBlock} = props;
  const { coffee, order } = props;

  return (
    <div className={`brew-${mode}-calc-container ${order} brew-coffee`}>
      <div className="brew-calc-body">{coffee}g of Coffee</div>
    </div>
  )
}
