import React from 'react'
import './Header.css'
import Button from '../Button/Button.jsx'
import Logo from '../../assets/logo-principal-header.svg'

const Header = () => {
  const handleButtonClick = () => {
    console.log('Botón clicado');
  };

  return (
    <div className="headbar">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="button-container">
        <Button text="Banca en Línea" onClick={handleButtonClick} className="small"/>
      </div>
    </div>
  );
};

export default Header;
