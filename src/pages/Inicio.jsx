import React from "react"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import Navbar from "../components/Navbar/Navbar"

import Estudiantes from "../assets/images/Estudiantes-body.png"
import { Container, Row, Col } from 'react-bootstrap'

const Home=()=>{

   
 return(
  <>
  <Header/>
    <div className="container_body_home container-fluid 
    d-flex align-items-center justify-content-center text-white py-5">
      <Container>
        <Row className="justify-content-center align-items-center text-center text-md-left">
          <Col xs={12} lg={6} className="mb-4 mb-lg-0 text-container">
            <h1 className="display-5 fw-bold mb-3">
              ¡Abre Tu Cuenta Ahora!
            </h1>
            <h2 className="h3 fw-bold mb-4">
              Se Parte Del<br />
              Banco Universitario
            </h2>
            <p className="lead mb-4">
              Un Paso Más Cerca A Tu<br />
              Independencia
            </p>
          </Col>
          <Col xs={12} lg={6} className="d-flex justify-content-center">
            <img
              src={Estudiantes}
              alt="Estudiantes universitarios"
              className="img-fluid rounded-lg"
              style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px' }} 
              // Limita la altura máxima para evitar que ocupe demasiado espacio en pantallas pequeñas
            />
          </Col>
        </Row>
      </Container>
    </div>
    <Footer/>
  </>
    )
}
export default Home;
