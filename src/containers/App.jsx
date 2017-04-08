import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { connect } from 'react-redux';
import { black, grey900, grey700, grey500, grey100, white } from 'material-ui/styles/colors';
import HomeMenu from './Home-Menu.jsx';

var muiTheme;

class App extends Component {
  componentWillMount() {
    const initColor = 'rgb(40,40,40)';

    muiTheme = getMuiTheme({
      palette: {
        primary1Color: black,
        primary2Color: grey900,
        primary3Color: grey500,
        accent1Color: black,
        accent2Color: grey100,
        accent3Color: grey500,
        pickerHeaderColor: grey700,
      },
      appBar: {
        height: 45,
        shadow: "none",
        color: black
      },
      tabs: {
        color: black
      },
      tab: {
        color: black
      },
      slider: {
        handleColorZero: 'transparent',
        handleFillColor: initColor,
        handleSize: 20,
        selectionColor: initColor,
        rippleColor: initColor
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
    );
  }
}

export default App;
