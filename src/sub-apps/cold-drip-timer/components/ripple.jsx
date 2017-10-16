import React from 'react';
import '../style/ripple.scss';

export default (props) => {
    const { rippleState, initRipple, rippleIsInit } = props;
    const one = 'ripple-1';
    const two = 'ripple-2';
    const three = 'ripple-3';
    const hide = 'ripple-hide';
    let rippleClass;
    let started = false;

    switch (rippleState) {
      case (0):
        rippleClass = {one: hide, two: hide, three: hide};
        break;
      case (1):
        rippleClass  = {one, two: hide, three};
        break;
      case (2):
        rippleClass = {one, two, three: hide};
        break;
      case (3):
        rippleClass = {one: hide, two: rippleIsInit ? two : hide, three};
        break;
      default:
        break;
    }

    return (
      <div className="ripple-container">
        <div className={rippleClass.one}></div>
        <div className={rippleClass.two}></div>
        <div className={rippleClass.three}></div>
      </div>
    )
}
