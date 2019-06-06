import React from 'react';
import { useLocalStorage } from 'react-use';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';
import TimeRange from './components/TimeRange';
import RunControl from './components/RunControl';
import useRunner from './utils/runner';
import Title from './components/Title';

function App() {
  const [pixelsPerQuantum, setPixelsPerQuantum] = useLocalStorage(
    'pixelsPerQuantum',
    30
  );
  const [msPerQuantum, setMsPerQuantum] = useLocalStorage('quantum', 1000);

  const runner = useRunner(msPerQuantum);

  return (
    <div className="app">
      <Title colors={runner.colors} />

      <div className="controls">
        <ScaleRange
          value={pixelsPerQuantum}
          onChange={event => setPixelsPerQuantum(event.target.value)}
        />
        <TimeRange
          value={msPerQuantum}
          onChange={event => setMsPerQuantum(event.target.value)}
        />
        <RunControl
          status={runner.running}
          onStart={runner.run}
          onStop={runner.stop}
          time={runner.time}
        />
      </div>
      <Timeline queue={runner.queue} pixelsPerQuantum={pixelsPerQuantum} />
    </div>
  );
}

export default App;
