import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image, InputGroup } from 'react-bootstrap';
import imagenEstudiantes from '.././assets/images/img-universitarios-login.png';
import imagenWallet from '.././assets/images/img-wallet-login.png';
import Logo from '.././assets/images/logo-no-background.png';
import './Login.css';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => { 
    setShowPassword(prevState => !prevState)
  }; 
  return (
    <Container fluid className="vh-100 d-flex flex-column align-items-center justify-content-center">
      <div className="p-3 p-sm-4 text-center">
        <Link to="/">
          <Image 
            src={Logo} 
            alt="Banco Universitario Logo" 
            className="img-fluid mb-4 logo"
            style={{ maxHeight: '60px' }}
          />
        </Link>
      </div>
      <Row className="w-100 align-items-center justify-content-center">
        <Col lg={3} className="d-none d-lg-flex justify-content-center">
          <Image 
            src={imagenEstudiantes}
            alt="Imagen de estudiante con su billetera"
            className="img-fluid mb-4"
            style={{ maxWidth: '105%' }}
          />
        </Col>
        <Col xs={12} sm={10} md={8} lg={5} className="login-container bg-white 
        p-4 p-sm-5 rounded shadow-sm custom-background-form">
          <div className="text-center mb-4">
            <h3 className="text-login mb-2">Bienvenido(a)</h3>
            <h2 className="mb-4">Inicia tu sesión</h2>
          </div>
          <Form>
            <Form.Group 
            className="mb-3" 
            controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Ingresa tu correo electrónico" 
              required />
            </Form.Group>
            <Form.Group 
            className="mb-4" 
            controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup>
                <Form.Control 
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña" 
                required />
                <Button variant="outline-secondary" 
                onClick= {togglePasswordVisibility}
                className="password-toggle-button">
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </Button>
              </InputGroup>
            </Form.Group>
            <Button type="submit" className="btn-primary w-100 mb-3 custom-btn">
              <Link to="/application/welcome" className='text-white'>Ingresar</Link>
            </Button>
            <div className="text-center">
              <p>¿Aún no tienes cuenta? <Link to="/registro">Crear cuenta</Link></p>
            </div>
          </Form>
        </Col>
        <Col lg={3} className="d-none d-lg-flex justify-content-center">
          <Image 
            src={imagenWallet}
            alt="Imagen de un grupo de estudiantes frente del instituto"
            className="img-fluid"
            style={{ maxWidth: '70%' }}
          />
        </Col>
      </Row>
    </Container>
  );
}
