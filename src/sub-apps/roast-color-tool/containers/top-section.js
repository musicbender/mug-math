import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom';
import LevelView from '../components/level-view';
import Flames from '../components/flames';
import colors from '../constants/colors.json';
import { getRGB } from '../util/color';

class TopSection extends Component {
  constructor(props) {
    super(props);
  }

  colorIsMax() {
    return this.props.color === Object.keys(colors).length -1;
  }

  render() {
    const color = Object.keys(colors)[this.props.color];
    const styles = { backgroundColor: getRGB(colors[color]) }
    return (
      <section id="playback-controls" className="section section-top playback-controls-div withcolorfade" style={styles}>
        <LevelView value={color} />
        { this.colorIsMax() && <Flames /> }
      </section>
    );
  }
}

function mapStateToProps({roastColorTool}) {
  const { color } = roastColorTool.color;
  return {
    color,
  };
}

export default withRouter(connect(mapStateToProps)(TopSection));
