import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { teal800 } from 'material-ui/styles/colors';
import CalcMode from '../components/calc-mode.jsx';

const tabStyle = {
  backgroundColor: teal800
}

class BrewTabs extends Component {
  render() {
    return (
      <Tabs tabItemContainerStyle={tabStyle} className="tabs">
        <Tab label="Find Ratio" className="tab tab-1">
          <CalcMode prefix="ratio" />
        </Tab>
        <Tab label="Find Water" className="tab tab-2">
          <h4>Second Tab</h4>
        </Tab>
        <Tab label="Find Coffee" className="tab tab-3">
          <h4>Third Tab</h4>
        </Tab>
      </Tabs>
    );
  }
}

export default BrewTabs;
