import React from 'react';
import Close from './icons/Close';

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
  const updateJob = (index, key, value) => {
    onChange(oldJobs => {
      const newJobs = [...oldJobs];
      newJobs[index][key] = value;
      return newJobs;
    });
  };

  return (
    <>
      <div className="modal">
        <header>
          <h2 className="title">Processos</h2>
          <Close width={30} height={30} onClick={onClose} />
        </header>
        {jobs.map((job, index) => (
          <fieldset key={index}>
            <legend className="title">#{index}</legend>
            <div className="controls">
              <JobName
                value={job.name}
                onChange={value => updateJob(index, 'name', value)}
              />

              <JobArrivalTime
                value={job.arrivalTime}
                onChange={value => updateJob(index, 'arrivalTime', value)}
              />

              <JobBurstTime
                value={job.burstTime}
                onChange={value => updateJob(index, 'burstTime', value)}
              />
            </div>
          </fieldset>
        ))}
      </div>
    </>
  );
}
