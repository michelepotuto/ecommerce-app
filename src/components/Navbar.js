import { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AuthContext from "../context/auth-context";

const Navbar = () => {
  const count = useSelector((store) => store.count);
  const ctx = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="navbar-brand">☫ TEAM SHOP</div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <div className="nav-name">Hi,{ctx.loggedUser}!</div>
          </li>

          <li className="nav-item active">
            <NavLink onClick={ctx.logout} className="nav-link" to="*">
              Logout
            </NavLink>
          </li>

          <li className="nav-item active">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/prodotti">
              Shop
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link " to="/carrello">
              Cart ({count})
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
