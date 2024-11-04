import React from 'react'
import './Header.css'
//import Button from '../Button/Button.jsx'
import Logo from '../../assets/icons/logo-principal-header.svg'
import laptopPersonRegular from '../../assets/icons/laptop-person-regular.svg'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    };

  return (
    <div className="header fixed  container-fluid d-flex align-items-center">
        <Link to="/">
        <img className="contenedor-logo img-fluid"
        src={Logo} alt="Logo de Banco Universitario" />
        </Link >
      
      <div className="contenedor-imagen-boton d-flex flex-column align-items-center"> 
        <img className="user-icon "
          src={laptopPersonRegular}>
          </img>
        <div className="contenedor-button">
          <button onClick={handleLoginClick} className = "custom-button">
          Banca en Línea
          </button> 
        </div>
      </div>
      
    </div>
  );
};

export default Header;
