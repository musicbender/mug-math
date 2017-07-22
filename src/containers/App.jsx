import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { mountAudio } from '../actions/index';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muithemeStyle from '../style/muitheme-style';
import HomeMenu from './Home-Menu.jsx';

let muiTheme;

class App extends Component {
  componentWillMount() {
    console.log(`on server? ${process.env.ONSERVER}`);
    muiTheme = getMuiTheme(muithemeStyle);
    if (typeof window !== 'undefined') {
      try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.props.mountAudio(audioContext);
      }
      catch(err) {
        console.error(`Web Audio API is not supported in this browser: ${err}`);
      }
    } else {
      GLOBAL.window = {};
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        mountAudio,
    }, dispatch);
}

export default connect(null, mapDispatchToProps)(App);
