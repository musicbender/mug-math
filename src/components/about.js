import React from 'react';
import { Link } from 'react-router-dom';
import IconBack from 'material-ui/svg-icons/navigation/arrow-back';
import '../style/components/about.scss';

export default (props) => {
  return (
     <div className="about-container">
     <Link to="/info" className="about-back">
      <IconBack />
     </Link>
       <p>about</p>
     </div>
  );
}
