import React from 'react';
import { useLocalStorage } from 'react-use';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';
import TimeRange from './components/TimeRange';
import RunControl from './components/RunControl';
import useRunner from './utils/runner';
import Title from './components/Title';
import Legend from './components/Legend';

function App() {
  // Controle de pixels por quantum
  const [pixelsPerQuantum, setPixelsPerQuantum] = useLocalStorage(
    'pixelsPerQuantum',
    50
  );

  // Controle de milissegundos por quantum
  const [msPerQuantum, setMsPerQuantum] = useLocalStorage('quantum', 1000);

  // Runner
  const runner = useRunner(msPerQuantum);

  return (
    <div className="app">
      <Title colors={runner.colors} />

      <div className="controls">
        <ScaleRange
          value={pixelsPerQuantum}
          onChange={event => setPixelsPerQuantum(parseInt(event.target.value))}
        />

        <TimeRange
          value={msPerQuantum}
          onChange={event => setMsPerQuantum(parseInt(event.target.value))}
        />

        <RunControl
          status={runner.running}
          onStart={runner.run}
          onStop={runner.stop}
          time={runner.time}
        />
      </div>

      <Timeline
        jobs={runner.jobs}
        time={runner.time}
        pixelsPerQuantum={pixelsPerQuantum}
      />

      <Legend />
    </div>
  );
}

export default App;
