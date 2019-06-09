import React from 'react';
import isEmpty from '../utils/empty';
import { styles } from '../utils/states';

export default function Timeline({ jobs, time, pixelsPerQuantum }) {
  const timeSpaces = Array.from(Array(time + 1));
  const fullWidth = (time + 1) * pixelsPerQuantum;

  console.log('jobs', jobs)

  return (
    <div className="timeline">
      <aside>
        <header className="title">Processos</header>
        {jobs.map((item, index) => (
          <div key={index} className="process">
            <label>{item.name}</label>
          </div>
        ))}
      </aside>
      <main>
        <header style={{ width: fullWidth }}>
          {timeSpaces.map((value, index) => (
            <div
              key={index}
              className="step"
              style={{ width: `${pixelsPerQuantum}px` }}
            >
              {index}
            </div>
          ))}
        </header>

        {jobs.map((job, index) => (
          <div key={index} className="process" style={{ width: fullWidth }}>
            {timeSpaces.map((value, index) => {
              return (
                <div
                  key={index}
                  className="step"
                  title={index}
                  style={{
                    width: `${pixelsPerQuantum}px`,
                    ...(isEmpty(job.history[index])
                      ? {}
                      : styles[job.history[index]])
                  }}
                />
              );
            })}
          </div>
        ))}
      </main>
    </div>
  );
}
