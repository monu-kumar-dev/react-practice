import Third from "./Third";
// global context (why we use global context jb hmko parent se 3rd ya 4th child pr kuch operation lagana prta tha tb ek ke baad ek props use krna prta tha ab direct ho jayega bina parameter pass kiye.)

import GlobalContext from "./Global";
import { useContext } from "react";

// export default function Second(props) {
export default function Second() {
  //   const data = useContext(GlobalContext);
  const { count, setCount } = useContext(GlobalContext);

  return (
    <>
      {/* <h2>Kaise hai aap log {data}</h2> */}
      <h2>Kaise hai aap log {count}</h2>
      {/* <Third count={props.count} setCount={props.setCount} /> */}
      <Third />
    </>
  );
}
