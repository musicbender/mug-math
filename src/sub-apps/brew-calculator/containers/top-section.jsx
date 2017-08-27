import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { changeMode, changeBlock, changeNum, increaseNum, decreaseNum, clearNum } from '../actions/index';
import BrewTabs from '../components/brew-tabs.jsx';
import '../style/top-section.scss';

class TopSection extends Component {
  constructor(props) {
    super(props);

    this.modeChange = this.modeChange.bind(this);
    this.adjustNum = this.adjustNum.bind(this);
  }

  modeChange(value) {
    this.props.changeMode(value);
    this.props.clearNum();
  }

  adjustNum(direction) {
    const {increaseNum, decreaseNum, block, mode} = this.props;

    direction === 1 ? increaseNum(mode, block) : decreaseNum(mode, block);
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
          <BrewTabs
            className="tabs-container"
            onTab={this.modeChange}
            adjustNum={this.adjustNum}
            location={this.props.location}
            {...propsObj}
          />
        </section>
    )
  }
}

function mapStateToProps({ brewCalc }) {
  const { mode, block } = brewCalc.navigation;
  const { coffee, water, ratio } = brewCalc.values;
  return {
    mode,
    block,
    coffee,
    water,
    ratio,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeMode,
    changeBlock,
    changeNum,
    increaseNum,
    decreaseNum,
    clearNum,
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopSection));
