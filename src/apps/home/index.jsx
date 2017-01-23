import React, { Component } from 'react';
import { Link } from 'react-router';

class HomeMenu extends Component {
  render() {
    <div className="home-container">
      <h1>Mug Math</h1>
      <Link to='apps/cold-drip-timer' className="home-app-btn">
        Cold Drip Timer
      </Link>
    </div>
  }
}
