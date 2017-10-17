import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter, Link } from 'react-router-dom';
import IconCoffee from 'material-ui/svg-icons/maps/local-cafe';
import IconColdDrip from 'material-ui/svg-icons/action/opacity';
import IconMoisture from 'material-ui/svg-icons/image/blur-on';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import { openApp, closeApp, loadedMenu } from '../actions/index';
import MenuItem from '../components/menu-item.jsx';
import Title from '../components/title.jsx';
import Footer from '../components/footer.jsx';
import ContentBox from '../components/content-box';
import menuData from '../util/menu-data';
import '../style/components/home-menu.scss';

class HomeMenu extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadedMenu();
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
    const menu = menuData.map((item) => {
      const thisPath = `/sub-apps${item.url}`;
      return (
        <MenuItem
          title={item.title}
          url={item.url}
          active={this.props.location.pathname === thisPath}
          path={thisPath}
          key={item.id}
          id={item.id}
          loaded={this.props.loaded}
        >
          {this.getIcon(item.title)}
        </MenuItem>
      );
    });

    return menu;
  }

  isHome() {
    return this.props.location.pathname === '/';
  }

  toggleBlur() {
    if (this.isHome()) {
      if (!process.env.ONSERVER) {
        document.body.classList.remove('body-blur');
      }
      return '';
    } else {
      if (!process.env.ONSERVER) {
        document.body.classList.add('body-blur');
      }
      return 'sub-open darken';
    }
  }

  render() {
    return (
      <div className={`home-container ${this.toggleBlur()}`}>
        <Title />
        <div className="menu-container">
          {this.getMenu()}
          {this.props.contentBox && <ContentBox />}
        </div>
        <Footer location={this.props.location.pathname} type="outside"/>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadedMenu,
  }, dispatch);
}

function mapStateToProps({ subApp }) {
  const { loaded, contentBox } = subApp;
  return {
    loaded,
    contentBox,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeMenu));
