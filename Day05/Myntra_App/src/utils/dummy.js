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
];

// mai yaha sikh raha hu ki ek file me kewal ek hi export default ho skta hai. Agr mujhe zyada export karana hai tb mai kewal export ka use krke kara skta hu.

export function Greet() {
  return <h1>Hello Coder Army</h1>;
}

export function Meet() {
  return <h1>Hello Bhaiyaa ji</h1>;
}

export default products;
