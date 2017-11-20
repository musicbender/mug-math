import React from 'react';
import { Route, Link } from 'react-router-dom';
import nav from '../constants/nav.json';

export default (props) => {
  return (
     <div className="info-menu-container info-menu-item">
      {
        nav.infoMenu.map((item,index) => {
          switch (item.id) {
            case "about" :
              return <Link to={item.url} key={Math.random()}>{item.title}</Link>;
            default:
              return <a href={item.url} target="_blank" key={Math.random()}>{item.title}</a>
          }
        })
      }
     </div>
  );
}
