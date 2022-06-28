import React, { useState, useEffect } from 'react';
import {  useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Dropdown } from 'react-bootstrap';


const Navbar = () => {
  const count = useSelector((store) => store.count);
  const [cartCount, setCartCount] = useState(0);
  const storageKey2 = "user-cart-count";

  useEffect(() => {
    if (sessionStorage.getItem(storageKey2)) {
      setCartCount(parseInt(sessionStorage.getItem(storageKey2)));
    }
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        ☫ TEAM SHOP
      </div>
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
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/prodotti">
              Prodotti
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>



          <Dropdown>
            <Dropdown.Toggle variant="success">

              Carrello ({count})

            </Dropdown.Toggle>

            <Dropdown.Menu>
              <NavLink to="/carrello">&nbsp;&nbsp;&nbsp;&nbsp;Vai al carrello</NavLink>
              <Dropdown.Item href="#/action-2">Pagamento </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>




        </ul>

      </div>
    </nav>
  );
};


export default Navbar
