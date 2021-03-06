import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { changeBlock, changeTime } from '../actions/index';
import Block from '../components/blocks.jsx';
import '../style/top-section.scss';

class TopSection extends Component {
  constructor(props) {
    super(props);
    this.handleTime = this.handleTime.bind(this);
  }

  componentDidMount() {
    const rdevBlock = document.getElementsByClassName('rdev-block');
    for (let i = 0; i < rdevBlock.length; i++) {
      let input = rdevBlock[i].getElementsByTagName('input')[0];
      input.setAttribute('readonly', 'true');
    }
  }

  handleTime(time, block) {
    this.props.changeTime(time, block);
  }

  buildBlocks() {
    const blockArray = [
      {name: "fcTime", text: "start of first crack: "},
      {name: "totalTime", text: "total roast time: "},
    ];

    const blockList = blockArray.map((block, index) => {
      return (
        <Block
          {...this.props}
          name={block.name}
          key={block.name}
          text={block.text}
          order={index}
          handleTime={this.handleTime}
        />
      )
    });

    return blockList;
  }

  render() {
    return (
        <section className="section section-top stacked big-top">
          <div className="block-container">
              {this.buildBlocks()}
          </div>
        </section>
    )
  }
}

function mapStateToProps({roastDevCalc}) {
  const { block } = roastDevCalc.navigation;
  const { fcTime, totalTime } = roastDevCalc.values;
  return {
    block,
    fcTime,
    totalTime
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeBlock,
    changeTime
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopSection));
