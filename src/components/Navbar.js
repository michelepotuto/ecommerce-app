import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import useCart from "../hooks/use-cart";
import { Dropdown } from "react-bootstrap";

const Navbar = () => {
  const [cartCount, setCartCount] = useState(0);
  const storageKey2 = "user-cart-count";

  useEffect(() => {
    if (localStorage.getItem(storageKey2)) {
      setCartCount(parseInt(localStorage.getItem(storageKey2)));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">☫ TEAM SHOP</div>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/prodotti">
              Prodotti
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">
              Logout
            </NavLink>
          </li>

          <li className="nav-item">
          <NavLink to="/carrello">
              Carrello ({cartCount})
              </NavLink>
              </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
