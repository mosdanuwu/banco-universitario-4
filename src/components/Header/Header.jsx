import React,  { useState } from 'react'
import './Header1.css'
//import Button from '../Button/Button.jsx'
import Logo from '../../assets/images/logo-no-background.png'
import laptopPersonRegular from '../../assets/icons/laptop-person-regular.svg'
import { Link, useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    };
    
    const [isCollapsed, setIsCollapsed] = useState(true);

    const handleToggle = () => setIsCollapsed(!isCollapsed);

 /*
    <header className="header container-fluid d-flex align-items-center gap-5">
      <div className="row align-items-center justify-content-between">
        
        <div className="col-auto contenedor-logo">
          <Link to="/" className="navbar-brand">
            <img 
            className=" logo img-fluid"
            src={Logo} 
            alt="Logo del Banco Universitario" />
          </Link >
        </div>    
      </div>
        
       
        <div className="col-auto d-flex flex-column align-items-center"> 
          <img className="user-icon img-fluid d-none d-md-block"
            src={laptopPersonRegular}
            alt="Icono de usuario"/>
          <button onClick={handleLoginClick} className = "btn-lg custom-button px-3 px-md-4 py-2">
          Banca en Línea
          </button> 
         
        
      </div>
      
    </header>*/
  return (
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Logo */}
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src={Logo} alt="Banco Universitario" className="logo img-fluid" />
            <span className="ms-2">Banco Universitario</span>
          </Link>
          
          {/* Botón Toggler */}
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={handleToggle}
            aria-controls="navbarNav" 
            aria-expanded={!isCollapsed} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
  
          {/* Links y botón "Banca en Línea" */}
          <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/nosotros" className="nav-link">Nosotros</Link>
              </li>
              <li className="nav-item">
                <Link to="/servicios" className="nav-link">Servicios</Link>
              </li>
              <li className="nav-item">
                <Link to="/contactos" className="nav-link">Contactos</Link>
              </li>
            </ul>
            <div className="d-flex align-items-center gap-2"> 
          <img className="user-icon img-fluid d-none d-md-block"
            size={24}
            src={laptopPersonRegular}
            alt="Icono de usuario"/>
              <Link to="/banca-en-linea" className="btn btn-info text-white px-3">
                Banca en Línea
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Header;
