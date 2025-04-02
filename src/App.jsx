import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./components/Home";
import './App.css';
import Contact from "./components/Contact";
import Staff from "./components/Staff";
import Favicon from "react-favicon";

function App() {

  useEffect(() => {
    document.title = "Grupo Tenis Corvera"
  }, [])
  return (
      <Router basename="/Web-Club/">
      <Favicon url="favicon.svg" />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/equipo_tecnico/" element={<Staff />} />
            <Route path="/contacto/" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
  );
}

export default App;