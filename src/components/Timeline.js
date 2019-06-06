import React from 'react';

export default function Timeline({ queue, pixelsPerQuantum }) {
  // const processesTimeline = processes.map(item => {
  //   const totalTime = item.arrivalTime + item.burstTime + item.waitingTime;

  //   return {
  //     ...item,
  //     totalTime,
  //     totalWidth: pixelsPerQuantum * totalTime,
  //     arrivalWidth: pixelsPerQuantum * item.arrivalTime,
  //     waitingWidth: pixelsPerQuantum * item.waitingTime,
  //     burstWidth: pixelsPerQuantum * item.burstTime
  //   };
  // });
  // const maxTime = Math.max(0, ...processesTimeline.map(item => item.totalTime));

  return (
    <div className="timeline">
      <aside>
        <header className="title">Processos</header>
        {/* {processes.map((item, index) => (
          <div key={index} className="process">
            <label>{item.applicationName}</label>
          </div>
        ))} */}
      </aside>
      <main>
        {JSON.stringify(queue)}
        {/* <header style={{ width: `${maxTime * pixelsPerQuantum}px` }}>
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
            <div className="burst" style={{ width: item.burstWidth }} />
          </div>
        ))} */}
      </main>
    </div>
  );
}
