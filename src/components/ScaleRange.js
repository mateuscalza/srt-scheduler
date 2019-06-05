import React from 'react';

export default function ScaleRange({ onChange, value }) {
  return (
    <label className="control">
      <p>
        <strong className="title">Escala do grafico</strong>
        <br />
        <small>Pixel por unidade de tempo</small>
      </p>
      <input
        type="range"
        min={30}
        max={500}
        step={1}
        value={value}
        onChange={onChange}
      />
    </label>
  );
}
