import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { grey900 } from 'material-ui/styles/colors';
import Modes from './modes.jsx';

export default (props) => {

  const tabStyle = {
    backgroundColor: grey900,
  }

  const handleTabChange = (value) => {
    props.onTab(value);
  }

  return (
    <Tabs
      tabItemContainerStyle={tabStyle}
      className="brew-tabs tabs"
      value={props.mode}
      onChange={handleTabChange}
    >
      <Tab label="Find Ratio" value="findRatio" className="tab brew-tab-1">
        <Modes {...props} />
      </Tab>
      <Tab label="Find Water" value="findWater" className="tab brew-tab-2">
        <Modes {...props} />
      </Tab>
      <Tab label="Find Coffee" value="findCoffee" className="tab brew-tab-3">
        <Modes {...props} />
      </Tab>
    </Tabs>
  );
}
