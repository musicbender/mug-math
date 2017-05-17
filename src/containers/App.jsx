import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muithemeStyle from '../style/muitheme-style';
import HomeMenu from './Home-Menu.jsx';

let muiTheme;
let audioContext;

class App extends Component {
  componentWillMount() {
    muiTheme = getMuiTheme(muithemeStyle);
    try {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    catch(err) {
      console.error(`Web Audio API is not supported in this browser: ${err}`);
    }
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app-container">
          <HomeMenu location={this.props.location} />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
