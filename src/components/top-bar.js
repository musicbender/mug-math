import React from 'react';
import InfoMenu from './info-menu';
import '../style/components/top-bar.scss';

const TopBar = (props) => {
  const { handleInfoMenu, infoMenuOpen } = props;

  const handleClick = () => {
    handleInfoMenu();
  }

  return (
    <div className={`top-bar-container open-${infoMenuOpen}`}>
      <div className="hamburger" onClick={() => handleClick()}>=</div>
      <h1 className="title"><span>mug</span>math</h1>
    </div>
  );
};

export default TopBar;
