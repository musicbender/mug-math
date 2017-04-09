import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
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
      document.body.classList.remove('body-blur');
      return '';
    } else {
      document.body.classList.add('body-blur');
      return 'sub-open home-blur';
    }
  }

  render() {
    return (
      <div className={`home-container ${this.subOpen()}`}>
        <Title />
        <div className="menu-container">
            <MenuItem title="Cold Drip Timer" url="/cold-drip-timer"><IconColdDrip /></MenuItem>
            <MenuItem title="Brew Calculator" url="/brew-calculator"><IconCoffee /></MenuItem>
            <MenuItem title="Roast Development" url="/roast-development-calculator"><IconFire /></MenuItem>
            <MenuItem title="Roast Moisture" url="/roast-moisture-calculator"><IconMoisture /></MenuItem>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pathname: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(HomeMenu);
