import React from 'react';

export default function TimeRange({ onChange, value }) {
  return (
    <label className="control">
      <p>
        <strong className="title">Capacidade do processador</strong>
        <br />
        <small>Milissegundos por quantum</small>
      </p>
      <input
        type="range"
        min={10}
        max={10000}
        step={1}
        value={value}
        onChange={onChange}
      />
      <span className="range-value">{value}ms</span>
    </label>
  );
}
