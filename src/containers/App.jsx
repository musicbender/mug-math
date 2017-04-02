import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import HomeMenu from './Home-Menu.jsx';

var muiTheme;

class App extends Component {
  componentDidMount() {
    muiTheme = getMuiTheme({
      slider: {
        handleSize: 20,
        selectionColor: this.props.speed.color,
        handleColorZero: 'rgb(70, 50, 42)',
        handleFillColor: 'rgb(70, 50, 42)',
        rippleColor: this.props.speed.color
      },
      userAgent: 'all'
    });
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={ muiTheme }>
        <div className="app-container">
          <HomeMenu location={this.props.location} />
         {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

function mapStateToProps({ dripTimer_speed }) {
  return {
    speed: dripTimer_speed
  };
}

export default connect(mapStateToProps)(App);
