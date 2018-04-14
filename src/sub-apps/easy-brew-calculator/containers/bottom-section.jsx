import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class BottomSection extends Component {
  render() {
    return (
      <section className="section section-bottom stacked big-top">
        <div className="block-result-div">
          <div className="inner-wrapper">
            <div className={`block-result ezb-result`}>
              <span></span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps(state) {
    return {

    }
}

export default withRouter(connect(mapStateToProps)(BottomSection));
