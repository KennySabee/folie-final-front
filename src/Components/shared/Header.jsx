import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import logo from "./../../assets/logo-folie-caranegra.png";
import shopcart from "./../../assets/shopping-cart.png";
import { UserContext } from "./../../context/userContext";

function Header() {
  const ctx = useContext(UserContext);
  const { logout, authStatus } = ctx;
  return (
    <>
      <header>
        <nav className="nav-menu">
          <Link to="/">
            <img src={logo} alt="logo" id="logo" />
          </Link>
          <ul className="ul-list">
            <li>
              <Link to="/catalog" className="link-item">
                Productos
              </Link>
            </li>
            {authStatus ? (
              <>
                <Link to="/profile" className="link-item">
                  Profile
                </Link>
                <Link to="/" onClick={logout} className="link-item">
                  Cerrar sesión
                </Link>
              </>
            ) : (
              <>
                <li>
                  <Link to="/register" className="link-item ">
                    Registrarse
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="link-item btn-border">
                    Iniciar Sesión
                  </Link>
                </li>
              </>
            )}

            <li>
              <Link to="/checkout">
                <img
                  src={shopcart}
                  alt="chcar"
                  id="checkoutcar"
                  className="icons shopcart"
                />
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
