import { useState, useEffect } from 'react';
import srt from '../schedulers/srt';

/* eslint-disable react-hooks/exhaustive-deps */

export default function useRunner(running, quantum) {
  const [time, setTime] = useState(-1);
  const [current, setCurrent] = useState(null);
  const [queue, setQueue] = useState([]);

  const processorControls = {};
  const queueControls = {};

  const scheduler = srt(current, processorControls, queueControls);

  useEffect(() => {
    if (running) {
      // Ao iniciar
      scheduler.onStart();
    } else {
      // Ao parar
      scheduler.onStop();
    }
  }, [running]);

  // Temporizador para o quantum
  useEffect(() => {
    const intervalId = setInterval(
      () =>
        setTime(oldTime => {
          const newTime = oldTime + 1;
          scheduler.onQuantum(newTime);
          return newTime;
        }),
      quantum
    );
    return () => clearInterval(intervalId);
  }, [quantum]);

  return {
    time,
  };
}
