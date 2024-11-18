import React from 'react';
import './Footer.css';
import Logo from '../../assets/images/logo-no-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons'
import { Container, Row, Col } from 'react-bootstrap'


const Footer=()=>{
    return (
      /*  <footer className="footer-custom pt-5 pb-4"> 
                <div className="container-fluid">
                    <div className="row text-md-left">
                        <div className="col-xs-12 col-md-6 col-lg-3 mx-auto mt-3">       
                          
                          <h6 className="mb-2 font-weight-bold">Nosotros</h6>
                            <p>
                                <a href="#"> ¿Quienes Somos?</a>
                            </p>
                        </div>
                    <div className="row">
                      <div className="col-xs-12 col-md-6 col-lg-3 mx-auto mt-7">
                        <h5 className="mb-2 font-weight-bold">Servicios</h5>
                          <p>
                            <a href="#"> ¿Quienes Somos?</a>
                          </p>
                      </div> 
                    </div>
                    
                    <div className="col-xs-10 col-md-3 col-lg-1"> 
                         <h5 className="mb-2 font-weight-bold">Contacto</h5>
                            <p>
                                <a href="#"> ¿Quienes Somos?</a>
                            </p>
                    </div>
                            
                    </div>               
                
            </div>
    </footer> 

    <footer className="footer-custom pt-5 pb-4">
      <div className="container-fluid">
        <div className="row text-md-center px-6">
          <div className="col-xs-12 col-md-6 col-lg-3 mt-3 mb-4">
            <img src={Logo} className="img-fluid" alt="Logo Banco Universitario"/>
          </div>
        </div>
        <div className="row text-xs-center text-md-left px-4">
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <h5>Nosotros</h5>
            <ul className="card-list" >
              <li><a >¿Quiénes Somos?</a></li>
              <li><a >Objetivos</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <h5>Servicios</h5>
            <ul className="card-list" >
              <li><a >Transferencias</a></li>
              <li><a >Depósitos</a></li>
              <li><a >Retiros</a></li>
              <li><a >Pagos</a></li>
              <li><a >Cobros</a></li>
            </ul>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <h5>Contacto</h5>
            <ul className="card-list" >
              <li><a href="mailto:info@bancouniversitario.com.ve"  
                  >
                  info@bancouniversitario.com.ve
                  </a>
              </li>
              <li >Teléfono: +58 212-555-5555</li>
              <li >Fax: +58 212-555-5556</li>
              <li >Av. Universidad, Edificio Banco Universitario, Piso 12, Caracas, Venezuela</li>
            </ul>
          </div>
          
            <div className="col-xs-12 col-md-6 col-lg-3 d-flex justify-content-center py-5">
              <a href="https://facebook.com/bancouniversitario" className="text-dark mx-2" target='_black'>
                <FontAwesomeIcon icon={faFacebook} size="lg" alt="@bancouniversitario" />
              </a>
              <a href="https://twitter.com/bancouniversitario" className="text-dark mx-2" target='_black'>
                <FontAwesomeIcon icon={faSquareXTwitter} size="lg" alt="@bancouniversitario" />
              </a>
              <a href="https://instagram.com/bancouniversitario" className="text-dark mx-2" target='_black'>
                <FontAwesomeIcon icon={faInstagram} size="lg" alt="@bancouniversitario"/>
              </a>
          </div>
       
        <div className="row">
          <div className="card-copyright col-12 text-center">
            <p>©2024 Banco Universitario S.A. RIF:J-3100022-8. Todos los derechos reservados.</p>
          </div>
        </div>
        </div>
        </div>
        </footer>*/
        <footer className="footer-custom pt-4 pb-4">
        <Container>
          {/* Fila superior con el logo */}
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={3} className="d-flex justify-content-center justify-content-md-start">
              <img 
                src={Logo} 
                width="195"
                alt="Banco Universitario Logo" 
                className="img-fluid" 
                style={{ maxHeight: '60px'}} 

              />
            </Col>
          </Row>
  
          {/* Fila inferior con el contenido */}
          <Row className="custom-list">
            <Col md={4}>
              <h5>Nosotros</h5>
              <ul className="list-unstyled">
                <li>¿Quiénes Somos?</li>
                <li>Objetivos</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Servicios</h5>
              <ul className="list-unstyled">
                <li>Transferencias</li>
                <li>Depósitos</li>
                <li>Retiros</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Contacto</h5>
              <ul className="list-unstyled">
                <li>info@bancouniversitario.com.ve</li>
                <li>Teléfono: +58 212-555-5555</li>
                <li>Fax: +58 212-555-5556</li>
              </ul>
            </Col>
            <Col md={4} className="d-flex justify-content-center py-2 mb-4">
              <a href="https://facebook.com/bancouniversitario" className="mx-2">
                <FontAwesomeIcon icon={faFacebook} size="lg" alt="Facebook @bancouniversitario" 
                style={{color: "#363940"}}/>
              </a>
              <a href="https://twitter.com/bancouniversitario" className="mx-2">
                <FontAwesomeIcon icon={faSquareXTwitter} size="lg" alt="Twitter @bancouniversitario" 
                style={{color: "#363940"}}/>
              </a>
              <a href="https://instagram.com/bancouniversitario" className="mx-2">
                <FontAwesomeIcon icon={faInstagram} size="lg" alt="Instagram @bancouniversitario"
                style={{color: "#363940"}}/>
              </a>
            </Col>
          </Row>
          <Row>
          <div className="card-copyright col-12 text-center">
            <p>©2024 Banco Universitario S.A. RIF:J-3100022-8. Todos los derechos reservados.</p>
          </div>
          </Row>
        </Container>
      </footer>
    
  
    )
}


export default Footer