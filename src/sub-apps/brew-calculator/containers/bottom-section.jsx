import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNum } from '../actions/index';
import ContentBackspace from 'material-ui/svg-icons/content/backspace';
import '../style/bottom-section.scss';

export const LABELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", "delete"];

class BottomSection extends Component {
  handleClick(num) {
    this.props.changeNum(num, this.props.block);
  }
  render() {
    const createDelete = () => { return <ContentBackspace /> ;}
    const labelList = LABELS.map((label, index) => {
        return (
          <div className="number-btn" key={index} onClick={() => this.handleClick(label)}>
            <div className="number-btn-num">{label === "delete" ? createDelete() : label}</div>
          </div>
        );
      }
    );

    return (
      <section className="section section-bottom withtabs">
        <div className="number-container">
          {labelList}
        </div>
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
    changeNum
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSection);
