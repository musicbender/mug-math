import React from 'react';
import Mugslide from '../../../components/mugslide';

export default (props) => {
  return (
    <div>
      {props.name}
      {props.value}
      <Mugslide {...props} />
    </div>
  );
}
