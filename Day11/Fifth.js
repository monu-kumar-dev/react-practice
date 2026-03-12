import GlobalContext from "./Global";
import { useContext } from "react";

function Fifth() {
  const data = useContext(GlobalContext);

  return <>Mein hu Don {data}</>;
}

export default Fifth;
