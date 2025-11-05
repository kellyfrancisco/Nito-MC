import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home/home.jsx";
import Catalogo from "./componentes/catalogo/catalogo.jsx";
import './styles/styles.css';

const App = () => {
  return (
    <Router basename="/Nito-MC">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
};

export default App;