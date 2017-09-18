import React from 'react';
import { version } from '../constants/config';
import '../style/components/footer.scss';

const Footer = (props) => {
  const appOpen = props.location && props.location.indexOf('sub-apps/') > -1;
  return (
    <div className={`footer-container ${appOpen && "app-open"} ${props.type}`}>
      { appOpen && <h6 className="title">MugMath</h6> }
      <h6 className="version">{`v. ${version}`}</h6>
    </div>
  );
}

export default Footer;
