import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="header-container">
          <h6 className="header-title">Mug Math</h6>
        </div>
        {this.props.children}
      </div>
    )
  }
}

export default App;
