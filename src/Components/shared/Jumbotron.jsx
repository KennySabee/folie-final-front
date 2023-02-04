import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import alejoJumbotron from "../../assets/alejo-jumbotron.jpg";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <div id="text-container">
        <h1 className="text-1">Folie, tus combates al próximo nivel</h1>
        <p className="text-2"> La victoria es para aquellos que siguen luchando a pesar de los golpes que les da la vida.  </p>
        <p className="text-3"> Desde los estilos tailandeses más tradicionales hasta los más modernos. Descubre nuestros productos.</p>

        <button className="btn-main">
          <Link to="catalog" className="link-item-1">
            Comprar Ahora
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
