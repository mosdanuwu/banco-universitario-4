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
  firstName: "",
  lastName: "",
  idNumber: "",
  email: "",
  birthDate: "",
  phone: "",
  password: "",
  confirmPassword: ""
};

const FORM_VALIDATORS = {
  firstName: ["required"],
  lastName: ["required"],
  idNumber: ["required"],
  email: ["required", "email"],
  birthDate: ["required"],
  phone: ["required"],
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

  /*
  const formattedForm = { ...form,
    
    , birthDate: new Date(form.birthDate).toISOString() };*/

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = hasFieldsErrors(form, FORM_VALIDATORS);
    if (isObjNotEmpty(errors)) {
      setFormErrors(errors);
      return;
    }
    if (form.password !== form.confirmPassword) { 
      setFormErrors((prevErrors) => ({ 
        ...prevErrors, confirmPassword: "Las contraseñas no coinciden" })); 
        return; } 
        const formData = {
           firstName:form.firstName, lastName: form.lastName, idNumber: form.idNumber, email: form.email, birthDate: form.birthDate, phone: form.phone, password: form.password };
    try { 
      const data = await registerUser(formData); 
      console.log('Registro exitoso', data); 

      if (data.token) { 
        localStorage.setItem('bank_jwt', data.token); 
        console.log('Token guardado:', localStorage.getItem('bank_jwt'));
      } 
        else { 
          throw new Error('Token no encontrado en la respuesta de la API'); }

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
            <Form.Group controlId="firstName">
              <Form.Label>Nombres</Form.Label>
              <Form.Control 
                type="text" 
                name="firstName"
                placeholder="Ingresa tus nombres" 
                value={form.firstName}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="lastName">
              <Form.Label>Apellidos</Form.Label>
              <Form.Control 
                type="text" 
                name="lastName"
                placeholder="Ingresa tus apellidos" 
                value={form.lastName}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="idNumber">
              <Form.Label>Cedula</Form.Label>
              <Form.Control 
                type="text" 
                name="idNumber"
                placeholder="Ingresa tu cedula" 
                value={form.idNumber}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.idNumber}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.idNumber}
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
            <Form.Group controlId="birthDate">
              <Form.Label>Fecha de Nacimiento</Form.Label>
              <Form.Control 
                type="date"
                name="birthDate" 
                value={form.birthDate}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.birthDate}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.birthDate}
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6} className="mb-3">
            <Form.Group controlId="phone">
              <Form.Label>Telefono</Form.Label>
              <Form.Control 
                type="tel" 
                name="phone"
                placeholder="Enter your phone number" 
                value={form.phone}
                onChange={handleChangeForm}
                isInvalid={!!formErrors.phone}
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.phone}
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
