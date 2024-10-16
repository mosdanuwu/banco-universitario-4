import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Nosotros</a></li>
        <li><a href="/services">Servicios</a></li>
        <li><a href="/contact">Contactos</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
