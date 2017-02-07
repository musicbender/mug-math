import React from 'react';

export default (props) => {
  const { mode, block, changeBlock} = props;
  const { water, order } = props;

  return (
    <div className={`brew-${mode}-calc-container ${order} brew-water`}>
      <div className="brew-calc-body">{water}g of Water</div>
    </div>
  )
}
