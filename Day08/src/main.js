// import React, { useState, useEffect } from "react";
// import ReactDom from "react-dom/client";

// function PasswordGenerator() {
//   const [password, setPassword] = useState("ABGFDSIYE");
//   const [length, setLength] = useState(10);
//   // why false because if we give value true then checkbox me tick lg jayegaa, jo hm initially nhi chahte.
//   const [numberChanged, setnumberChanged] = useState(false);
//   const [charChanged, setcharChanged] = useState(false);

//   function generatePassword() {
//     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     if (numberChanged) {
//       str += "0123456789";
//     }
//     if (charChanged) {
//       str += "+-)(*&^%$#@!{}[]";
//     }

//     let pass = "";

//     for (let i = 0; i < length; i++) {
//       pass += str[Math.floor(Math.random() * str.length)];
//     }
//     setPassword(pass);
//   }

//   //   generatePassword(); // ye infinite loop chala de raha hai
//   // so, use here useEffect React Hook

//   useEffect(() => {
//     generatePassword();
//   }, [length, numberChanged, charChanged]);

//   return (
//     <>
//       <h1 className="header">{password}</h1>
//       <div className="second">
//         <input
//           type="range"
//           min={5}
//           max={50}
//           value={length}
//           onChange={(e) => setLength(Number(e.target.value))}
//         ></input>
//         <label>Length is: {length}</label>

//         <input
//           type="checkbox"
//           defaultChecked={numberChanged}
//           onChange={() => setnumberChanged(!numberChanged)}
//         ></input>
//         <label>Number</label>

//         <input
//           type="checkbox"
//           defaultChecked={charChanged}
//           onChange={() => setcharChanged(!charChanged)}
//         ></input>
//         <label>Character</label>
//       </div>
//     </>
//   );
// }

// const container = document.getElementById("root");
// const reactRoot = ReactDom.createRoot(container);
// reactRoot.render(<PasswordGenerator></PasswordGenerator>);

// // Note:--->
// // why defaultCheckes?
// // Set the initial checked state only once when the component first renders (mounts).

// ++++++++++++++ Optimized using useCallback ++++++++++++++++++++++++++++

import React, { useState, useEffect, useCallback } from "react";
import ReactDom from "react-dom/client";

function PasswordGenerator() {
  const [password, setPassword] = useState("ABGFDSIYE");
  const [length, setLength] = useState(10);
  // why false because if we give value true then checkbox me tick lg jayegaa, jo hm initially nhi chahte.
  const [numberChanged, setnumberChanged] = useState(false);
  const [charChanged, setcharChanged] = useState(false);

// using useCallback for avoid unnecessary function call:--->

  const generatePassword = useCallback(() => {
      let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (numberChanged) {
        str += "0123456789";
      }
      if (charChanged) {
        str += "+-)(*&^%$#@!{}[]";
      }

      let pass = "";

      for (let i = 0; i < length; i++) {
        pass += str[Math.floor(Math.random() * str.length)];
      }
      setPassword(pass);
    }, [length, numberChanged, charChanged]);

  //   useEffect to avoid to infinite function call
//   useEffect(() => {
//     generatePassword();
//   }, [length, numberChanged, charChanged]);

// +++ OR +++
  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  return (
    <>
      <h1 className="header">{password}</h1>
      <div className="second">
        <input
          type="range"
          min={5}
          max={50}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        ></input>
        <label>Length is: {length}</label>

        <input
          type="checkbox"
          defaultChecked={numberChanged}
          onChange={() => setnumberChanged(!numberChanged)}
        ></input>
        <label>Number</label>

        <input
          type="checkbox"
          defaultChecked={charChanged}
          onChange={() => setcharChanged(!charChanged)}
        ></input>
        <label>Character</label>
      </div>
    </>
  );
}

const container = document.getElementById("root");
const reactRoot = ReactDom.createRoot(container);
reactRoot.render(<PasswordGenerator></PasswordGenerator>);
