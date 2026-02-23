import React, { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";

// useMemo hook
// 1. Counter button: increase
// 2. Input field: fibonacci number
// 0 1 1 2 3 5 8 13 21 34

function App() {
  const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(null);  // nhi le skte kyuki, React ko uncontrolled → controlled switch pasand nahi hai.
  const [number, setNumber] = useState("");

  const [result, setResult] = useState(null);

  function Fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }

  // const result = Fibonacci(Number(number));

  // useEffect:--->
  useEffect(() => {
    setResult(Fibonacci(Number(number)));
  }, [number]);

  return (
    <>
      <h1>Counter is: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <div>
        <h2>Fibonacci number is: {result}</h2>
        <input
          type="number"
          value={number}
          onChange={(e) => {
            // console.log(typeof e.target.value); // string
            setNumber(e.target.value);
          }}
        ></input>
      </div>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
