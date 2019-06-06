import React, { useState } from 'react';
import { useLocalStorage } from 'react-use';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';
import TimeRange from './components/TimeRange';
import RunControl from './components/RunControl';
import useRunner from './utils/runner';
import Title from './components/Title';

function App() {
  const [pixelsPerUnit, setPixelsPerUnit] = useLocalStorage(
    'pixelsPerUnit',
    30
  );
  const [quantum, setQuantum] = useLocalStorage('quantum', 1000);
  const [processes] = useState([]);

  const runner = useRunner(quantum);

  return (
    <div className="app">
      <Title colors={runner.colors} />

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
