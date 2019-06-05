import React from 'react';

export default function TimeRange({ onChange, value }) {
  return (
    <label className="control">
      <p>
        <strong className="title">Tempo do quantum</strong>
        <br />
        <small>Milissegundos por quantum</small>
      </p>
      <input
        type="range"
        min={50}
        max={5000}
        step={1}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
