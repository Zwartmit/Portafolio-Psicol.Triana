import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-mi" element={<About />} />
        <Route path="/servicios" element={<Services />} />
      </Routes>
    </Router>
  );
};

export default App;
