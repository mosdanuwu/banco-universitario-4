import React, { useState } from 'react';
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { Form, Button, Container, Row, Col, InputGroup } from 'react-bootstrap';
import './Transfer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { hasFieldError } from '../../utils/formValidation';
import { getNumberAccount } from '../../api/api';


function Transfer() {
  // Estados para manejar los valores de los campos
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("0.00");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({}); 
  const [idNumber, seIdNumber] = useState('');
  const [firtstName, setFirstName]=useState('');
  const [lastName, setLastName]=useState('');


  // Manejar el reset de los campos
  const handleReset = () => {
    setAccountNumber("");
    setAmount("0.00");
    setDescription("");
  };

  /*const handleAccountNumberChange = (e) => { 
    const value = e.target.value; 
    const regex = /^[0-9]*$/;
     if (regex.test(value) && value.length <= 20) 
      { setAccountNumber(value); 
        const error = hasFieldError(value, [{ required: true }, { accountNumber: true }]); 
        setErrors({ ...errors, accountNumber: error }); 
      } 
        else { 
          setErrors({ ...errors, accountNumber: "El número de cuenta debe ser de 20 dígitos" });

        } 
    }*/
  

  // Manejar la validación al hacer clic en el botón de búsqueda 
  const handleSearchClick = () => { 
    const error = hasFieldError(accountNumber, [{ required: true }, { maxLength: 20 }, { minLength: 20 }]); 
    setErrors({ ...errors, accountNumber: error }); 
    if (!error) { console.log("Buscar número de cuenta:", accountNumber); // Aquí puedes agregar la lógica para buscar la cuenta 
    } };

  // Manejar el submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      accountNumber,
      amount,
      description,
    });
    alert("Datos enviados con éxito.");
  };

  return (
    <div className="transfer">
      <NavbarApp />
      <Sidebar />

      <div className="content">
        <Container>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <br />
              <br />
              <h2 className="transfer-title">Transferencia a Terceros</h2>
              <br />
              <br />
            </Col>
            <Col lg={4} md={4} sm={12}></Col>
            <Col lg={4} md={4} sm={12}></Col>
          </Row>
          <Row>
            <Col lg={3} md={3} sm={1}></Col>
            <Col lg={6} md={6} sm={10}>
              <div className="formTransf">
                <h3>Dato de la operación</h3>
                <Row>
                  <Col lg={1}></Col>
                  <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                      
                      {/* Campo 2: A la cuenta de */}
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="cuentaDestino">Nro. de la Cuenta Destino</Form.Label>
                        <InputGroup>
                        <Form.Control
                          id="cuentaDestino"
                          value={accountNumber}
                          placeholder="Ingrese número de la cuenta"
                          onChange={(e) => setAccountNumber(e.target.value)}
                        />
                        <Button 
                        className="btn-search outline-secondary" 
                        variant="success"
                        onClick={handleSearchClick}
                        >
                          <FontAwesomeIcon icon={faSearch}/>
                        </Button>
                        <Form.Control.Feedback type="invalid"> 
                          {errors.accountNumber} 
                        </Form.Control.Feedback>
                        </InputGroup>
                      
                      </Form.Group>

                      {/* Campo 3: Transferir */}
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="monto">Monto (Bs)</Form.Label>
                        <Form.Control
                          type="number"
                          id="monto"
                          placeholder="0.00"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </Form.Group>

                      {/* Campo 4: Concepto */}
                      <Form.Group className="mb-3">
                        <Form.Label htmlFor="description">Concepto</Form.Label>
                        <Form.Control
                          type="text"
                          id="description"
                          placeholder="Escriba el concepto"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                        />
                      </Form.Group>

                      {/* Botones */}
                      <div className="d-flex justify-content-between">
                        <Button variant="primary" type="submit">
                          Continuar
                        </Button>
                      </div>
                    </Form>
                  </Col>
                  <Col lg={1}></Col>
                  <Col lg={4}>
                    <div className="d-flex justify-content-between">
                      <Button variant="secondary" onClick={handleReset}>
                        Borrar
                      </Button>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={3} md={3} sm={1}></Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Transfer;

