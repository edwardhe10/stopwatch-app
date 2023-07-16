import React from "react";

function LapTimes({ lapTimes }) {
  return (
    <div className="lap-times-container">
      {lapTimes && lapTimes.length > 0 && (
        <div>
          <h2>Lap Times</h2>
          <ul className="lap-times-list">
            {lapTimes.map((lapTime, index) => (
              <div key={index} className="lap-times-item">
                <span className="lap-times-index">Lap {index + 1}:</span>
                {lapTime.hrs}:{lapTime.mins}:{lapTime.secs}:{lapTime.millisecs}
              </div>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LapTimes;
