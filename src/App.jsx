import { useState } from "react";
import "./index.css";
import NavBar from "./WebInfo/NavBar";
import Home from "./WebInfo/Home/Home";
import Footer from "./WebInfo/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "./WebInfo/Collection/Collection";
import ProductDetail from "./WebInfo/ProductDetail";
import About from "./WebInfo/About/About";
import ContactUs from "./WebInfo/Contact/ContactUs";
import Cart from "./WebInfo/CartPage/Cart";
import ContextInfo from "./WebInfo/ContextInfo";

function App() {
  return (
    <>
      <ContextInfo>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/oncart" element={<Cart />} />

            <Route path="/product/:id" element={<ProductDetail />}></Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </ContextInfo>
    </>
  );
}
export default App;
