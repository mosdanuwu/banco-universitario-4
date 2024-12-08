// src/Navbar.js
import React from 'react';
import './NavbarApp.css';
import logo from '../../../assets/images/logo-no-background.png'; // Asegúrate de ajustar la ruta a tu logo
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import icono from '../../../assets/images/soli_user.png';
import perfil from '../../../assets/images/perfil.png';
import clave from '../../../assets/images/clave.png';
import cerrar from '../../../assets/images/cerrar.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
        
      </div>
      <div className="navbar-menu">
        <button className="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
        <img src={icono} alt="Icono adicional" className="icono-adicional" />
        </button>
        <ul className="dropdown-menu">
          <li><a className="dropdown-p" href="/Application/Profile">
          <img src={perfil} className="icono-adicional" />Perfil</a></li>
          <li><a className="dropdown-a" href="/Application/Password-change">
          <img src={clave} className="icono-adicional" />Contraseña</a></li>
          <li><a className="dropdown-c" href="#logout">
          <img src={cerrar} className="icono-adicional"/>Cerrar sesión</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
