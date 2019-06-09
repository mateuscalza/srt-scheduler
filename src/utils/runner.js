import { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import srt from '../schedulers/srt';
import jobsConfig from '../config/jobs';
import Job from './job';

/* eslint-disable react-hooks/exhaustive-deps */

let initialized = false;
const whiteColorChars = Array.from(Array(12)).map(() => '#fff');

export default function useRunner(msPerQuantum) {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(-1);
  const [current] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [colors, setColors] = useState(whiteColorChars);

  const processorControls = {};
  const queueControls = { jobs };

  // Prepara o escalonador
  const scheduler = srt(current, processorControls, queueControls);

  // Sempre que o estado de "running" mudar
  useEffect(() => {
    if (running) {
      // Ao iniciar reseta o tempo
      setTime(0);
      setJobs([]);
      if (scheduler.onStart) {
        scheduler.onStart();
      }
      initialized = true;
    } else if (initialized && scheduler.onStop) {
      // Ao parar
      scheduler.onStop();
    }
  }, [running]);

  // Manutenção da fila
  useEffect(() => {
    if (running) {
      // Atualiza cores da logo
      const updateIndex = time - 12 * Math.floor(time / 12);
      const newColors = [...colors];
      newColors[updateIndex] = randomColor({
        luminosity: 'bright'
      });
      setColors(newColors);

      // Atualiza a fila
      const newJobs = jobsConfig
        .filter(job => job.arrivalTime === time)
        .map(job => {
          return new Job({
            name: job.applicationName,
            arrivalTime: job.arrivalTime,
            burstTime: job.burstTime
          });
        });

      setJobs(oldJobs => [...oldJobs.map(job => job.tick(time)), ...newJobs]);
    }
  }, [time]);

  // Ao atualizar a fila
  // useEffect(() => {
  //   if (running) {
  //     scheduler.onQuantum(time);
  //   }
  // }, [queue]);

  // Temporizador para o quantum
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (running) {
        setTime(oldTime => {
          const newTime = oldTime + 1;
          return newTime;
        });
      }
    }, msPerQuantum);
    return () => clearInterval(intervalId);
  }, [msPerQuantum, running]);

  return {
    running,
    time,
    colors,
    jobs,
    run: () => setRunning(true),
    stop: () => setRunning(false)
  };
}
