import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMode, changeBlock, changeNum } from '../actions/index';
import { Tabs, Tab } from 'material-ui/Tabs';
import { teal800 } from 'material-ui/styles/colors';
import CalcMode from '../components/calc-mode.jsx';

const tabStyle = {
  backgroundColor: teal800
}

class BrewTabs extends Component {
  render() {
    return (
      <Tabs tabItemContainerStyle={tabStyle} className="brew-tabs">
        <Tab label="Find Ratio" className="tab brew-tab-1">
          <CalcMode mode="ratio" />
        </Tab>
        <Tab label="Find Water" className="tab brew-tab-2">
          <h4>Second Tab</h4>
        </Tab>
        <Tab label="Find Coffee" className="tab brew-tab-3">
          <h4>Third Tab</h4>
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({navigation}) {
  return {
    navigation
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeMode,
    changeBlock,
    changeNum
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BrewTabs);
