import React from 'react';
import Close from './icons/Close';
import defaultJobsConfig from '../config/jobs';

function JobName({ value, onChange }) {
  return (
    <label className="control">
      <p>
        <strong className="title">Nome</strong>
      </p>
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
        required
      />
    </label>
  );
}

function JobArrivalTime({ value, onChange }) {
  return (
    <div className="control">
      <p>
        <strong className="title">Tempo de chegada</strong>
      </p>
      <label>
        <span>Mínimo</span> <br />
        <input
          type="number"
          value={value[0]}
          min={0}
          max={value[1]}
          onChange={event => onChange([Number(event.target.value), value[1]])}
          required
        />
      </label>
      <label>
        <span>Máximo</span> <br />
        <input
          type="number"
          value={value[1]}
          min={value[0]}
          max={999}
          onChange={event => onChange([value[0], Number(event.target.value)])}
          required
        />
      </label>
    </div>
  );
}

function JobBurstTime({ value, onChange }) {
  return (
    <div className="control">
      <p>
        <strong className="title">Tempo de execucao</strong>
      </p>
      <label>
        <span>Mínimo</span> <br />
        <input
          type="number"
          value={value[0]}
          min={1}
          max={value[1]}
          onChange={event => onChange([Number(event.target.value), value[1]])}
          required
        />
      </label>
      <label>
        <span>Máximo</span> <br />
        <input
          type="number"
          value={value[1]}
          min={value[0]}
          max={999}
          onChange={event => onChange([value[0], Number(event.target.value)])}
          required
        />
      </label>
    </div>
  );
}

export default function Jobs({ jobs, onChange, onClose }) {
  const handleUpdateJob = (index, key, value) => {
    onChange(oldJobs => {
      const newJobs = [...oldJobs];
      newJobs[index][key] = value;
      return newJobs;
    });
  };

  const handleChangeProcessStackSize = size => {
    onChange(oldJobs => {
      if (size < oldJobs.length) {
        return [...oldJobs].slice(0, size);
      } else if (size > oldJobs.length) {
        return [
          ...oldJobs,
          ...Array.from(Array(size - oldJobs.length)).map(
            (value, index) =>
              defaultJobsConfig[oldJobs.length + index] || {
                name: `Novo #${oldJobs.length +
                  index -
                  defaultJobsConfig.length +
                  1}`,
                arrivalTime: [
                  (oldJobs.length + index) * 4,
                  (oldJobs.length + index) * 4
                ],
                burstTime: [2, 7]
              }
          )
        ];
      }
      return oldJobs;
    });
  };

  return (
    <>
      <div className="modal">
        <header>
          <h2 className="title">Processos</h2>
          <Close width={30} height={30} onClick={onClose} />
        </header>

        <label className="control">
          <p>
            <strong className="title">Quantidade</strong>
          </p>
          <input
            type="number"
            value={jobs.length}
            min={2}
            max={50}
            onChange={event =>
              handleChangeProcessStackSize(Number(event.target.value))
            }
            required
          />
        </label>

        {jobs.map((job, index) => (
          <fieldset key={index}>
            <legend className="title">#{index}</legend>
            <div className="controls">
              <JobName
                value={job.name}
                onChange={value => handleUpdateJob(index, 'name', value)}
              />

              <JobArrivalTime
                value={job.arrivalTime}
                onChange={value => handleUpdateJob(index, 'arrivalTime', value)}
              />

              <JobBurstTime
                value={job.burstTime}
                onChange={value => handleUpdateJob(index, 'burstTime', value)}
              />
            </div>
          </fieldset>
        ))}
      </div>
    </>
  );
}
