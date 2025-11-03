import React from "react";
import { Link } from "react-router-dom";
import "./catalogo.css"; // Correto se catalogo.css estiver no mesmo diretório

export default function Catalogo() {
  return (
    <>
      <header>
        <h1>Catálogo de Produtos</h1>
        <Link to="/" className="voltar-btn">
          ⬅ Voltar
        </Link>
      </header>

      <section className="produtos">
        <div className="produto">
          <img src="/img/produto1.jpg" alt="Produto 1" /> {/* Correto se os produtos estiverem na pasta /public/img */}
          <h2>Tinta Acrílica 18L</h2>
          <p>Ideal para ambientes internos e externos.</p>
        </div>

        <div className="produto">
          <img src="/img/produto2.jpg" alt="Produto 2" />
          <h2>Caixa d'água 500L FortLev</h2>
          <p>Categoria: Hidráulica</p>
        </div>
      </section>
    </>
  );
}
