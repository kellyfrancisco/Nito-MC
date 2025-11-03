import React from "react";
import { Link } from "react-router-dom"; // Importando Link do react-router-dom
import "./home.css"; // Corrigido para minúsculas, deve corresponder ao nome do arquivo CSS

const Home = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src="/img/logo-nito.jpg" alt="Logo NITO Material de Construção" />
          <span>NITO Material de Construção</span>
        </div>

        <div className="contato-buttons">
          <button className="toggle-btn" title="Endereço">
            📍
            <span className="info">
              Rua Guanabara, 670 Centro<br />
              Balneário Arroio do Silva SC
            </span>
          </button>
          <button
            className="toggle-btn"
            title="Mapa"
            onClick={() =>
              window.open(
                "https://www.google.com/maps?q=Rua+Guanabara,+670+-+Centro,+Balneário+Arroio+do+Silva+-+SC",
                "_blank"
              )
            }
          >
            🧭
            <span className="info">Ver no Mapa</span>
          </button>
          <button className="toggle-btn" title="Telefone">
            📞
            <span className="info">(48) 3526-1425</span>
          </button>
          <a
            className="toggle-btn"
            title="WhatsApp"
            href="https://wa.me/5548984886988"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
              alt="WhatsApp"
            />
            <span className="info">WhatsApp</span>
          </a>
          <a
            className="toggle-btn"
            title="Instagram"
            href="https://www.instagram.com/nitomateriasdeconstrucao"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
              alt="Instagram"
            />
            <span className="info">Instagram</span>
          </a>
          <button className="toggle-btn" title="Horário">
            ⏰
            <span className="info">
              Seg-Sex: 7:30h às 18h<br />
              Sáb: 7:30h às 12h
            </span>
          </button>
        </div>
      </header>

      <main>
        <section className="link-section quem-somos">
          <Link to="/quem-somos" className="link-btn">Quem Somos</Link> {/* Alterado para Link */}
        </section>

        <section className="link-section missao">
          <Link to="/missao" className="link-btn">Missão</Link> {/* Alterado para Link */}
        </section>

        <section className="link-section catalogo">
          <Link to="/catalogo" className="link-btn">Catálogo</Link>
        </section>

        <section className="link-section casas-alugar">
          <Link to="/casas-alugar" className="link-btn">Casas para Alugar</Link> {/* Alterado para Link */}
        </section>

        <section className="link-section casas-venda">
          <Link to="/casas-venda" className="link-btn">Casas para Venda</Link> {/* Alterado para Link */}
        </section>

        <section className="link-section orcamento">
          <Link to="/orcamento" className="link-btn">Peça seu Orçamento</Link> {/* Alterado para Link */}
        </section>

        <section className="link-section calculo-material">
          <Link to="/calculo-material" className="link-btn">Cálculo-Material</Link> {/* Alterado para Link */}
        </section>
      </main>

      <footer>
        &copy; 2025 NITO Material de Construção. Todos os direitos reservados.
      </footer>
    </>
  );
};

export default Home;
