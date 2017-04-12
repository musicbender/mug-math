import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { openApp, closeApp } from '../actions/index';
import menuData from '../util/menu-data';
import IconCoffee from 'material-ui/svg-icons/maps/local-cafe';
import IconColdDrip from 'material-ui/svg-icons/action/opacity';
import IconMoisture from 'material-ui/svg-icons/image/blur-on';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import MenuItem from '../components/menu-item.jsx';
import Title from '../components/title.jsx';
import '../style/components/home-menu.scss';
import '../style/transitions.scss';

class HomeMenu extends Component {
  isHome() {
    return this.props.pathname === '/' ? true : false;
  }

  subOpen() {
    if (this.isHome()) {
      this.props.closeApp();
      document.body.classList.remove('body-blur');
      return '';
    } else {
      this.props.openApp();
      document.body.classList.add('body-blur');
      return 'sub-open home-blur';
    }
  }

  getIcon(item) {
    switch (item) {
      case "Cold Drip Timer":
        return <IconColdDrip />;
      case "Brew Calculator":
        return <IconCoffee />;
      case "Roast Development":
        return <IconFire />;
      case "Roast Moisture":
        return <IconMoisture />;
      default:
        break;
    }
  }

  getMenu() {
    const menu = menuData.map((item, index) => {
      return (
        <MenuItem
          title={item.title}
          url={item.url}
          currentPath={this.props.pathname}
          key={index}
        >
          {this.getIcon(item.title)}
        </MenuItem>
      )
    });

    return menu;
  }

  render() {
    return (
      <div className={`home-container ${this.subOpen()}`}>
        <Title />
        <div className="menu-container">
          { this.getMenu() }
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    openApp,
    closeApp
  }, dispatch)
}

function mapStateToProps({subApp}, ownProps) {
  return {
    pathname: ownProps.location.pathname,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
