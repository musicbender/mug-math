import React, { Component } from 'react';
import { connect } from 'react-redux';



class BottomSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="section section-bottom">
        <div className="block-result-div">
          <div className="block-result">
            test
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
    const { block } = state.roastDevCalc.navigation;
    return {
      block
    }
}

export default connect(mapStateToProps)(BottomSection);
