import React from 'react'
import './Header.css'
import Button from '../Button/Button.jsx'
import Logo from '../../assets/icons/logo-principal-header.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  const handleButtonClick = () => {
    console.log('Botón clicado');
  };

  return (
    <div className="headbar">
      <div className="logo">
        <Link to="/">
        <img src={Logo} alt="Logo" />
        </Link>
      </div>
      <div className="button-container">
        <Button text="Banca en Línea" onClick={handleButtonClick} className="small"/>
      </div>
    </div>
  );
};

export default Header;
