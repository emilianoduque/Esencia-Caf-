import { Link } from "react-router-dom";
import CartWidget from "./CartWidget"
import "./navbar.scss";


const NavBar = () => {
  const closeMenu = () => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    if(navbarToggler){
      const collapse = new bootstrap.Collapse(navbarToggler, {toggle: false});
      collapse.hide();
    }
  }

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
    <div className="container-fluid">
      <Link to="/" className="navbar-brand"><img src="/img/icon.png" alt="" /></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/" onClick={closeMenu}  className="opcion">Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="/catalogo" onClick={closeMenu}  className="opcion">Catálogo</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" onClick={closeMenu}  className="opcion">Contacto</Link>
          </li>
        </ul>
        
        <CartWidget></CartWidget>
      </div>
    </div>
  </nav>
  )
}

export default NavBar