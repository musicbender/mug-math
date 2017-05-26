import React from 'react';
import '../style/components/footer.scss';

export default () => (
  <div className="footer-container">
    <h6 className="version">{`v. ${process.env.VERSION}`}</h6>
  </div>
);
