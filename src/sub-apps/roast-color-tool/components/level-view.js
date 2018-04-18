import React from 'react';
import '../style/level-view.scss';

export default ({value}) => {
  return (
    <div className="roast-level-view-div">
      <span className="roast-level-number">{value}</span>
    </div>
  )
}
