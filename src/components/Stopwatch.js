import React, { useState, useEffect } from "react";

function Stopwatch() {
  const [time, setTime] = useState(0);

  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (running) {
      // increment time every 10ms
      intervalID = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalID); // cleanup
  }, [running, time]); // trigger when running or time changes

  // time calculations for hrs, mins, secs, millisecs
  const hrs = Math.floor(time / 360000);
  const mins = Math.floor((time % 360000) / 6000);
  const secs = Math.floor((time % 6000) / 100);
  const millisecs = time % 100;

  const runTimer = () => {
    setRunning(!running);
  };

  const resetTimer = () => {
    setTime(0);
  };

  return (
    <div>
      <p className="stopwatch-timer">
        {hrs}:{mins.toString().padStart(2, "0")}:
        {secs.toString().padStart(2, "0")}:
        {millisecs.toString().padStart(2, "0")}
      </p>
      <div className="buttons">
        <button className="run-button" onClick={runTimer}>
          {running ? "Stop" : "Start"}{" "}
        </button>
        <button className="reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
