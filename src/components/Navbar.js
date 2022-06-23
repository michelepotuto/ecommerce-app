import React from 'react'
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">
        SHOP
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
          <li className="nav-item dropdown">
            <NavLink
              className="nav-link dropdown-toggle"
              to="/carrello"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Carrello
            </NavLink>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              {/* <NavLink className="dropdown-item">
                Vai al carrello
              </NavLink>
              <NavLink className="dropdown-item">
                Acquista
              </NavLink> */}

            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};


export default Navbar