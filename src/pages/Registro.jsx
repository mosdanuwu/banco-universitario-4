import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '.././assets/images/logo-no-background.png';
import './Registro.css';
import { hasFieldsErrors, isObjNotEmpty } from '../utils/formValidation';
import { registerUser } from '../api/api';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const INITIAL_FORM = {
  first_name: "",
  last_name: "",
  document_number: "",
  email: "",
  birth_date: "",
  phone_number: "",
  password: "",
  confirmPassword: ""
};

const FORM_VALIDATORS = {
  first_name: ["required"],
  last_name: ["required"],
  document_number: ["required"],
  email: ["required", "email"],
  birth_date: ["required"],
  phone_number: ["required"],
  password: ["required", { minLength: 8 }],
  confirmPassword: ["required", { minLength: 8 }, { sameAs: "password" }]
};

const Register = () => {
  const [form, setForm] = useState(INITIAL_FORM);
  const [formErrors, setFormErrors] = useState(INITIAL_FORM);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => { 
    setShowPassword(!showPassword);
  }; 
  const handleToggleConfirmPasswordVisibility = () => { 
    setShowConfirmPassword(!showConfirmPassword); 
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

  
 

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = hasFieldsErrors(form, FORM_VALIDATORS);
    if (isObjNotEmpty(errors)) {
      setFormErrors(errors);
      return;
    }

    const formattedForm = { 
      ...form,
      
      birth_date: new Date(form.birth_date).toISOString() 
    };
    /*if (form.password !== form.confirmPassword) { 
      setFormErrors((prevErrors) => ({ 
        ...prevErrors, confirmPassword: "Las contraseñas no coinciden" })); 
        return; } 
        const formData = {
           first_name:form.first_name, 
           last_name: form.last_name, 
           document_number: form.document_number, 
           email: form.email, 
           birth_date: form.birth_date, 
           phone_number: form.phone_number, 
           password: form.password };*/
    try { 
      const response = await registerUser(formattedForm); 
      console.log('Registro exitoso', response.data.jwt); 
      localStorage.setItem('bank_jwt', response.data.jwt);

      /*if (response.data.jwt) { 
        localStorage.setItem('bank_jwt', response.data.jwt); 
        console.log('Token guardado:', localStorage.getItem('bank_jwt'));
      } 
        else { 
          throw new Error('Token no encontrado en la respuesta de la API'); }*/

      setSuccess(true); 
      setTimeout(() => navigate('/application/welcome'), 3000); 
    }catch (error) { 
      console.error('Error al registrar:', error.message); 
      if (error.message.includes("Ya existe un usuario registrado con esos datos")) 
        { 
          setFormErrors((prevErrors) => 
            ({ ...prevErrors, 
              email: "Ya existe un usuario registrado ",
              idNumber: "Ya existe un usuario registrado con este email o cédula" 
            })); 
      } else { setError(error.message);}
    }
  };
    
  const handleLoginClick = () => { navigate('/login')}; 


  return (
    <Container className="d-flex flex-column">
      <header className="d-flex justify-content-center align-items-center my-4">
        <Link to="/">
          <Image 
            src={Logo} 
            alt="Banco Universitario Logo" 
            className="img-fluid"
            style={{ maxWidth: '80%', maxHeight: '70px' }} 
          />
        </Link>
      </header>
      <div className="header-registro py-3 mb-4 rounded">
        <h2 className="text-center mb-0 fs-3 fw-semibold">Crea Tu Cuenta</h2>
      </div>
      
      <Form noValidate className="p-4 rounded shadow-sm" onSubmit={handleSubmit}>
        <Row>
          <Col md={6} className="mb-3">
            <Form.Group controlId="first_name">
              <Form.Label>Nombres</Form.Label>
              <Form.Control 
                type="text" 
                name="first_name"
                placeholder="Ingresa tus nombres" 
                value={form.first_name}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.first_name}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.first_name}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="last_name">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control 
                type="text" 
                name="last_name"
                placeholder="Ingresa tus apellidos" 
                value={form.last_name}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.last_name}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="document_number">
              <Form.Label>Cedula</Form.Label>
              <Form.Control 
                type="text" 
                name="document_number"
                placeholder="Ingresa tu cedula" 
                value={form.document_number}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.document_number}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.document_number}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                placeholder="Ingresa tu email" 
                value={form.email}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.email}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="birth_date">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control 
                type="date"
                name="birth_date" 
                value={form.birth_date}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.birth_date}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.birth_date}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="phone_number">
              <Form.Label>Telefono</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone_number"
                placeholder="Ingresa tu numero de telefono" 
                value={form.phone_number}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.phone_number}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.phone_number}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Ingresa tu contraseña" 
                value={form.password}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.password}
              />
              <Button variant="outline-secondary" 
                onClick= {togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </Button>
              <Form.Control.Feedback type="invalid">
                {formErrors.password}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="confirmPassword">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control 
                type={showConfirmPassword ? "text" : "password"} 
                name="confirmPassword"
                placeholder="Confirma tu contraseña" 
                value={form.confirmPassword}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.confirmPassword}
              />
              <Button variant="outline-secondary" 
                onClick={handleToggleConfirmPasswordVisibility}
                >
                  <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
              </Button>
              <Form.Control.Feedback type="invalid">
                {formErrors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </Row>
        <div className="btn-container-register d-flex justify-content-between">
          <Button variant="outline-primary" onClick={handleLoginClick} className="btn-custom-outline fw-bold">
            Regresar
          </Button>
          <Button variant="primary" type="submit" className="btn-custom-primary fw-bold">
            Crear Cuenta
          </Button>
        </div>
      </Form>
      <div className="alert-bottom"> 
        {error && (
        <Alert variant="danger" className="alert-container" 
        onClose={() => setError(null)} dismissible> {error} 
        </Alert> )} 
        {success && ( 
        <Alert variant="success" className="alert-container"> 
          Registro exitoso. 
        </Alert> )} 
      </div>
    </Container>
  );
}

export default Register;
