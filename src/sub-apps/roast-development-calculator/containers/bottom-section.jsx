import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BottomSection extends Component {
  render() {
    return (
      <section className="section section-bottom stacked big-top">
        <div className="block-result-div">
          <div className="inner-wrapper">
            <div className="block-result rdev-result">
              {`${this.props.development}% development`}
            </div>
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

export default withRouter(connect(mapStateToProps)(BottomSection));
