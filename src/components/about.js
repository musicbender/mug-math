import React from 'react';
import { Link } from 'react-router-dom';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import { about } from '../constants/content.json';

export default (props) => {
  return (
     <div className="about-container info-menu-item">
       <p>{about.body.paragraph1}</p>
       <Link to="/info" className="about-back">
        <IconBack /> Back
       </Link>
     </div>
  );
}
