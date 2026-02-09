import React from "react";
import ReactDom from "react-dom/client";

function Card(props) {
  return (
    <div style={{ border: "2px solid black", padding: "2px" }}>
      <img src={props.img_link} height="200px" width="250px" />

      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h1>{props.offer}</h1>
        <h2>Shop Now</h2>
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "T-Shirt",
    img_link:
      "https://veirdo.in/cdn/shop/files/ai_creative_0000_Layer_6.jpg?v=1754546584",
    offer: "20-80% off",
  },
  {
    id: 2,
    name: "Jeans",
    img_link: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    offer: "30-80% off",
  },
  {
    id: 3,
    name: "Pants",
    img_link: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    offer: "40-60% off",
  },
  {
    id: 4,
    name: "Kurta",
    img_link: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    offer: "20-70% off",
  },
  {
    id: 5,
    name: "Pajama",
    img_link: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
    offer: "25-60% off",
  },
  {
    id: 6,
    name: "Hoodie",
    img_link: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c",
    offer: "30-70% off",
  },
  {
    id: 7,
    name: "Shirt",
    img_link: "https://images.unsplash.com/photo-1520975867597-0b2b6b7b36c3",
    offer: "20-50% off",
  },
  {
    id: 8,
    name: "Jacket",
    img_link: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    offer: "40-80% off",
  },
  {
    id: 9,
    name: "Sneakers",
    img_link: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    offer: "35-65% off",
  },
  {
    id: 10,
    name: "Cap",
    img_link: "https://images.unsplash.com/photo-1528701800489-20be3c3ea6dd",
    offer: "10-40% off",
  },
];

function App() {
  return (
    // Header

    // Body
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>

    {/* I am creating an array and avoid this repeate work */}
    
      {/* <Card
        img_link="https://veirdo.in/cdn/shop/files/ai_creative_0000_Layer_6.jpg?v=1754546584"
        cloth="T-shirt"
        offer="20-80%off"
      />

      <Card
        img_link="https://images.unsplash.com/photo-1542272604-787c3835535d"
        cloth="Jeans"
        offer="30-80%off"
      />

      <Card
        img_link="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        cloth="Pants"
        offer="40-60%off"
      />

      <Card
        img_link="https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf"
        cloth="Kurta"
        offer="20-70%off"
      />

      <Card
        img_link="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c"
        cloth="Jacket"
        offer="40-80%off"
      />

      <Card
        img_link="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
        cloth="Sneakers"
        offer="35-65%off"
      /> */}

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
    // Footer
  );
}

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<App />);
