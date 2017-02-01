import React, { Component } from 'react';
import { LABELS } from '../constants/index';

class BottomSection extends Component {
  render() {
    const labelList = LABELS.map((label, index) => {
        return (
          <div className="number-btn" key={index}>
            <div className="number-btn-num">{label}</div>
          </div>
        );
      }
    );

    return (
      <section className="section section-bottom number-btn-section">
        <div className="number-container">
          {labelList}
        </div>
      </section>
    )
  }
}

export default BottomSection;
