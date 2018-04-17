import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import TempoView from '../components/tempo-view.jsx';
import '../style/bottom-section.scss';

class TopSection extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const styles = { backgroundColor: this.props.color }
      return (
        <section id="playback-controls" className="section section-top playback-controls-div withcolorfade" style={styles}>
          <TempoView tempo={this.props.tempo} />
        </section>
      )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps({roastColorTool}) {
  return {

  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopSection));
