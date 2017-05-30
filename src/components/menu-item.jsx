import React from 'react';
import { Link } from 'react-router';

export default (props) => {
  const r = 90;
  const thisPath = `sub-apps${props.url}/`;

  const isActive = () => {
    return props.currentPath === thisPath ? 'active' : '';
  };

  const testLink = () => {
    console.log(`link clicked: ${props.url}`)
  }

  return (
    <div className={`menu-item-container ${props.id} ${isActive()}`}>
      <Link to={thisPath} onClick={() => testLink() } className="menu-circle" onlyActiveOnIndex>
        {props.children}
      </Link>
      <svg className="menu-text" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="125px" height="125px" viewBox="50 50 125 125">
        <defs>
          <path id="criclePath" d={`M 150, 150 m -${r}, 0 a ${r},${r} 0 0,1 ${r*2},0 a ${r},${r} 0 0,1 -${r*2},0`} />
        </defs>
        <g>
          <use href="#criclePath" fill="none" />
          <text fill="#000">
            <textPath href="#criclePath">{props.title}</textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};
