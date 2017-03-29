import React, { Component } from 'react';
import { connect } from 'react-redux';
import IconCoffee from 'material-ui/svg-icons/maps/local-cafe';
import IconColdDrip from 'material-ui/svg-icons/action/opacity';
import IconMoisture from 'material-ui/svg-icons/image/blur-on';
import IconFire from 'material-ui/svg-icons/social/whatshot';
import MenuItem from '../components/menu-item.jsx';
// import '../style/components/home-menu.scss';

class HomeMenu extends Component {
  // isHome() {
  //   const {pathname} = this.props;
  //   if (pathname !== "/") {
  //     document.body.classList.add('body-blur');
  //     return "home-blur";
  //   } else {
  //     document.body.classList.remove('body-blur');
  //     return;
  //   }
  // }

  render() {
    return (
      <div className={`home-container`}>
        <h1>Mug Math</h1>
        <div className="menu-container">
          <div className="menu-row">
            <MenuItem title="Cold Drip Timer" url="/cold-drip-timer"><IconColdDrip /></MenuItem>
            <MenuItem title="Brew Calculator" url="/brew-calculator"><IconCoffee /></MenuItem>
            <MenuItem title="Roast Development" url="/roast-development-calculator"><IconFire /></MenuItem>
            <MenuItem title="Roast Moisture" url="/roast-moisture-calculator"><IconMoisture /></MenuItem>
          </div>
        </div>
      </div>
    );
  }
}

// function mapStateToProps(state, ownProps) {
//   return {
//     pathname: ownProps.location.pathname
//   };
// }

// export default connect(mapStateToProps)(HomeMenu);

export default HomeMenu;


//
// return (
//   <div className={`home-container ${this.isHome()}`}>
//     <h1>Mug Math</h1>
//     <div className="menu-container">
//       <div className="menu-row">
//         <MenuItem title="Cold Drip Timer" url="/cold-drip-timer"><IconColdDrip /></MenuItem>
//         <MenuItem title="Brew Calculator" url="/brew-calculator"><IconCoffee /></MenuItem>
//         <MenuItem title="Roast Development" url="/roast-development-calculator"><IconFire /></MenuItem>
//         <MenuItem title="Roast Moisture" url="/roast-moisture-calculator"><IconMoisture /></MenuItem>
//       </div>
//     </div>
//   </div>
// );
