import React from 'react';
import '../style/ripple.scss';

export default (props) => {
    var rippleClass;
    const one = 'ripple-1';
    const two = 'ripple-2';
    const three = 'ripple-3';
    const hide = 'ripple-hide';

    switch (props.rippleState) {
      case (0):
        rippleClass = {one: hide, two, three};
        break;
      case (1):
        rippleClass  = {one, two: hide, three};
        break;
      case (2):
        rippleClass = {one, two, three: hide};
        break;
      case (3):
        rippleClass = {one: hide, two, three};
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
