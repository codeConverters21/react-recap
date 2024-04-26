import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Notfound from "../pages/Notfound";
import NavbarComp from "../components/Navbar";

const AppRouter = () => {
  return (
    // <BrowserRouter>
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
    // </BrowserRouter>
  );
};

export default AppRouter;
