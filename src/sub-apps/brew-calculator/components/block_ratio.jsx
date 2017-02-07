import React from 'react';

export default (props) => {
  const { mode, block, changeBlock} = props;
  const { ratio, order } = props;

  return (
    <div className={`brew-${mode}-calc-container ${order} brew-ratio`}>
      <div className="brew-calc-body">a Ratio of 1:{ratio}</div>
    </div>
  )
}
