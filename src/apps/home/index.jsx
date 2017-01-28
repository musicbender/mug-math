import React, { Component } from 'react';
import { Link } from 'react-router';

class HomeMenu extends Component {
  render() {
    return (
      <div className="home-container">
        <h1>Mug Math</h1>
        <Link to='apps/cold-drip-timer/' className="home-app-btn" onlyActiveOnIndex>
          Cold Drip Timer
        </Link>
      </div>
    )
  }
}

export default HomeMenu;
