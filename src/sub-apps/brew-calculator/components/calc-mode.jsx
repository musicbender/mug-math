import React from 'react';
import '../style/calc-modes.scss';

export default (props) => {
  const { prefix } = props;

  return (
    <div>
      <div className={`${prefix}-calc-container first`}>
        <div className="calc-body">0g of Coffee</div>
      </div>
      <div className={`${prefix}-calc-container second`}>
        <div className="calc-body">0g of Water</div>
      </div>
      <div className={`${prefix}-calc-container result`}>
        <div className="calc-body">a Ratio of 0:0</div>
      </div>
    </div>
  )
}
