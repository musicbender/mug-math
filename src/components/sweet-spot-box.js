import React from 'react';
import '../style/components/sweet-spot-box.scss';

export default (props) => {
  let sweetspotVisability = props.sweetspot ? "sweetspot-show" : "sweetspot-hide";

  return (
    <div id="sweetspot" className={sweetspotVisability}></div>
  )
}
