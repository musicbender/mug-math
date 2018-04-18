import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeColor, incrementColor, decrementColor } from '../actions/index';
import Mugslide from '../../../components/mugslide';
import colors from '../constants/colors.json';
import sliderConfig from '../constants/slider.json';
import { getRGB } from '../util/color';
import '../style/bottom-section.scss';

class BottomSection extends Component {
  constructor(props) {
    super(props);

    this.handleSlider = this.handleSlider.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
  }

  handleSlider(e, value) {
    this.props.changeColor(value);
  }

  handleIcon(direction) {
    if (direction === "up") {
      this.props.incrementColor();
    } else {
      this.props.decrementColor();
    }
  }

  render() {
    const color = Object.keys(colors)[this.props.color];
    const iconColor = { color: getRGB(colors[color]) };
    return (
      <section className="section section-bottom color-slider-section withcolorfade">
        <Mugslide
          {...sliderConfig}
          max={Object.keys(colors).length - 1}
          value={this.props.color}
          iconColor={iconColor}
          onIconClick={this.handleIcon}
          onChange={this.handleSlider}
          sweetspot={this.props.sweetspot}
        />
      </section>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
      changeColor,
      incrementColor,
      decrementColor,
    }, dispatch);
}

function mapStateToProps({roastColorTool}) {
  const { sweetspot } = roastColorTool.sweetspot;
  const { color } = roastColorTool.color;

  return {
    sweetspot,
    color
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BottomSection));
