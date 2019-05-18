import React, { useState } from 'react';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';
import TimeRange from './components/TimeRange';

function App() {
  const [pixelsPerUnit, setPixelsPerUnit] = useState(30);
  const [secondsPerUnit, setSecondsPerUnit] = useState(1000);
  const [processes] = useState([
    { applicationName: 'Google Chrome', arrivalTime: 1, waitingTime: 1, burstTime: 2 },
    { applicationName: 'Media Player', arrivalTime: 2, waitingTime: 2, burstTime: 3 },
    { applicationName: 'Visual Studio Code', arrivalTime: 3, waitingTime: 3, burstTime: 4 }
  ]);

  return (
    <div className="app">
      <div className="controls">
        <ScaleRange
          value={pixelsPerUnit}
          onChange={event => setPixelsPerUnit(event.target.value)}
        />
        <TimeRange
          value={secondsPerUnit}
          onChange={event => setSecondsPerUnit(event.target.value)}
        />
      </div>
      <Timeline processes={processes} pixelsPerUnit={pixelsPerUnit} />
    </div>
  );
}

export default App;
