import GlobalContext from "./Global";
import { useContext } from "react";

// export default function Third(props) {
export default function Third() {
  //   const data = useContext(GlobalContext);
  const { count, setCount } = useContext(GlobalContext);

  return (
    <>
      {/* <h2>I am priniting {props.count}</h2> */}
      {/* Now we print using global context */}
      {/* <h2>I am priniting {data} </h2> */}

      <h2>I am priniting {count} </h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
    </>
  );
}
