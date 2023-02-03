import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import alejoJumbotron from "../../assets/alejo-jumbotron.jpg";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div id="text-container">
        <h1>Artista marcial de pies a cabeza</h1>
        <p className="text-2">
          Desde los estilos tailandeses más tradicionales hasta los más
          modernos. Descubre nuestros productos.</p>

        <button className="btn-main">
          <Link to="catalog" className="link-item text-1">
            Comprar ahora
          </Link>
        </button>
      </div>
      <div>
        <img src={alejoJumbotron} alt="" id="portadajumbo" />
      </div>
    </div>
  );
}

export default Jumbotron;
