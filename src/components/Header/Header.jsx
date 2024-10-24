import React from 'react'
import './Header.css'
import Button from '../Button/Button.jsx'
import Logo from '../../assets/icons/logo-principal-header.svg'
import laptopPersonRegular from '../../assets/icons/laptop-person-regular.svg'
import { Link } from 'react-router-dom';


const Header = () => {
  const handleButtonClick = () => {
    console.log('Botón clicado');
  };

  return (
    <div className="headbar">
      
        <Link to="/">
        <img className="contenedor-logo"
        src={Logo} alt="Logo de Banco Universitario" />
        </Link>
      
      <div className="contenedor-imagen-boton"> 
      <img className="contenedor-imagen"
        src={laptopPersonRegular}>
        </img>
      <div className="contenedor-button">
        < Button text="Banca en Línea" onClick={handleButtonClick} className="small"/>
      </div>
      </div>
      
    </div>
  );
};

//
export default Header;
