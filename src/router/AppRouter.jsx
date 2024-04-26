import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import Notfound from "../pages/Notfound";
import NavbarComp from "../components/Navbar";
import Profile from "../pages/Profile";
import Settings from "../pages/Settings";
import Dashboard from "../pages/Dashboard";

const AppRouter = () => {
  return (
    // <BrowserRouter>
    // http://localhost:3000/
    <>
      <NavbarComp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />}>
          {/* absolute path */}
          <Route path="/dashboard/profile" element={<Profile />} />
          {/* relative path */}
          {/* http://localhost:3000/dashboard */}
          {/* <Route path="profile" element={<Profile />} /> */}
          <Route path="/dashboard/settings" element={<Settings />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
    // </BrowserRouter>
  );
};

export default AppRouter;
