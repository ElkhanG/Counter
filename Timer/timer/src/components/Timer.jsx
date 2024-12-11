// components/Timer.jsx
import React, { useState, useEffect } from "react";

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleIncrease = (type) => {
    if (type === "hours") setHours((prev) => prev + 1);
    if (type === "minutes") setMinutes((prev) => prev + 1);
    if (type === "seconds") setSeconds((prev) => prev + 1);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev > 0) return prev - 1;
          if (minutes > 0) {
            setMinutes((m) => m - 1);
            return 59;
          }
          if (hours > 0) {
            setHours((h) => h - 1);
            setMinutes(59);
            return 59;
          }
          clearInterval(interval);
          alert("Time is up!");
          setIsRunning(false);
          return 0;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds, minutes, hours]);

  return (
    <div className="timer">
      <div className="time-display">
        <button onClick={() => handleIncrease("hours")}>{hours}h</button>
        <button onClick={() => handleIncrease("minutes")}>{minutes}m</button>
        <button onClick={() => handleIncrease("seconds")}>{seconds}s</button>
      </div>
      <button onClick={handleStart} disabled={isRunning}>
        Start Timer
      </button>
    </div>
  );
}

export default Timer;
