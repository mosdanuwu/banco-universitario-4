import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Image, InputGroup, Alert } from 'react-bootstrap';
import imagenEstudiantes from '.././assets/images/img-universitarios-login.png';
import imagenWallet from '.././assets/images/img-wallet-login.png';
import Logo from '.././assets/images/logo-no-background.png';
import './Login.css';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hasFieldsErrors, isObjNotEmpty } from '.././utils/formValidation';
import { loginUser } from '.././api/api.js';
import { setJWT, getJWT } from '../utils/localStorage';


const INITIAL_FORM = { 
  email: "", 
  password: "" };

const FORM_VALIDATORS = { 
  email: ["required", "email"], 
  password: ["required", { minLength: 8 }]
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false); 
  const [form, setForm] = useState(INITIAL_FORM); 
  const [formErrors, setFormErrors] = useState(INITIAL_FORM); 
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  
  const togglePasswordVisibility = () => { 
    setShowPassword(prevState => !prevState)
  }; 

  const handleChangeForm = (event) => { 
    setForm({ 
      ...form, 
        [event.target.name]: event.target.value 
      }); 
      setFormErrors({ 
        ...formErrors, 
          [event.target.name]: null 
      }); 
  };


  /*const handleSubmit = (event) => { 
    event.preventDefault(); 
    const errors = hasFieldsErrors(form, FORM_VALIDATORS); 
    if (isObjNotEmpty(errors)) { 
      setFormErrors(errors); 
      return; 
    } 
      // Aquí puedes manejar el envío del formulario con fetch API 
    console.log('Formulario enviado', form); 
      // Ejemplo de redireccionamiento después del envío del formulario: 
      // navigate('/dashboard'); };
  };*/

  const handleSubmit = async (event) => {
    event.preventDefault(); 
    const errors = hasFieldsErrors(form, FORM_VALIDATORS); 
    if (isObjNotEmpty(errors)) { 
      setFormErrors(errors); 
      return; 
    } 
    try { 
      const response = await loginUser(form); 
      console.log('Login successful',response); 
      localStorage.setItem('bank_jwt', response.data.jwt); 
      // Guarda el token en el almacenamiento local o en el contexto global 
      //setJWT(data.token); 
      // Verificar si el token existe y almacenarlo 
        navigate('/application/welcome'); // Redirigir al componente Welcome 
      } 
     
    catch (error) { 
      if(error.message.includes('Usuario no autorizado, credenciales incorrectas')
        || error.message.includes('401')){
      setError('Las credenciales ingresadas no son válidas'); }
      setError(error.message);

      setTimeout(() => { setError(null); }, 5000);
    } 
    };
  /*const [showPassword, setShowPassword] = useState(false); 
  const togglePasswordVisibility = () => { 
    setShowPassword(prevState => !prevState)
  }; 
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({}); 

  const validateForm = () => { 
    const newErrors = {}; 

    //Validaicon de Email
    if (!email) { 
      newErrors.email = 'Email es requerido'; } 
    else if (!/\S+@\S+\.\S+/.test(email)) { 
      newErrors.email = 'Email no es válido'; }

    //Validacion de contraseña
    if (!password) { 
      newErrors.password = 'La contraseña es requerida'; 
    } else if (password.length < 8) { 
      newErrors.password = 'La contraseña debe tener al menos 8 caracteres'; 
    }

    setErrors(newErrors);

    return Object.keys(newErores).length===0;
  };

  const handleSubmit = (event) => { 
    event.preventDefault(); 
    if (validateForm()) { 
      // Aquí se podria menejar el envio al formulario
      console.log('Formulario enviado'); 
    } 
  };*/
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
          {error && <Alert variant="danger" onClose={() => setError(null)} dismissible>{error}</Alert>}
          <Form noValidate onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
              type="email" 
              placeholder="Ingresa tu correo electrónico"
              name="email"
              value={form.email}
              onChange={handleChangeForm}
              isInvalid={!!formErrors.email}
              required
              />
              {/*nuevo*/}
              <Form.Control.Feedback type="invalid"> 
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group 
            className="mb-4" 
            controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <InputGroup>
                <Form.Control 
                type={showPassword ? "text" : "password"}
                placeholder="Ingresa tu contraseña" 
                name="password"
                value={form.password}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.password}
                required />
                <Button variant="outline-secondary" 
                onClick= {togglePasswordVisibility}
                className="password-toggle-button">
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                </Button>
                <Form.Control.Feedback type="invalid"> 
                  {formErrors.password}
                </Form.Control.Feedback>
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
