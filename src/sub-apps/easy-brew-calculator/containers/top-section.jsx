import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import '../style/top-section.scss';

class TopSection extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {

  }


  render() {
    return (
        <section className="section section-top stacked big-top">
          <div className="block-container">
            ez
          </div>
        </section>
    )
  }
}

function mapStateToProps({easyBrewCalc}) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopSection));
