import React from "react";
import ReactDom from "react-dom/client";
import Card from "./component/Card";
import Header from "./component/Header";
import Footer from "./component/Footer";
import products from "./utils/dummy";
// Yaha mai sikh raha hu ki agr ek file me agr export zyada hai tb use import kaise krenge. Upar jo import hai wo export default ke liye hai.

// Note ye kewal export ke liye not for export default:--->
// import { Greet, Meet } from "./utils/dummy";

// we can also change the name of function using as like:--->
import { Greet as Goa, Meet as Moa } from "./utils/dummy";


function App() {
  return (
    // Header
    <>
      <Header />
      {/* // Body */}
      <div className="middle">
        {/* here we use map because it's return an array. */}

        {products.map((item) => (
          <Card
            key={item.id}
            img_link={item.img_link}
            cloth={item.name}
            offer={item.offer}
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
