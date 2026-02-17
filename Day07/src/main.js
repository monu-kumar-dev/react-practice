import React, { useEffect, useState } from "react";
import ReactDom from "react-dom/client";
import Colorful from "./Component/Colorful";

function Main() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Counter is: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      {/* Understanding React.memo kya kya dhyan rakhta hai:--> */}

      {/* After React.memo not run, jb increment increase hogaa */}
      {/* <Colorful></Colorful> */}

      {/* After React.memo not run, jb increment increase hogaa, kyuki yaha default value hai change nhi ho raha. */}
      {/* <Colorful name="Monu"></Colorful> */}

      {/* After React.memo run, kyuki yaha value baar baar change ho raha hai */}
      <Colorful name={count}></Colorful>
    </>
  );
}

const container = document.getElementById("root");
const reactRoot = ReactDom.createRoot(container);
reactRoot.render(<Main></Main>);
