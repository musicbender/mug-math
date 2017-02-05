import React from 'react';

export default (props) => {
  const { mode, order } = props;

  return (
    <div className={`brew-${mode}-calc-container ${order} brew-water`}>
      <div className="brew-calc-body">0g of Water</div>
    </div>
  )
}