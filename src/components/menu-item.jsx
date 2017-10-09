import React from 'react';
import { Link } from 'react-router-dom';

const MenuItem = (props) => {
  const r = 65;
  const viewBox = '50 50 125 125';
  const isPageLoaded = () => {
    return props.loaded ? 'not-loaded' : 'loaded';
  }

  return (
    <div className={`menu-item-container ${props.id} active-${props.active} ${isPageLoaded()}`}>
      <Link to={props.path} className="menu-circle">
        {props.children}
      </Link>
      <svg className="menu-text" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125px" height="125px" viewBox={viewBox}>
        <defs>
          <path id="criclePath" d={`M 150, 150 m -${r}, 0 a ${r},${r} 0 0,1 ${r*2},0 a ${r},${r} 0 0,1 -${r*2},0`} />
        </defs>
        <g>
          <use xlinkHref="#criclePath" fill="none"></use>
          <text fill="#000" width="auto" height="auto">
            <textPath xlinkHref="#criclePath">{props.title}</textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default MenuItem;
