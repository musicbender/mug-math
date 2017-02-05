import React, { Component } from 'react';
import BrewTabs from './brew-tabs.jsx';
import '../style/top-section.scss';

class TopSection extends Component {
    render() {
      return (
          <section className="section section-top withtabs">
            <BrewTabs test="test" className="tabs-container"/>
          </section>
      )
    }
}

export default TopSection;
