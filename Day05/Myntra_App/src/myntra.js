import React from "react";
import ReactDom from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import products from "./utils/dummy";
import { useState } from "react"; // usestate use kr arha hu kyuki dom manipulate kr raha hai react

// Yaha mai sikh raha hu ki agr ek file me agr export zyada hai tb use import kaise krenge. Upar jo import hai wo export default ke liye hai.

// Note ye kewal export ke liye not for export default:--->
// import { Greet, Meet } from "./utils/dummy";

// we can also change the name of function using as like:--->
import { Greet as Goa, Meet as Moa } from "./utils/dummy";

console.log(products);

function App() {
  let [A, setA] = useState(products);

  function sortArray() {
    products.sort((a, b) => a.Rs - b.Rs);
    setA([...A]);
    // Why we use setA([...A]) line:----->

    // 🧠 React ka Golden Rule:--->
    // React re-render tab karta hai jab State change hoti hai.
    //  Normal variable change hone se React ko pata hi nahi chalta.

    // 🔥 Ab samjho setA([...A]) kya karta hai:---->
    // Ye kya kar raha hai?

    //[...A] → ek naya array reference bana raha hai
    //setA() → React ko bol raha hai:-->
    // “State change ho gayi hai”
    // React dekhta hai:
    // Old reference !== New reference
    // → Re-render trigger

    console.log(products);
  }

  // function sortArray() {
  //   const sorted = [...A].sort((a, b) => a.Rs - b.Rs);
  //   setA(sorted);
  // }

  // function priceAbove999() {
  //   const B = products.filter((value)=>value.Rs > 999)
  //   setA(B);
  // }

  return (
    <>
      <Header />
      <button className="sorting" onClick={sortArray}>
        Sort By Price
      </button>

      {/* <button className="sorting" onClick={priceAbove999}>
        Price above 999
      </button> */}
      {/* // Body */}
      <div className="middle">
        {/* here we use map because it's return an array. */}

        {products.map((item) => (
          <Card
            key={item.id}
            img_link={item.img_link}
            cloth={item.name}
            offer={item.offer}
            rate={item.Rs}
          />
        ))}
      </div>

      {/* // Footer */}

      <Footer />
      <Goa />
      <Moa />
    </>
  );
}

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<App />);
