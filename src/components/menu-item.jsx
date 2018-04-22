import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
  const { open, active, id, path, title } = props;
  const r = 65;
  const viewBox = '50 50 125 125';
  const pathId = `circlePath-${id}`;

  return (
    <div className={`menu-item-container ${id} active-${active} app-open-${open}`}>
      <NavLink to={path} className="menu-circle">{props.children}</NavLink>
      <svg className="menu-text" x="0px" y="0px" width="225px" height="125px" viewBox={viewBox}>
        <defs>
          <path id={pathId} d={`M 150, 150 m -${r}, 0 a ${r},${r} 0 0,1 ${r*2},0 a ${r},${r} 0 0,1 -${r*2},0`} />
        </defs>
        <g>
          <use xlinkHref={`#${pathId}`} fill="none"></use>
          <text fill="rgba(0,0,0,0.72)" width="auto" height="auto">
            <textPath xlinkHref={`#${pathId}`}>{title}</textPath>
          </text>
        </g>
      </svg>
    </div>
  );
};

export default MenuItem;
