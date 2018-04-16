import React from 'react';

export default ({
  name,
  label,
  value,
  unit,
}) => {
  return (
    <div className={`result-block-${name}`}>
      <p className="label">{label}</p>
      <p className="value">{value}</p>
      <p className="unit">{unit}</p>
    </div>
  );
}
