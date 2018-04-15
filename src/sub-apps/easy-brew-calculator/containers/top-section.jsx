import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import InputSlider from '../components/input-slider';
import sliders from '../constants/sliders.json';
import { changeValue, incrementValue, decrementValue, clearValue } from '../actions';
import '../style/top-section.scss';

class TopSection extends Component {
  constructor(props) {
    super(props);
    this.handleSlider = this.handleSlider.bind(this);
    this.handleIcon = this.handleIcon.bind(this);
    this.strengthArray = ["light", "medium", "strong", "robust", "black hole in your cup"]
  }

  getTargetId(target) {
    return target.id ? target.id : target.parentElement.id;
  }

  getBlock(target) {
    const id = this.getTargetId(target);
    return id.replace('-slider', '');
  }

  handleSlider(e, value) {
    const block = this.getBlock(e.target);
    this.props.changeValue(value, block);
  }

  handleIcon(direction, id) {
    const block = this.getBlock(id);
    if (direction === "up") {
      this.props.incrementValue(block);
    } else {
      this.props.decrementValue(block);
    }
  }

  buildSliders() {
    return Object.keys(sliders).map((slider, i) => {
      return (
        <InputSlider
          {...sliders[slider]}
          name={slider}
          onChange={this.handleSlider}
          onIconClick={this.handleIcon}
          value={this.props[slider]}
          strengthArray={this.strengthArray}
          key={sliders[slider].sliderClass + i}
        />
      );
    })
  }

  render() {
    return (
      <section className="section section-top stacked big-top">
        <div className="block-container">
          {this.buildSliders()}
        </div>
      </section>
    )
  }
}

function mapStateToProps({easyBrewCalc}) {
  const { strength, volume, water, coffee } = easyBrewCalc.value;
  return {
    strength,
    volume,
    water,
    coffee,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    changeValue,
    incrementValue,
    decrementValue,
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TopSection));
