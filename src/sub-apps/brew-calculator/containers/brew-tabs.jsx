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
    this.props.changeMode(value);
  }

  render() {
    const propsObj = {
      mode: this.props.mode,
      block: this.props.block,
      changeBlock: this.props.changeBlock,
      coffee: this.props.coffee,
      water: this.props.water,
      ratio: this.props.ratio
    }

    return (
      <Tabs
        tabItemContainerStyle={tabStyle}
        className="brew-tabs"
        value={this.props.mode}
        onChange={this.handleTabChange}
      >
        <Tab label="Find Ratio" value="ratio" className="tab brew-tab-1">
          <CalcMode {...propsObj} />
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
  const { mode, block } = brewCalc.navigation;
  const { coffee, water, ratio } = brewCalc.values;
  return {
    mode,
    block,
    coffee,
    water,
    ratio
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
