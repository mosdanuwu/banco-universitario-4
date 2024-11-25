import React from 'react'
import {Link} from 'react-router-dom'
import imagenEstudiantes from '.././assets/images/img-universitarios-login.png'
import imagenWallet from '.././assets/images/img-wallet-login.png'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import {faEye, faEyeSlash } from '@fortawesome/free-brands-svg-icons'
import Logo from '.././assets/images/logo-no-background.png'
import './Login.css'


export default function Login () {
  //States para almacenar si la clave esta visible
  //const [showPassword, setShowPassword]=useState(false);
  //const togglePasswordVisibility =()=useState(false);

  return (
    <div className="container-fluid vh-100 d-flex flex-column align-items-center justify-content">
      <div className="p-3 p-sm-4 text-center">
        <Link to="/">
        <img 
          src={Logo} 
          alt="Banco Universitario Logo" 
          className="img-fluid mb-4"
          style={{ maxHeight: '60px' }}
        />
        </Link>
      </div>
      <div className="row w-100 align-items-center">
          <div className="col-lg-3 d-none d-lg-flex justify-content-center">
            
              <img 
                src={imagenEstudiantes}
                alt="Imagen de estudiante con su billetera" 
                className="img-fluid mb-4"
                style={{ maxWidth: '105%' }}
              />
           
          </div>
     
          <div className="login-container col-12 col-sm-10 col-md-8 col-lg-5
            bg-white p-4 p-sm-5 rounded shadow-sm custom-background-form">
                <div className="text-center mb-4">
                  <h3 className="text-login mb-2">Bienvenido(a)</h3>
                  <h2 className="mb-4">Inicia tu sesión</h2>
                </div>

                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" className="form-control"
                    placeholder="Ingresa tu correo electrónico" required/>
                  </div>

                  <div className="form-group mb-4">
                    <label htmlFor="password">Contraseña</label>
                      <div className="input-group">
                        <input type="password" id="password" className="form-control" 
                        placeholder="Ingresa tu contraseña" required />
                        <button type="button" className="btn btn-outline-secondary">
                        <i className="bi bi-eye-slash"></i>
                        </button>
                      </div>
                  </div>

                  
                  <button  type="submit" className="btn btn-primary w-100 mb-3 
                    custom-btn" ><Link to= "/application/welcome" className='text-white'>Ingresar</Link></button>
                    <div className="text-center">
                      <p>¿Aún no tienes cuenta? <Link to="/registro">Crear cuenta</Link></p>
                    </div>
                    
                </form>
          </div>

          <div className="col-lg-3 d-none d-lg-flex justify-content-center">
                  <img 
                    src={imagenWallet} 
                    alt="Imagen de un grupo de estudiantes frente del instituto" 
                    className="img-fluid"
                    style={{ maxWidth: '70%' }}
                  />    
          </div>
    </div>
  </div>
  
  )
}