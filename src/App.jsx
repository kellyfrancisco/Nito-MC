import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./componentes/Home/home.jsx"; // Corrigido para refletir a estrutura do seu projeto
import Catalogo from "./componentes/catalogo/catalogo.jsx"; // Corrigido para refletir a estrutura do seu projeto

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
      </Routes>
    </Router>
  );
};

export default App;