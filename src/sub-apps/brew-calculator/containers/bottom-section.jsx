import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeNum } from '../actions/index';
import KeyPad from '../../../components/key-pad.jsx';
import '../style/bottom-section.scss';


class BottomSection extends Component {
  constructor(props) {
    super(props);

    this.changeNumber = this.changeNumber.bind(this);
  }

  changeNumber(num) {
    const {mode, block} = this.props;
    this.props.changeNum(num, mode, block);
  }

  render() {
    return (
      <section className="section section-bottom withtabs">
        <KeyPad clickHandle={this.changeNumber} />
      </section>
    )
  }
}

function mapStateToProps(state) {
    const { mode, block } = state.brewCalc.navigation;

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
