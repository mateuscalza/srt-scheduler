import React from 'react';
import isEmpty from '../utils/empty';
import { styles } from '../utils/states';

export default function Timeline({ jobs, time, pixelsPerQuantum }) {
  if (time > 0) {
    const timeSpaces = time > 0 ? Array.from(Array(time)) : [];
    const fullWidth = time * (pixelsPerQuantum + 1);

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
        {time > 0 ? (
          <main>
            <header style={{ width: fullWidth }}>
              {timeSpaces.map((value, index) => (
                <div
                  key={index}
                  className="step"
                  style={{ width: `${pixelsPerQuantum}px` }}
                >
                  {index + 1}
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
                      title={`${index + 1} - job`}
                      style={{
                        width: `${pixelsPerQuantum}px`,
                        ...(isEmpty(job.history[index + 1])
                          ? {}
                          : styles[job.history[index + 1]])
                      }}
                    />
                  );
                })}
              </div>
            ))}
          </main>
        ) : null}
      </div>
    );
  }

  return null;
}
