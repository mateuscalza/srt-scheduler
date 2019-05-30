import React from 'react';

export default function RunControl({ status, onStart, onStop }) {
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
        <strong>Controles</strong>
        <br />
        <small>{status ? 'Em execução' : 'Parado'}</small>
      </p>
      <div className="buttons">
        <button
          style={{ marginRight: 10 }}
          disabled={status}
          onClick={handleStart}
        >
          Iniciar
        </button>
        <button disabled={!status} onClick={handleStop}>
          Parar
        </button>
      </div>
    </label>
  );
}
