import React from 'react';
import '../style/components/footer.scss';

const Footer = (props) => {
  const appOpen = props.location && props.location.indexOf('sub-apps/') > -1;
  return (
    <div className={`footer-container ${appOpen && "app-open"} ${props.type}`}>
      <h6 className="version">{`v. ${process.env.VERSION}`}</h6>
    </div>
  );
}

export default Footer;
