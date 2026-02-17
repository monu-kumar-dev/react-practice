import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";

function Main() {
  const [color, setColor] = useState("black");
  document.body.style.backgroundColor = color;
  return (
    <>
      <h1>Background color changer</h1>
      <div className="but">
        <button
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </button>
        <button
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          style={{ backgroundColor: "pink" }}
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          style={{ backgroundColor: "black" }}
          onClick={() => setColor("black")}
        >
          Reset
        </button>
      </div>
    </>
  );
}

const container = document.getElementById("root");
const reactRoot = ReactDom.createRoot(container);
reactRoot.render(<Main></Main>);
