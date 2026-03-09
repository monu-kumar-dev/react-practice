import React, { useState } from "react";
import ReactDom from "react-dom/client";
import Second from "./Second";
import Fifth from "./fifth";

// Now we are creating global context for useState hook
import GlobalContext from "./Global";
import { useContext } from "react";

function App() {
  const [count, setCount] = useState(1);

  return (
    // <>
    //   <h1>Hello Army</h1>
    //   <Second count={count} setCount={setCount} />
    // </>

    // For Global context
    <>
      <Fifth />
      {/* <GlobalContext.Provider value={{ counts:count, setCounts:setCount }}> */}
      {/* <GlobalContext.Provider value={{ count:count, setCount:setCount }}> // we also write */}
      <GlobalContext.Provider value={{ count, setCount }}>
        {" "}
        {/* // jb key value pair same ho tb,we can also write */}
        <h1>Hello Army</h1>
        {/* <Second count={count} setCount={setCount} /> */}
        <Second />
      </GlobalContext.Provider>
    </>
  );
}

const container = document.getElementById("root");
const reactRoot = ReactDom.createRoot(container);
reactRoot.render(<App></App>);

// First create a Create Context
// Provide data ko uske andar: Descending
// consume the context