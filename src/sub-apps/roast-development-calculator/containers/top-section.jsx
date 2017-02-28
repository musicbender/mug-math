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
    const {block} = this.props;

    direction === 1 ? increaseNum(block) : decreaseNum(block);
  }

  buildBlocks() {
    const blockArray = [
      {name: "fcTime", unit: null},
      {name: "totalTime", unit: null},
      {name: "development", unit: "%"}
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
  const { block } = roastDevCalc.navigation;
  const { fcTime, totalTime, development } = roastDevCalc.values;
  return {
    block,
    fcTime,
    totalTime,
    development
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeBlock,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TopSection);
