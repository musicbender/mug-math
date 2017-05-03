import React, { Component } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import muithemeStyle from '../style/muitheme-style';
import HomeMenu from './Home-Menu.jsx';

let muiTheme;

class App extends Component {
  componentWillMount() {
    muiTheme = getMuiTheme(muithemeStyle);
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
