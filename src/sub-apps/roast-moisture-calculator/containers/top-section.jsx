import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
    const propsObj = {
      block: this.props.block,
      changeBlock: this.props.changeBlock,
      preWeight: this.props.preWeight,
      postWeight: this.props.postWeight
    }

    const blockArray = [
      {name: "preWeight", unit: "g"},
      {name: "postWeight", unit: "g"},
      {name: "moistureLoss", unit: "%"}
    ];

    const blockList = blockArray.map((block, index) => {
      return (
        <Block
          {...propsObj}
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
  const { preWeight, postWeight } = roastMoistureCalc.values;
  return {
    block,
    preWeight,
    postWeight
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

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);
