import React, { useState, useEffect } from "react";
import LapTimes from "./LapTimes.js";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const [lapTimes, setLapTimes] = useState([]);

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
    setLapTimes([]); // resetting timer resets lap times as well
  };

  const lapTimer = () => {
    const lapTime = {
      hrs,
      mins: mins.toString().padStart(2, "0"),
      secs: secs.toString().padStart(2, "0"),
      millisecs: millisecs.toString().padStart(2, "0"),
    };
    setLapTimes([...lapTimes, lapTime]);
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
        <button className="lap-button" onClick={lapTimer}>
          Lap
        </button>
        <button className="reset-button" onClick={resetTimer}>
          Reset
        </button>
      </div>
      <LapTimes lapTimes={lapTimes} />
    </div>
  );
}

export default Stopwatch;
