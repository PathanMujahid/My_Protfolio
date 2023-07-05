import React from "react";
import "./Style/Home.css";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import { Route, Routes } from "react-router";
import About from "./Component/About";
// import { BrowserRouter } from "react-router-dom";
import Education from "./Component/Education";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </>
  );
}

export default App;
