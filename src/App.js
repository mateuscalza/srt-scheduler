import React, { useState } from 'react';
import Timeline from './components/Timeline';
import ScaleRange from './components/ScaleRange';

function App() {
  const [pixelsPerUnit, setPixelsPerUnit] = useState(30);
  const [processes] = useState([
    { applicationName: 'Google Chrome', arrivalTime: 1, burstTime: 2 },
    { applicationName: 'Media Player', arrivalTime: 2, burstTime: 3 },
    { applicationName: 'Visual Studio Code', arrivalTime: 3, burstTime: 4 }
  ]);

  return (
    <div className="app">
      <ScaleRange
        value={pixelsPerUnit}
        onChange={event => setPixelsPerUnit(event.target.value)}
      />
      <Timeline processes={processes} pixelsPerUnit={pixelsPerUnit} />
    </div>
  );
}

export default App;
