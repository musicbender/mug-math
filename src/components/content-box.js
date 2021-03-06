import React from 'react';
import { content_box } from '../constants/content.json';
import '../style/components/content-box.scss';

const ContentBox = (props) => {
  const { welcome: content } = content_box;
  return (
     <div className={`content-box title-${!!content.title}`}>
      { content.title && <h5>{content.title}</h5> }
       {
         Object.keys(content.body).map((p,i) => {
           return (
             <p key={Math.random()}>{content.body[p]}</p>
           );
         })
       }
     </div>
  );
}

export default ContentBox;
