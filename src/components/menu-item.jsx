import React from 'react';

export default (props) => (
  <div className="menu-item-container">
    <div className="menu-circle">{props.icon}</div>
    <h6>{props.title}</h6>
  </div>
);
