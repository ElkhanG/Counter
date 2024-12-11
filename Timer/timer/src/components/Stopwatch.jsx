// components/Stopwatch.jsx
import React, { useState } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartStop = () => {
    if (isRunning) {
      setIsRunning(false);
    } else {
      setIsRunning(true);
      const interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
      setTimeout(() => clearInterval(interval), 10000); // Clear after 10 seconds for example
    }
  };

  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div className="stopwatch">
      <h1>{time}s</h1>
      <button onClick={handleStartStop}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button onClick={handleReset} disabled={isRunning}>
        Reset
      </button>
    </div>
  );
}

export default Stopwatch;
