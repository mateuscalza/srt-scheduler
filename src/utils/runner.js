import { useState, useEffect } from 'react';
import { Chance } from 'chance';
import randomColor from 'randomcolor';
import srt from '../schedulers/srt';
import Job from './job';

/* eslint-disable react-hooks/exhaustive-deps */

let jobsConfig = null;
const chance = new Chance();
const whiteColorChars = Array.from(Array(12)).map(() => '#fff');

export default function useRunner(msPerQuantum, inputJobsConfig) {
  const [running, setRunning] = useState(false);
  const [time, setTime] = useState(-1);
  const [jobs, setJobs] = useState([]);
  const [colors, setColors] = useState(whiteColorChars);

  // Sempre que o estado de "running" mudar
  useEffect(() => {
    if (running) {
      // Ao iniciar reseta o tempo;
      setTime(0);
      setJobs([]);
      setColors(whiteColorChars);
    }
  }, [running]);

  // Sorteia tempo de chegada e execução
  const prepareJobs = () => {
    if (!jobsConfig) {
      jobsConfig = inputJobsConfig.map(job => ({
        ...inputJobsConfig,
        definedArrivalTime: chance.integer({
          min: Math.min(...job.arrivalTime),
          max: Math.max(...job.arrivalTime)
        }),
        definedBurstTime: chance.integer({
          min: Math.min(...job.burstTime),
          max: Math.max(...job.burstTime)
        })
      }));
      console.log('jobsConfig', JSON.stringify(jobsConfig));
    }
  };

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

      // Prepara os jobs
      prepareJobs();

      // Gera novos jobs
      const newJobs = jobsConfig
        .filter(job => job.definedArrivalTime === time)
        .map(job => {
          return new Job({
            name: job.name,
            arrivalTime: job.definedArrivalTime,
            burstTime: job.definedBurstTime
          });
        });

      setJobs(oldJobs => {
        // Aplica o SRT para tomar decisões, juntando os jobs antigos e os novos
        const allJobs = srt([...oldJobs, ...newJobs]);

        // Em cada job, avança o contador, para que avancem em seus estados
        return allJobs.map(job => job.tick(time));
      });
    }
  }, [time]);

  // Sempre que mudar os jobs
  useEffect(() => {
    // Analisa se todos foram concluídos para parar o algoritmo
    prepareJobs();
    if (jobs.length === jobsConfig.length && jobs.every(job => job.ended)) {
      jobsConfig = null;
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
    stop: () => {
      jobsConfig = null;
      setRunning(false);
    }
  };
}
