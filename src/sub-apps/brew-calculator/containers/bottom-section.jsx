import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNum } from '../actions/index';
import KeyPad from '../../../components/key-pad.jsx';
import '../style/bottom-section.scss';


class BottomSection extends Component {
  changeNumber(num) {
    const {mode, block} = this.props;
    this.props.changeNum(num, mode, block);
  }

  render() {
    console.log('test');
    return (
      <section className="section section-bottom withtabs">
        test
      </section>
    )
  }
}

function mapStateToProps({brewCalc}) {
    const { mode, block } = brewCalc.navigation;

    return {
      mode,
      block
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeNum
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BottomSection);

// <KeyPad clickHandle={this.changeNumber} />
