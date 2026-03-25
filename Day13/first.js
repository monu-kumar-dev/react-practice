import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router, Route, Routes, Link } from "react-router";
import Home from "./Home";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import Details from "./Details";
import Zero from "./Zero";
import Hello from "./Hello";
import Hii from "./Hii";
import Github from "./Github";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Dashboard">Dashboard</Link>
        <Link to="/Details">Details</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}></Route>
        <Route path="/Dashboard" element={<Dashboard></Dashboard>}></Route>
        {/* Details inside Zero */}
        <Route path="/Details" element={<Details></Details>}>
          <Route index element={<Zero></Zero>}></Route>
          <Route path="Hello" element={<Hello></Hello>}></Route>
          <Route path="Hii" element={<Hii></Hii>}></Route>
        </Route>

        <Route path="/Github/:name" element={<Github></Github>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = document.getElementById("root");
const reactRoot = ReactDOM.createRoot(root);
reactRoot.render(<App />);
