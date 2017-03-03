import React, { Component } from 'react';
import { connect } from 'react-redux';



class BottomSection extends Component {
  render() {
    return (
      <section className="section section-bottom big-top">
        <div className="block-result-div">
          <div className="block-result">
            {`${this.props.development}% development`}
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
    const { block } = state.roastDevCalc.navigation;
    const { development } = state.roastDevCalc.values;

    return {
      block,
      development
    }
}

export default connect(mapStateToProps)(BottomSection);
