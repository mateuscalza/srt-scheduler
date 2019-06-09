import { useState, useEffect } from 'react';
import randomColor from 'randomcolor';
import srt from '../schedulers/srt';
import jobsConfig from '../config/jobs';
import Job from './job';

/* eslint-disable react-hooks/exhaustive-deps */

const whiteColorChars = Array.from(Array(12)).map(() => '#fff');

export default function useRunner(msPerQuantum) {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(-1);
  const [jobs, setJobs] = useState([]);
  const [colors, setColors] = useState(whiteColorChars);

  // Sempre que o estado de "running" mudar
  useEffect(() => {
    if (running) {
      // Ao iniciar reseta o tempo
      setTime(0);
      setJobs([]);
      setColors(whiteColorChars);
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

      // Gera novos jobs
      const newJobs = jobsConfig
        .filter(job => job.arrivalTime === time)
        .map(job => {
          return new Job({
            name: job.applicationName,
            arrivalTime: job.arrivalTime,
            burstTime: job.burstTime
          });
        });

      setJobs(oldJobs => {
        const allJobs = srt([...oldJobs, ...newJobs]);
        const syncedAllJobs = allJobs.map(job => job.tick(time));
        return syncedAllJobs;
      });
    }
  }, [time]);

  // Sempre que mudar os jobs

  useEffect(() => {
    // Analisa se todos foram concluídos para parar o algoritmo
    if (jobs.length === jobsConfig.length && jobs.every(job => job.ended)) {
      setRunning(false);
    }
  }, [jobs]);

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
