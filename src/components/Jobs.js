import React from 'react';
import Close from './icons/Close';

function JobName({ value, onChange }) {
  return (
    <label className="control">
      <p>
        <strong>Nome</strong>
      </p>
      <input
        type="text"
        value={value}
        onChange={event => onChange(event.target.value)}
      />
    </label>
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
            <legend>#{index}</legend>
            <JobName
              value={job.name}
              onChange={value => updateJob(index, 'name', value)}
            />
          </fieldset>
        ))}
      </div>
    </>
  );
}
