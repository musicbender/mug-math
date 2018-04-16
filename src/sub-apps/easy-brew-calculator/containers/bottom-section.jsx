import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ResultsBlock from '../components/result-block';
import { results as content } from '../constants/content.json';
import '../style/bottom-section.scss';

class BottomSection extends Component {
  constructor(props) {
    super(props);
  }

  getBgColor() {
    const values = [160, 135, 110, 85, 60];
    const v = values[this.props.strength - 1];
    return `rgb(${v},${v},${v})`;
  }

  buildBlocks() {
    return Object.keys(content).map((block, i) => {
      return (
        <ResultsBlock
          name={block}
          label={content[block].label}
          unit={content[block].unit}
          value={this.props[block]}
          key={i + block + i}
        />
      );
    });
  }

  render() {
    return (
      <section className="section section-bottom stacked big-top ezb-bottom-section">
        <div className="block-result-div" style={{backgroundColor: this.getBgColor()}}>
          { this.buildBlocks() }
        </div>
      </section>
    )
  }
}

function mapStateToProps({easyBrewCalc}) {
  const { water, coffee, strength } = easyBrewCalc.value;
    return {
      strength,
      water,
      coffee,
    }
}

export default withRouter(connect(mapStateToProps)(BottomSection));
