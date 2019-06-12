import React from 'react';

export default function RunControl({
  status,
  onStart,
  onConfigure,
  onStop,
  time
}) {
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

  const handleReset = event => {
    event.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="control">
      <p>
        <strong className="title">Controles</strong>
        <br />
        <small>{status ? 'Em execução' : 'Parado'}</small>
        <br />
        <small>Quantuns: {time > 0 ? time : 0}</small>
      </p>
      <div className="buttons">
        <button disabled={status} onClick={handleStart} className="start">
          Iniciar
        </button>
        <button className="configure" disabled={status} onClick={onConfigure}>
          Processos
        </button>
        <button className="reset" disabled={status} onClick={handleReset}>
          Resetar
        </button>
        <button className="stop" disabled={!status} onClick={handleStop}>
          Parar
        </button>
      </div>
    </div>
  );
}
