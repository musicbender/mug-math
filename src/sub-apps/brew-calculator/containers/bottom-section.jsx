import React, { Component } from 'react';

class BottomSection extends Component {
  render() {
    return (
      <section className="section section-bottom number-btn-section">
        <div className="number-container">
          <div className="number-row">
            <div className="number-btn">
              <div className="number-btn-num">1</div>
            </div>
            <div className="number-btn">
              <div className="number-btn-num">2</div>
            </div>
            <div className="number-btn">
              <div className="number-btn-num">3</div>
            </div>
          </div>
          <div className="number-row">
            <div className="number-btn">
              <div className="number-btn">4</div>
            </div>
            <div className="number-btn">
              <div className="number-btn">5</div>
            </div>
            <div className="number-btn">
              <div className="number-btn">6</div>
            </div>
          </div>
          <div className="number-row">
            <div className="number-btn">
              <div className="number-btn-num">7</div>
            </div>
            <div className="number-btn">
              <div className="number-btn-num">8</div>

              </div>
            <div className="number-btn">
              <div className="number-btn-num">9</div>
            </div>
          </div>
          <div className="number-row">
            <div className="number-btn">
              <div className="number-btn-num">0</div>
            </div>
            <div className="number-btn">
              <div className="number-btn-num">.</div>
            </div>
            <div className="number-btn">
              <div className="number-btn-num">del</div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default BottomSection;
