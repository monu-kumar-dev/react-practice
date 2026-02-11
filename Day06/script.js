import React from "react";
import ReactDom from "react-dom/client";

let count = 0;

function updateUI() {
  document.querySelector("h1").innerText = `Count is: ${count}`;
  document.querySelector(".firstButton").innerText = `Increment ${count}`;
  document.querySelector(".secondButton").innerText = `Decrement ${count}`;
}

function Counter() {
  function incrementNumber() {
    count += 1;
    console.log("Count value is: ", count);
    updateUI();
  }

  function decrementNumber() {
    count -= 1;
    console.log("Count value is: ", count);
    updateUI()
  }

  return (
    <div className="first">
      <h1>count is: {count}</h1>
      <button className="firstButton" onClick={incrementNumber}>
        Increment {count}
      </button>
      <button className="secondButton" onClick={decrementNumber}>
        Decrement {count}
      </button>
    </div>
  );
}

const container = document.getElementById("root");
const root = ReactDom.createRoot(container);
root.render(<Counter />);
