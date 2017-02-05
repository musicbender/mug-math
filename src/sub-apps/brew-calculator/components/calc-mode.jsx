import React from 'react';

export default (props) => {
  const { prefix } = props;

  return (
    <div>
      <div className={`${prefix}-calc-container first`}>
        <div>0g of Coffee</div>
      </div>
      <div className={`${prefix}-calc-container second`}>
        <div>0g of Water</div>
      </div>
      <div className={`${prefix}-calc-container result`}>
        <div>a Ratio of 0:0</div>
      </div>
    </div>
  )
}
