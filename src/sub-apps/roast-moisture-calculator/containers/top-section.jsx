import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { changeBlock, changeNum, increaseNum, decreaseNum } from '../actions/index';
import Block from '../components/blocks.jsx';
import '../style/top-section.scss';

class TopSection extends Component {
  constructor(props) {
    super(props);

    this.adjustNum = this.adjustNum.bind(this);
  }

  adjustNum(direction) {
    const {increaseNum, decreaseNum, block} = this.props;

    direction === 1 ? increaseNum(block) : decreaseNum(block);
  }

  buildBlocks() {
    const blockArray = [
      {name: "preWeight", unit: "g"},
      {name: "postWeight", unit: "g"},
      {name: "moistureLoss", unit: "%"}
    ];

    const blockList = blockArray.map((block, index) => {
      return (
        <Block
          {...this.props}
          name={block.name}
          key={block.name}
          order={index}
          unit={block.unit}
          adjustNum={this.adjustNum}
        />
      )
    });

    return blockList;
  }

  render() {
    return (
        <section className="section section-top">
          <div className="block-container">
              {this.buildBlocks()}
          </div>
        </section>
    )
  }
}

function mapStateToProps({roastMoistureCalc}) {
  const { block } = roastMoistureCalc.navigation;
  const { preWeight, postWeight, moistureLoss } = roastMoistureCalc.values;
  return {
    block,
    preWeight,
    postWeight,
    moistureLoss
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeBlock,
    changeNum,
    increaseNum,
    decreaseNum
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopSection));
