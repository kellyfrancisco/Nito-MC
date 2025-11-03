import React from "react";
import ReactDOM from "react-dom/client"; 
import App from "./App.jsx"; // Correto se App.jsx estiver no diretório /src
import "./containers/styles.css"; // CSS global, correto se styles.css estiver na pasta /containers

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);