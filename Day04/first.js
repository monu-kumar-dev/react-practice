import React from "react";
import ReactDom from "react-dom/client";

const element1 = <h1>Hello Coder Army</h1>;
// JSX: <- JS Expression (output laake de: Result produce)
// JSX: <- Statement (unko aap nhi likh skte) like: let x = 2;

let obj = {
  name: "Monu ji",
  age: 18,
};

const arr = [10, 20, 30, "Monu"];

// props = {
//   name: "Monu Kumar",
//   age: "23",
// };

function Greet(props) {
  //   return <h2>Ram Ram Bhaiya ji {obj}</h2>; //Error: Objects are not valid as a React child
  //   return <h2>Ram Ram Bhaiya ji {obj.name}</h2>; // Ram Ram Bhaiya ji Monu ji
  //   return <h2>Ram Ram Bhaiya ji {arr}</h2>; // Ram Ram Bhaiya ji 102030Monu
  return (
    <h2>
      Ram Ram Bhaiya ji {props.name} {props.age}
    </h2>
  );
}

// const element2 = greet("Monu kumar", 23);
// calling function through JSX:--> when call function always remember function first letter always capital
const element2 = <Greet name="Monu Kumar" age="25" />;

const reactRoot = ReactDom.createRoot(document.getElementById("root"));
reactRoot.render(
  <>
    {element1} {element2}
  </>,
);
