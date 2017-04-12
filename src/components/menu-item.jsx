import React from 'react';
import { Link } from 'react-router';

const r = 90;

export default (props) => {
  const isActive = () => {
    const thisPath = `sub-apps${props.url}/`;

    return props.currentPath === thisPath ? 'active' : '';
  }

  return (
    <div className={`menu-item-container ${isActive()}`}>
      <Link
        to={`sub-apps${props.url}/`}
        className="menu-circle"
        onlyActiveOnIndex
      >
          {props.children}
      </Link>
      <svg className="menu-text" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300">
          <defs>
              <path id="criclePath" d={`M 150, 150 m -${r}, 0 a ${r},${r} 0 0,1 ${r*2},0 a ${r},${r} 0 0,1 -${r*2},0`} />
          </defs>
          <g>
              <use href="#criclePath" fill="none"/>
              <text fill="#000">
                  <textPath href="#criclePath">{props.title}</textPath>
              </text>
          </g>
      </svg>
    </div>
  )
};
