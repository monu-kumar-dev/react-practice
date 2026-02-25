import React, { useState, useRef } from "react";
import ReactDOM from "react-dom/client";

function StopWatch() {
  const [time, setTime] = useState(0);
  const intervalRef = useRef(null);
  //   const [isRunning, setIsRunning] = useState(false);

  function start() {
    // if (!isRunning) {
    // Agr mai internalRef se hi solve krna chahu tb 1 line me khtm:-->
    if (intervalRef.current == null) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
        // console.log(time);
      }, 1000);
      //   setIsRunning(true);
      // }
    }
  }

  function stop() {
    // if (isRunning) {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    //   setIsRunning(false);
    // }
  }

  function reset() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTime(0);
    // setIsRunning(false);
  }

  return (
    <>
      <h1>StopWatch is: {time}</h1>
      <button onClick={start}>Start</button>
      <br></br>
      <br></br>
      <button onClick={stop}>Stop</button>
      <br></br>
      <br></br>
      <button onClick={reset}>Reset</button>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <StopWatch></StopWatch>,
);
