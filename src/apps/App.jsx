import React, { Component } from 'react';
import HomeMenu from './home/index.jsx';
import '../style/header.scss';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <HomeMenu />
        {this.props.children}
      </div>
    )
  }
}

export default App;
