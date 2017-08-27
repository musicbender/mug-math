import React from 'react';
import '../style/components/footer.scss';

export default (props) => {
  return (
    <div className={`footer-container ${props.appOpen && "app-open"} ${props.type}`}>
      <h6 className="version">{`v. ${process.env.VERSION}`}</h6>
    </div>
  );
}
