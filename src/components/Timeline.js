import React from 'react';

export default function Timeline({ queue, pixelsPerQuantum }) {
  const processesTimeline = queue.map(item => {
    const totalTime = item.arrivalTime + item.runningTime + item.waitingTime;

    return {
      ...item,
      totalTime,
      totalWidth: pixelsPerQuantum * totalTime,
      arrivalWidth: pixelsPerQuantum * item.arrivalTime,
      waitingWidth: pixelsPerQuantum * item.waitingTime,
      runningWidth: pixelsPerQuantum * item.runningTime
    };
  });
  const maxTime = Math.max(0, ...processesTimeline.map(item => item.totalTime));

  return (
    <div className="timeline">
      <aside>
        <header className="title">Processos</header>
        {queue.map((item, index) => (
          <div key={index} className="process">
            <label>{item.applicationName}</label>
          </div>
        ))}
      </aside>
      <main>
        <header style={{ width: `${maxTime * pixelsPerQuantum}px` }}>
          {Array.from(Array(maxTime)).map((value, index) => (
            <div
              key={index}
              className="step"
              style={{ width: `${pixelsPerQuantum}px` }}
            >
              {index + 1}
            </div>
          ))}
        </header>
        {processesTimeline.map((item, index) => (
          <div
            key={index}
            className="process"
            style={{ width: item.totalWidth }}
          >
            <div className="arrival" style={{ width: item.arrivalWidth }} />
            <div className="waiting" style={{ width: item.waitingWidth }} />
            <div className="running" style={{ width: item.runningWidth }} />
          </div>
        ))}
      </main>
    </div>
  );
}
