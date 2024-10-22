import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/Nosotros">Nosotros</Link></li>
        <li><Link to="/Servicios">Servicios</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
