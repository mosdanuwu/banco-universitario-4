import React from 'react';
import './Footer.css';
import Logo from '../../assets/icons/logo-principal-header.svg'
import Facebook from '../../assets/icons/Facebook.svg'
import Twitter from '../../assets/icons/Twitter.svg'
import Instagram from '../../assets/icons/Instagram.svg'

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
    </footer> */ 

    <footer className="footer bg-light text-dark pt-5 pb-4">
      <div className="container-fluid">
        <div className="row text-md-center">
          <div className="col-xs-12 col-md-6 col-lg-3 mt-3 mb-4">
            <img src={Logo} className="img-fluid" alt="Logo Banco Universitario"/>
          </div>
        </div>
        <div className="row text-xs-center text-md-left px-4">
          <div className="col-xs-12 col-md-6 col-lg-3 mb-3">
            <h5>Nosotros</h5>
            <ul className="card-list">
              <li><a href="#about" className="text-dark">¿Quiénes Somos?</a></li>
              <li><a href="#goals" className="text-dark">Objetivos</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Servicios</h5>
            <ul className="card-list">
              <li><a href="#transfers" className="text-dark">Transferencias</a></li>
              <li><a href="#deposits" className="text-dark">Depósitos</a></li>
              <li><a href="#withdrawals" className="text-dark">Retiros</a></li>
              <li><a href="#payments" className="text-dark">Pagos</a></li>
              <li><a href="#collections" className="text-dark">Cobros</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Contacto</h5>
            <ul className="card-list">
              <li><a href="mailto:info@bancouniversitario.com.ve" className="text-dark">info@bancouniversitario.com.ve</a></li>
              <li className="text-dark">Teléfono: +58 212-555-5555</li>
              <li className="text-dark">Fax: +58 212-555-5556</li>
              <li className="text-dark">Av. Universidad, Edificio Banco Universitario, Piso 12, Caracas, Venezuela</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card-copyright col-12 text-center">
            <p>©2024 Banco Universitario S.A. RIF:J-3100022-8. Todos los derechos reservados.</p>
          </div>
        </div>
        </div>
        </footer>
    
    )
}


export default Footer