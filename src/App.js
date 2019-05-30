import React, { useState } from 'react';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';
import TimeRange from './components/TimeRange';
import RunControl from './components/RunControl';

function App() {
  const [running, setRunning] = useState(false);
  const [pixelsPerUnit, setPixelsPerUnit] = useState(30);
  const [secondsPerUnit, setSecondsPerUnit] = useState(1000);
  const [processes] = useState([]);

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
        <RunControl
          status={running}
          onStart={() => setRunning(true)}
          onStop={() => setRunning(false)}
        />
      </div>
      <Timeline processes={processes} pixelsPerUnit={pixelsPerUnit} />
    </div>
  );
}

export default App;
