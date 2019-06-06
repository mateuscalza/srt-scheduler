import React from 'react';

export default function ScaleRange({ onChange, value }) {
  return (
    <label className="control">
      <p>
        <strong className="title">Escala</strong>
        <br />
        <small>Pixel por quantum</small>
      </p>
      <input
        type="range"
        min={30}
        max={500}
        step={1}
        value={value}
        onChange={onChange}
      />
      <span className='range-value'>{value}px</span>
    </label>
  );
}
