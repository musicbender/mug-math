import React from 'react';
import InfoMenu from './info-menu';
import '../style/components/title.scss';

const TopBar = () => {
  return (
    <div className="title-container">
      <div className="hamburger"></div>
      <h1 className="title"><span>mug</span>math</h1>
    </div>
  );
};

export default TopBar;
