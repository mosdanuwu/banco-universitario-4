import React,  { useState } from 'react'
import './Header.css'
//import Button from '../Button/Button.jsx'
import Logo from '../../assets/images/logo-no-background.png'
import laptopPersonRegular from '../../assets/icons/laptop-person-regular.svg'
import { Link, useNavigate } from 'react-router-dom'
import { 
  Navbar,
  Nav,
  Button } from 'react-bootstrap'; 
  



const Header = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
      navigate('/login');
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
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
    <div className="navbar-custom">
    <Navbar container="fluid" expand="lg" full='true' className="navbar-main">
      <Navbar.Brand href="/">
        <img src={Logo} width="250" />
      </Navbar.Brand>
      <Navbar.Toggle onClick={toggle} className="navbar-toggler-custom"/>
        <Navbar.Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto navbar-menu" navbar>
            <Nav.Item>
              <Link className='nav-link' to="/">
                Inicio
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link className='nav-link' to="/nosotros">
                Nosotros
              </Link>
            </Nav.Item>

            <Nav.Item>
              <Link className='nav-link' to="/servicios">
                Servicios
              </Link>
            </Nav.Item>
            
            <Nav.Item>
              <Link className='nav-link' to="/contactos">
                Contáctos
              </Link>
            </Nav.Item>
            <Nav.Item>
            <Navbar.Text>
            
            <Button className="navbar-btn" onClick={handleLoginClick}> 
              <img className="banca-btn-icon img-fluid "
              src={laptopPersonRegular}
              size="xl"
              alt="Icono de usuario"
              />
              Banca En Línea
            </Button>
           
          </Navbar.Text>
            </Nav.Item>
          </Nav>
    </Navbar.Collapse>
  </Navbar>
  </div>
  
    );
};

export default Header;
