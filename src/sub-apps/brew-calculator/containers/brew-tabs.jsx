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
  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  handleTabChange(value) {
    const { changeMode } = this.props;
    changeMode(value);
  }

  render() {
    const { mode, block, changeMode, changeBlock } = this.props;

    return (
      <Tabs
        tabItemContainerStyle={tabStyle}
        className="brew-tabs"
        value={mode}
        onChange={this.handleTabChange}
      >
        <Tab label="Find Ratio" value="ratio" className="tab brew-tab-1">
          <CalcMode mode="ratio" />
        </Tab>
        <Tab label="Find Water" value="water" className="tab brew-tab-2">
          <h4>{this.props.mode} in {this.props.block}</h4>
        </Tab>
        <Tab label="Find Coffee" value="coffee" className="tab brew-tab-3">
          <h4>Third Tab</h4>
        </Tab>
      </Tabs>
    );
  }
}

function mapStateToProps({brewCalc}) {
  return {
    mode: brewCalc.navigation.mode,
    block: brewCalc.navigation.block
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
