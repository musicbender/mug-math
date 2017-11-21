import React from 'react';
import { Route, Link } from 'react-router-dom';
import nav from '../constants/nav.json';

export default (props) => {
  const itemHeight = `${100 / nav.infoMenu.length}%`;

  const itemStyles = {
    height: itemHeight,
    lineHeight: itemHeight,
  };

  return (
     <div className="info-menu-container info-menu-item">
      {
        nav.infoMenu.map((item,index) => {
          switch (item.id) {
            case "about" :
              return (
                <div key={Math.random()} style={itemStyles}>
                  <Link to={item.url}>{item.title}</Link>
                </div>
              );
            default:
              return (
                <div key={Math.random()} style={itemStyles}>
                  <a href={item.url} target="_blank">{item.title}</a>
                </div>
              );
          }
        })
      }
     </div>
  );
}
