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

function App() {
  return (
    // Header

    // Body
    <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
      <Card
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
        img_link="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        cloth="Pajama"
        offer="25-60%off"
      />

      <Card
        img_link="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
        cloth="Hoodie"
        offer="30-70%off"
      />

      <Card
        img_link="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
        cloth="Shirt"
        offer="20-50%off"
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
      />
    </div>
    // Footer
  );
}

const Root = ReactDom.createRoot(document.getElementById("root"));
Root.render(<App />);
