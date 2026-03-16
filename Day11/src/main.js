import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Increment from "./Increment";
import Decrement from "./Decrement";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Hello Army</h1>
      {/* <button onClick={() => setCount((prev) => prev + 1)}>Increment</button> */}

      <Increment counts={count} setCounts={setCount} />
      <Decrement counts={count} setCounts={setCount} />
    </>
  );
}

const container = document.getElementById("root");
const reactRoot = ReactDom.createRoot(container);
reactRoot.render(<App></App>);
