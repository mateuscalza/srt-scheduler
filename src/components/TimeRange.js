import React from 'react';

export default function TimeRange({ onChange, value }) {
  return (
    <label className="control">
      <p>
        <strong>Tempo da simulação</strong>
        <br />
        <small>Segundos por unidade de tempo</small>
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
