import React, { useState } from 'react';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';
import TimeRange from './components/TimeRange';
import RunControl from './components/RunControl';
import useRunner from './utils/runner';

function App() {
  const [pixelsPerUnit, setPixelsPerUnit] = useState(30);
  const [quantum, setQuantum] = useState(1000);
  const [processes] = useState([]);

  const runner = useRunner(quantum);

  return (
    <div className="app">
      <div className="controls">
        <ScaleRange
          value={pixelsPerUnit}
          onChange={event => setPixelsPerUnit(event.target.value)}
        />
        <TimeRange
          value={quantum}
          onChange={event => setQuantum(event.target.value)}
        />
        <RunControl
          status={runner.running}
          onStart={runner.run}
          onStop={runner.stop}
        />
      </div>
      <Timeline processes={processes} pixelsPerUnit={pixelsPerUnit} />
    </div>
  );
}

export default App;
