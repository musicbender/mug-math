import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';

class BrewTabs extends Component {
  render() {
    return (
      <Tabs>
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
