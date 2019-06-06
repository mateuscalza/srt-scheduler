import React from 'react';

export default function RunControl({ status, onStart, onStop, time }) {
  const handleStart = event => {
    event.preventDefault();
    if (!status) {
      onStart();
    }
  };
  const handleStop = event => {
    event.preventDefault();
    if (status) {
      onStop();
    }
  };

  return (
    <label className="control">
      <p>
        <strong className="title">Controles</strong>
        <br />
        <small>{status ? 'Em execução' : 'Parado'}</small>
        <br />
        <small>{time > 0 ? <>Quantuns: {time}</> : null}</small>
      </p>
      <div className="buttons">
        <button
          style={{ marginRight: 10 }}
          disabled={status}
          onClick={handleStart}
          className="start"
        >
          Iniciar
        </button>
        <button className="stop" disabled={!status} onClick={handleStop}>
          Parar
        </button>
      </div>
    </label>
  );
}
