import React, { useState, useEffect } from "react";

// Background color changer
// color = black
// re-render: call the function again
// SetColor("red")
// useEffect

function Colorful({name}) {
  const [color, setColor] = useState("black");

  console.log("render");
  // console.log("First");
  // document.body.style.backgroundColor = color; // ye do baar chal raha tha same chiz, jb hm red pe ek baar click kiye tb red hua phhir click kiye to ye phhir se chala.
  // Islye hm use krte hai "useEffect" ko 2 baar chalne se rokne ke liye

  // Note:--> useeffect sbse last me run hota hai kyuki ye callback function hai. maine useEffect ke baad console.log("Second") aur useEffect se pahle console.log("First") krke dekha.

  // useEffect(Callback Function, dependency)
  useEffect(() => {
    console.log("UseEffect Executed");
    document.body.style.backgroundColor = color;
  }, [color]);

  // console.log("Second");
  
  return (
    <>
    <h2>{name}</h2>
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

// export default Colorful;
// Note:-> Jb mere ek function ke inside me ek aur function hai aur mai inside wale ko cakk nhi krna chahta ya jb bhi render hota hai to total call hota hai to inside wala bhi call hote rhegaa to call se bachane ke liye use krte hai React.memo ka.

export default React.memo(Colorful);
