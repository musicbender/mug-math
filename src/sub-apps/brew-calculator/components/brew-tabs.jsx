import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { grey900 } from 'material-ui/styles/colors';
import Modes from './modes.jsx';

export default (props) => {

  const tabStyle = {
    backgroundColor: grey900,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`
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
