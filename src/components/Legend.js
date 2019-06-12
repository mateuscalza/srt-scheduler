import React from 'react';
import { styles, RUNNING, BLOCKED, READY } from '../utils/states';

export default function Legend() {
  return (
    <div className="legend">
      <span className="badge" style={styles[READY]}>
        PRONTO
      </span>
      <span className="badge" style={styles[BLOCKED]}>
        BLOQUEADO
      </span>
      <span className="badge" style={styles[RUNNING]}>
        RODANDO
      </span>
    </div>
  );
}
