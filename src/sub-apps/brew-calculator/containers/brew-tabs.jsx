import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import { teal800 } from 'material-ui/styles/colors';

const tabStyle = {
  backgroundColor: teal800
}

class BrewTabs extends Component {
  render() {
    return (
      <Tabs tabItemContainerStyle={tabStyle}>
        <Tab label="Find Ratio">
          <h4>First Tab</h4>
        </Tab>
        <Tab label="Find Water">
          <h4>Second Tab</h4>
        </Tab>
        <Tab label="Find Coffee">
          <h4>Third Tab</h4>
        </Tab>
      </Tabs>
    );
  }
}

export default BrewTabs;
