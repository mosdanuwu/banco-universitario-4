import React, {useState} from 'react';
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import { faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { hasFieldError } from '../../utils/formValidation';
import { updatePassword } from '../../api/api';
import './Password-change.css';



function Password() {
  const [form, setForm] = useState({ 
    password: '', 
    newPassword: '', 
    confirmPassword: '' }); 
  
  const [formErrors, setFormErrors] = useState({ 
    password: null, 
    newPassword: null, 
    confirmPassword: null });

  
  
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const togglePasswordVisibility = () => { 
    setShowPassword(!showPassword);
  }; 
  const toggleNewPasswordVisibility = () => { 
    setShowNewPassword(!showNewPassword);
  }; 
  const toggleConfirmPasswordVisibility = () => { 
    setShowConfirmPassword(!showConfirmPassword); 
  };

  const handleChangeForm = (event) => { 
    const { name, value } = event.target; 
    setForm({ ...form, [name]: value }); 
    setFormErrors({ ...formErrors, [name]: null }); 
  }; 
  const validateForm = () => { 
    const newErrors = { 
    password: hasFieldError(form.password, [{ required: true }, { minLength: 8 }]), 
    newPassword: hasFieldError(form.newPassword, [{ required: true }, { minLength: 8 }]), 
    confirmPassword: hasFieldError(form.confirmPassword, [{ required: true }, { minLength: 8 }, { sameAs: 'newPassword' }], form) 
  };
  setFormErrors(newErrors); 
  return !Object.values(newErrors).some(error => error !== null); 
};
 const handleSubmit = async (event) => { 
  event.preventDefault(); 
  if (validateForm()) { 
    try{
      const token = localStorage.getItem('bank_jwt');
      if (!token) 
      {
        setError('Token no encontrado, por favor inicie sesión.');
        navigate('/login');
      } 
      const passwords = { 
        password: form.password, 
        new_password: form.newPassword 
      };
      const response = await updatePassword(token, passwords); 
      console.log('Contraseña actualizada', response); 
      
    } catch (error) { // Manejar el error de la solicitud 
      console.error('Error al actualizar la contraseña:', error); 
      // Puedes mostrar un mensaje de error al usuario aquí 
      } 
    } else { 
      console.log('Errores en el formulario:', formErrors); 
    } 
  };

  return (
    <div className="password">
      <NavbarApp />
      <Sidebar />

      <h1>Cambio de Contraseña</h1>

      <Container className="container-password d-flex  justify-content-center align-items-center">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-4" controlId="formCurrentPassword">
            <Form.Label>Contrsaseña</Form.Label>
            <InputGroup>
            <Form.Control 
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Ingresa tu contraseña" 
              value={form.password} 
              onChange={handleChangeForm}
              isInvalid={!!formErrors.password}
              />
              <Button variant="outline-secondary" 
                onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </Button>
              <Form.Control.Feedback type="invalid"> 
                {formErrors.password} 
              </Form.Control.Feedback>     
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formNewPassword">
            <Form.Label>Contraseña Nueva</Form.Label>
            <InputGroup>
            <Form.Control 
            name="newPassword"
            type={showNewPassword ? "text" : "password"}
            value={form.newPassword} 
            onChange={handleChangeForm} 
            placeholder="Ingrese nueva contraseña" 
            isInvalid={!!formErrors.newPassword} />
            <Button variant="outline-secondary" 
                onClick={toggleNewPasswordVisibility}
                >
                  <FontAwesomeIcon icon={showNewPassword ? faEye : faEyeSlash} />
              </Button>
              <Form.Control.Feedback type="invalid"> 
                {formErrors.newPassword} 
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-4" controlId="formConfirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <InputGroup>
            
            <Form.Control 
             name="confirmPassword"
             type={showConfirmPassword ? "text" : "password"}
             value={form.confirmPassword} 
             onChange={handleChangeForm} 
             placeholder="Confirmar contraseña" 
             isInvalid={!!formErrors.confirmPassword}
             />
            <Button variant="outline-secondary" 
              onClick={toggleConfirmPasswordVisibility}
            >
              <FontAwesomeIcon icon={showConfirmPassword ? faEye : faEyeSlash} />
            </Button>
            <Form.Control.Feedback type="invalid"> 
              {formErrors.confirmPassword} 
            </Form.Control.Feedback> 
           </InputGroup>
          </Form.Group>

          <Button variant="primary" type="submit" className="btn-update">
            Actualizar
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Password;
