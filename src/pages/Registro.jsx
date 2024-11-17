// src/Registro.jsx
import React from 'react'
import Logo from '.././assets/images/logo-no-background.png'
import {Link, useNavigate} from 'react-router-dom'
import './Registro.css'


const Registro = () =>  {
  const navigate = useNavigate();

  const handleLoginClick = () => {
      navigate('/login');
  };

  return (
    <div className="container d-flex flex-column">
      <header className="d-flex justify-content-center align-items-center my-4">
        <Link to="/">
          <img 
            src={Logo} 
            alt="Banco Universitario Logo" 
            className="img-fluid"
            style={{ maxWidth: '80%', maxHeight: '70px' }} />
        </Link>
      </header>
      <div className="header-section-registro py-3 mb-4">
        <h2 className="text-center mb-0 fs-3 fw-semibold">Crea tu cuenta</h2>
      </div>
      <form className="p-4 rounded shadow-sm">
        <div className="row">
          {/* Nombres */}
          <div className="col-md-6 mb-3">
            <label htmlFor="nombres" className="form-label">Nombres</label>
            <input type="text" className="form-control" id="nombres" placeholder="Ingresa tu nombre completo" />
          </div>
          {/* Apellidos */}
          <div className="col-md-6 mb-3">
            <label htmlFor="apellidos" className="form-label">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" placeholder="Ingresa tu apellido completo" />
          </div>
          {/* Cédula */}
          <div className="col-md-6 mb-3">
            <label htmlFor="cedula" className="form-label">Cédula</label>
            <input type="text" className="form-control" id="cedula" placeholder="Ingresa tu cédula de identidad" />
          </div>
          {/* Email */}
          <div className="col-md-6 mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo electrónico" />
          </div>
          {/* Fecha de Nacimiento */}
          <div className="col-md-6 mb-3">
            <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
            <input type="date" className="form-control" id="fechaNacimiento" />
          </div>
          {/* Teléfono */}
          <div className="col-md-6 mb-3">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input type="tel" className="form-control" id="telefono" placeholder="Ingresa tu número de teléfono" />
          </div>
          {/* Contraseña */}
          <div className="col-md-6 mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" />
          </div>
          {/* Confirmar Contraseña */}
          <div className="col-md-6 mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Ingresa nuevamente tu contraseña" />
          </div>
        </div>
        <div className="btn-container-registro d-flex justify-content-between">
          <button type="button" onClick={handleLoginClick} className="btn btn-outline-primary btn-custom-outline fw-bold">Volver</button>
          <button type="submit" className="btn btn-primary btn-custom-primary fw-bold">Crear cuenta</button>
        </div>
      </form>
    </div>
  );
}

export default Registro;
