import React from "react";
import ReactDOM from "react-dom/client";

const element = React.createElement(
  "h1",
  {
    key: "heading1", // ✅ key added
    id: "first",
    className: "Rahul",
    style: { backgroundColor: "blue", fontSize: "30px", color: "pink" },
  },
  "Hello Coder Army",
);

const element2 = React.createElement(
  "h1",
  {
    key: "heading2", // ✅ key added
    id: "second",
    className: "Rahul",
    style: { backgroundColor: "black", fontSize: "30px", color: "pink" },
  },
  "HEllo ji kya haal chaal",
);
// console.log(element); // object

//                         React                         Render
// {React.createElement => react element(jsObject)} => {Render => HTML Element}

const newElement = <h1>Hello Coder Army</h1>; // babel convert this line into: React.createElement('h1', {}, "Hello Coder")

//       babel:                     React                        Render
// JSX => React.createElement() => react element(jsObject)} => {Render => HTML Element}

const container = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(container);

// +++++++++++ Creating div +++++++++++
// const div1 = React.createElement("div", {}, [element, element2]);
// reactRoot.render(div1);

reactRoot.render(newElement);

// jsx: Javascript XML: HTML code direct js ke andar likh skte hai
