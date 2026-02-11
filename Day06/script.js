// This code using js Dom manipulation

// import React from "react";
// import ReactDom from "react-dom/client";

// let count = 0;

// // Implement counter using JavaScript DOM manipulation
// function updateUI() {
//   document.querySelector("h1").innerText = `Count is: ${count}`;
//   document.querySelector(".firstButton").innerText = `Increment ${count}`;
//   document.querySelector(".secondButton").innerText = `Decrement ${count}`;
// }

// function Counter() {
//   function incrementNumber() {
//     count += 1;
//     console.log("Count value is: ", count);
//     updateUI();
//   }

//   function decrementNumber() {
//     count -= 1;
//     console.log("Count value is: ", count);
//     updateUI();
//   }

//   return (
//     <div className="first">
//       <h1>count is: {count}</h1>
//       <button className="firstButton" onClick={incrementNumber}>
//         Increment {count}
//       </button>
//       <button className="secondButton" onClick={decrementNumber}>
//         Decrement {count}
//       </button>
//     </div>
//   );
// }

// const container = document.getElementById("root");
// const root = ReactDom.createRoot(container);
// root.render(<Counter />);

// Implement using useState hook:---------->

import React, { useState } from "react";
import ReactDom from "react-dom/client";

// count = 2;
// setCount = 1, phhir useState me 1
// setCount = 2, phhir useState me 2
function Counter() {
  let [count, setCount] = useState(0);
  function incrementNumber() {
    // count += 1; // State is immutable. so, You never directly modify it.(Wrong)

    // Correct:-->
    // setCount(count + 1);

    // Even better:--->
    setCount((prev) => prev + 1);

    console.log("Count value is: ", count);
  }

  function decrementNumber() {
    setCount((prev) => prev - 1);
    console.log("Count value is: ", count);
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
