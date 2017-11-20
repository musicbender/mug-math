import React from 'react';
import { Route, Link } from 'react-router-dom';
import InfoMenu from './info-menu';
import About from './about';
import IconMenu from 'material-ui/svg-icons/navigation/menu';
import IconClose from 'material-ui/svg-icons/navigation/close';
import '../style/components/top-bar.scss';
import '../style/components/info-menu.scss';

const TopBar = (props) => {
  const { handleInfoMenu, infoMenuOpen } = props;

  const handleClick = () => {
    handleInfoMenu();
  }

  return (
    <div className={`top-bar-container open-${infoMenuOpen}`}>
      <Link to={infoMenuOpen ? '/' : '/info'} className="hamburger" onClick={() => handleClick()}>
        { infoMenuOpen ? <IconClose className="icon-close"/> : <IconMenu className="icon-menu"/> }
      </Link>
      <h1 className="title"><span>mug</span>math</h1>

      <Route strict path="/info" component={InfoMenu} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default TopBar;
