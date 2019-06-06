import React from 'react';

export default function Title({ colors }) {
  return (
    <>
      <h1 className="title">
        <span style={{ color: colors[0] }}>S</span>
        <span style={{ color: colors[1] }}>R</span>
        <span style={{ color: colors[2] }}>T</span>{' '}
        <span style={{ color: colors[3] }}>S</span>
        <span style={{ color: colors[4] }}>C</span>
        <span style={{ color: colors[5] }}>H</span>
        <span style={{ color: colors[6] }}>E</span>
        <span style={{ color: colors[7] }}>D</span>
        <span style={{ color: colors[8] }}>U</span>
        <span style={{ color: colors[9] }}>L</span>
        <span style={{ color: colors[10] }}>E</span>
        <span style={{ color: colors[11] }}>R</span>
      </h1>
      <h2>Simulador do escalonador SRT</h2>
    </>
  );
}
