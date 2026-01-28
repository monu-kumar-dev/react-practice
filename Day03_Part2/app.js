import React from "react";
import ReactDOM from "react-dom/client";

// const newElement = (
//   <div>
//     <h1>Hello Coder Army</h1>
//     <h2>Maza Aaya mujhe</h2>
//   </div>
// );

// If we donot want div extra then use:-->

// Note:--> JSX :<- js ka expression bhi daal skte hai
const names = "Rohit";
const obj = {
  age: 23,
  salary: 60000,
};
const obj2 = {
  color: "Black",
  backgroundColor: "pink",
  fontSize: "1.3rem",
};

// React element
const newElement = (
  <>
    <h1 id="first" className="hlo">
      Hello Coder Army {names}
    </h1>
    {/* /<h2 money={23} style={obj2}>Maza Aaya mujhe {obj.age}</h2> */}

    {/* if we want in one line not make object before then for line 28:---> */}

    <h2 style={{ backgroundColor: "black", color: "white" }}>
      Maza Aaya mujhe {obj.age}
    </h2>

    {/* Note:--> Sabse pehla sawaal: ye {{ }} kyun hai?
Short answer 🔥:--->
1. JSX me JavaScript likhne ke liye { }
2. CSS JSX me object ke form me hoti hai { }

  */}
  </>
);

// React Componenet:-->
// 1.Class Based Component  // ye outdated ho gya, pahle use hota tha.
// 2.Function Based Component

// Normal function:-->
function greet() {
  return <h1>Aur bhai kaisa hai</h1>
};

// Arrow function:-->
const meet = () => {
  return <h2>Baat to hai</h2>
}

const newElement2 = greet();
const newElement3 = meet();

const container = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(container);

// reactRoot.render(newElement);

// reactRoot.render(newElement2);
// reactRoot.render(newElement3);

// if we want to render multiple function then:--->
reactRoot.render(<>{newElement} {newElement2} {newElement3}</>);
