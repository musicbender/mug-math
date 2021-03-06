import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { changeNum } from '../actions/index';
import KeyPad from '../../../components/key-pad.jsx';
import '../../../style/components/num-pad.scss';


class BottomSection extends Component {
  constructor(props) {
    super(props);
    this.changeNumber = this.changeNumber.bind(this);
  }

  changeNumber(num) {
    const {block} = this.props;
    this.props.changeNum(num, block);
  }

  render() {
    return (
      <section className="section section-bottom">
        <KeyPad clickHandle={this.changeNumber} />
      </section>
    )
  }
}

function mapStateToProps(state) {
    const { block } = state.roastMoistureCalc.navigation;
    return {
      block
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeNum
  }, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BottomSection));
