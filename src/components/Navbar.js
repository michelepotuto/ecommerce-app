import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = (prop) => {
  const count = useSelector((store) => store.count);

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

        <li className="nav-item">
            <div className="nav-name" to="/">
              Benvenuto, Michele!
            </div>
          </li>

       

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
            <NavLink onClick={prop.log} className="nav-link" to="">
              Logout
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link" to="/carrello">
              Carrello ({count})
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
