import React, { useState, useMemo, useEffect, useCallback } from "react";
import ReactDOM from "react-dom/client";

// useMemo hook
// 1. Counter button: increase
// 2. Input field: fibonacci number
// 0 1 1 2 3 5 8 13 21 34

function App() {
  const [count, setCount] = useState(0);
  // const [number, setNumber] = useState(null);  // nhi le skte kyuki, React ko uncontrolled → controlled switch pasand nahi hai.
  const [number, setNumber] = useState("");

  // const [result, setResult] = useState(null); // useEffect ke liye tha

  // we convert function fibonacci to useCallback hook to avoid extra call
  // Mai ise function ke bahar bhi likh skta hu pr yaha useCallback hook ka revise krna tha islye likha

  const Fibonacci = useCallback((n) => {
    if (n <= 1) {
      return n;
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2);
  }, []);

  // const result = Fibonacci(Number(number));

  // useEffect:---> (hm jante hai ki useEffect sbse last me run hota hai, jis karan yaha ek render extra ho raha hai. so here use useMemo hook to avoid it)

  // useEffect(() => {
  //   setResult(Fibonacci(Number(number)));
  // }, [number]);

  // useMemo hook:--->
  const result = useMemo(() => {
    return Fibonacci(Number(number));
  }, [number, Fibonacci]);

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
