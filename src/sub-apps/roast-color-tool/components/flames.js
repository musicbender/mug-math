import React from 'react';
import '../style/flames.scss';

export default () => {
  const buildElements = id => {
    return Array(16).fill().map((item, i) => {
      return <div className={id} key={id + i}></div>;
    })
  }

  return (
    <div className="flames-container">
      <div className="fire-container container">
        { buildElements("fire") }
      </div>
      <div className="smoke-container container">
        { buildElements("smoke") }
      </div>
    </div>
  );
}
