import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import { teal800 } from 'material-ui/styles/colors';
import CalcMode from '../components/calc-mode.jsx';

export default (props) => {

  const tabStyle = {
    backgroundColor: teal800
  }

  const handleTabChange = (value) => {
    props.onTab(value);
  }

  return (
    <Tabs
      tabItemContainerStyle={tabStyle}
      className="brew-tabs"
      value={props.mode}
      onChange={handleTabChange}
    >
      <Tab label="Find Ratio" value="findRatio" className="tab brew-tab-1">
        <CalcMode {...props} />
      </Tab>
      <Tab label="Find Water" value="findWater" className="tab brew-tab-2">
        <CalcMode {...props} />
      </Tab>
      <Tab label="Find Coffee" value="findCoffee" className="tab brew-tab-3">
        <CalcMode {...props} />
      </Tab>
    </Tabs>
  );
}
