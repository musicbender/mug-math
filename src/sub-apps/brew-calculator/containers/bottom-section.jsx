import React, { Component } from 'react';
import ContentBackspace from 'material-ui/svg-icons/content/backspace';
import '../style/bottom-section.scss';

const backspace = () => { return <ContentBackspace /> ;}
export const LABELS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ".", backspace()];

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
      <section className="section section-bottom withtabs">
        <div className="number-container">
          {labelList}
        </div>
      </section>
    )
  }
}

export default BottomSection;
