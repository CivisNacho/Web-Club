import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = () => {
  
  return (
    <div className="App" style={{ backgroundColor: "#000", minHeight: "100vh", color: "#fff" }}>
      <header>
        <Navigation />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
