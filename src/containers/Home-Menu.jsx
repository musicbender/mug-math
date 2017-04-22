import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import IconCoffee from 'material-ui/svg-icons/maps/local-cafe';
import IconColdDrip from 'material-ui/svg-icons/action/opacity';
import IconMoisture from 'material-ui/svg-icons/image/blur-on';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import { openApp, closeApp } from '../actions/index';
import MenuItem from '../components/menu-item.jsx';
import Title from '../components/title.jsx';
import menuData from '../util/menu-data';
import '../style/components/home-menu.scss';
import '../style/transitions.scss';

class HomeMenu extends Component {
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
    const menu = menuData.map((item) => {
      return (
        <MenuItem
          title={item.title}
          url={item.url}
          currentPath={this.props.pathname}
          key={item.id}
          id={item.id}
        >
          {this.getIcon(item.title)}
        </MenuItem>
      );
    });

    return menu;
  }

  isHome() {
    return this.props.pathname === '/';
  }

  subOpen() {
    if (this.isHome()) {
      this.props.closeApp();

      if (process.env.ONSERVER === false) {
        document.body.classList.remove('body-blur');
      }

      return '';
    } else {
      this.props.openApp();

      if (process.env.ONSERVER === false) {
        document.body.classList.add('body-blur');
      }

      return 'sub-open home-blur';
    }
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
    closeApp,
  }, dispatch);
}

function mapStateToProps({ subApp }, ownProps) {
  return {
    pathname: ownProps.location.pathname,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMenu);
