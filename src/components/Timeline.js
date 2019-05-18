import React from 'react';
import './Timeline.css';

export default function Timeline({ processes, pixelsPerUnit }) {
  const processesTimeline = processes.map(item => {
    const totalTime = item.arrivalTime + item.burstTime + item.waitingTime;

    return {
      ...item,
      totalTime,
      totalWidth: pixelsPerUnit * totalTime,
      arrivalWidth: pixelsPerUnit * item.arrivalTime,
      waitingWidth: pixelsPerUnit * item.waitingTime,
      burstWidth: pixelsPerUnit * item.burstTime
    };
  });
  const maxTime = Math.max(0, ...processesTimeline.map(item => item.totalTime));

  return (
    <div className="timeline">
      <aside>
        <header>Processos</header>
        {processes.map((item, index) => (
          <div key={index} className="process">
            <label>{item.applicationName}</label>
          </div>
        ))}
      </aside>
      <main>
        <header style={{ width: `${maxTime * pixelsPerUnit}px` }}>
          {Array.from(Array(maxTime)).map((value, index) => (
            <div
              key={index}
              className="step"
              style={{ width: `${pixelsPerUnit}px` }}
            >
              {index + 1}
            </div>
          ))}
        </header>
        {processesTimeline.map((item, index) => (
          <div key={index} className="process" style={{ width: item.totalWidth }}>
            <div className="arrival" style={{ width: item.arrivalWidth }} />
            <div className="waiting" style={{ width: item.waitingWidth }} />
            <div className="burst" style={{ width: item.burstWidth }} />
          </div>
        ))}
      </main>
    </div>
  );
}
