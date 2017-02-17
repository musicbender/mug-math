import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeMode, changeBlock, changeNum, clearNum } from '../actions/index';
import BrewTabs from './brew-tabs.jsx';
import '../style/top-section.scss';

class TopSection extends Component {
  constructor(props) {
    super(props);

    this.modeChange = this.modeChange.bind(this);
  }

  modeChange(value) {
    this.props.changeMode(value);
    this.props.clearNum();
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
        <section className="section section-top withtabs">
          <BrewTabs className="tabs-container" onTab={this.modeChange}{...propsObj} />
        </section>
    )
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
    changeNum,
    clearNum
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);
