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
      <h1 className="title">
        <span>S</span>
        <span>R</span>
        <span>T</span>
        {' '}
        <span>S</span>
        <span>C</span>
        <span>H</span>
        <span>E</span>
        <span>D</span>
        <span>U</span>
        <span>L</span>
        <span>E</span>
        <span>R</span>
      </h1>
      <h2>Simulador do escalonador SRT</h2>

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
