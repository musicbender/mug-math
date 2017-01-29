import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class HomeMenu extends Component {
  isHome() {
    const {pathname} = this.props;
    if (pathname !== "/") {
      return "home-blur";
    }
  }

  render() {
    return (
      <div className={`home-container ${this.isHome()}`}>
        <h1>Mug Math</h1>
        <Link to='sub-apps/cold-drip-timer/' className="home-app-btn" onlyActiveOnIndex>
          Cold Drip Timer
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pathname: ownProps.location.pathname
  };
}

export default connect(mapStateToProps)(HomeMenu);