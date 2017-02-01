import React, { Component } from 'react';
import BrewTabs from './brew-tabs.jsx';
import '../style/top-section.scss';

class TopSection extends Component {
    render() {
      return (
          <section id="playback-controls" className="section section-top brew-section-top">
            <BrewTabs />
          </section>
      )
    }
}

export default TopSection;
