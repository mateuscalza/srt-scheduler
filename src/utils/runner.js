import { useState, useEffect } from 'react';
import srt from '../schedulers/srt';

/* eslint-disable react-hooks/exhaustive-deps */

export default function useRunner(quantum) {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(-1);
  const [current, setCurrent] = useState(null);
  const [queue, setQueue] = useState([]);

  const processorControls = {};
  const queueControls = {};

  const scheduler = srt(current, processorControls, queueControls);

  useEffect(() => {
    if (running) {
      // Ao iniciar
      setTime(-1);
      scheduler.onStart();
    } else {
      // Ao parar
      scheduler.onStop();
    }
  }, [running]);

  // Temporizador para o quantum
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('running', running);
      if (running) {
        setTime(oldTime => {
          const newTime = oldTime + 1;
          scheduler.onQuantum(newTime);
          return newTime;
        });
      }
    }, quantum);
    return () => clearInterval(intervalId);
  }, [quantum, running]);

  return {
    running,
    time,
    run: () => setRunning(true),
    stop: () => setRunning(false)
  };
}
