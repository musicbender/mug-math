import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, withRouter, Link } from 'react-router-dom';
import IconCoffee from 'material-ui/svg-icons/maps/local-cafe';
import IconDrink from 'material-ui/svg-icons/maps/local-drink';
import IconColdDrip from 'material-ui/svg-icons/action/opacity';
import IconMoisture from 'material-ui/svg-icons/image/blur-on';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import IconTonality from 'material-ui/svg-icons/image/tonality';
import { loadedMenu, toggleInfoMenu } from '../actions/index';
import MenuItem from '../components/menu-item.jsx';
import TopBar from '../components/top-bar.js';
import Footer from '../components/footer.jsx';
import ContentBox from '../components/content-box';
import { subApps as menuData } from '../constants/nav.json';
import '../style/components/home-menu.scss';

class HomeMenu extends Component {
  constructor(props) {
    super(props);
    this.handleInfoMenu = this.handleInfoMenu.bind(this);
  }

  componentDidMount() {
    this.props.loadedMenu();
  }

  getIcon(item) {
    switch (item) {
      case "cdt":
        return <IconColdDrip />;
      case "brw":
        return <IconDrink />;
      case "ezb":
        return <IconCoffee />;
      case "dev":
        return <IconFire />;
      case "moi":
        return <IconMoisture />;
      case "rct":
        return <IconTonality />;
      default:
        break;
    }
  }

  getMenu() {
    const menu = menuData.map(item => {
      const thisPath = `/sub-apps${item.url}`;
      return (
        <MenuItem
          title={item.title}
          url={item.url}
          active={this.props.location.pathname === thisPath}
          path={thisPath}
          key={item.id}
          id={item.id}
          open={this.props.open}
        >
          {this.getIcon(item.id)}
          <p>{item.id}</p>
        </MenuItem>
      );
    });

    return menu;
  }

  isHome() {
    return !this.props.location.pathname.match(/sub-apps/g);
  }

  toggleDarken() {
    return this.isHome() ? '' : 'sub-open darken';
  }

  handleInfoMenu() {
    if (!this.props.infoMenuOpen) {
      this.props.history.push('/');
    }

    this.props.toggleInfoMenu();
  }

  render() {
    return (
      <div className={`home-container ${this.toggleDarken()}`}>
        <TopBar
          handleInfoMenu={this.handleInfoMenu}
          infoMenuOpen={this.props.infoMenuOpen} />
        <div className="menu-container">
          {this.getMenu()}
          {this.props.contentBox && <ContentBox />}
        </div>
        <Footer location={this.props.location.pathname} type="outside" />
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadedMenu,
    toggleInfoMenu,
  }, dispatch);
}

function mapStateToProps({ subApp }) {
  const { loaded, contentBox, open, infoMenuOpen } = subApp;
  return {
    loaded,
    open,
    contentBox,
    infoMenuOpen,
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeMenu));
