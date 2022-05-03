import React from 'react';
import '../scss/App.css';
import Wave from 'react-wavify';

function App() {
  return (
    <div className="App">
      <div>
        <Wave fill="url(#gradient)" options={{ height: 5 }}>
          <defs>
            <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="10%"  stopColor="#00ffff" />
            <stop offset="90%" stopColor="#ff00ff" />
            </linearGradient>
          </defs>
        </Wave>
        </div>
      </div>
  );
}

export default App;
