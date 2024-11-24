import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import faceimag from '../assets/images/Facebook.png';
import twitter from '../assets/images/TwitterX.png';
import instagram from '../assets/images/Instagram.png';
import soporte from '../assets/images/Support.png';
import fax from '../assets/images/Fax.png';
import gmail from '../assets/images/Gmail.png';
import './Contacto.css';


export default function Contacto () {
  return (
    <>
    <Header/>
          <div  className= "contacto_container">
            <div className='titulo_contactos'>
               <h1 className="titulo_cont">Contáctos</h1>
            </div>
            <div className="row">
              <div className="col-md-4 col-2 col-sm-2"></div>
              <div className="col-md-4 col-8 col-sm-8">
                <div className= "contenido_contactos">
                     <p className='leyenda'>Dispones de los siguientes medios de comunicación para trasmitir tus sugerencias
                      o solicitar mayor información sobre nuestros servicios.
                      </p> <br />
                      
                      <div className='contactos_info'>
                        <div className="row">
                          <div className="col-md-4 col-12 col-sm-12">
                            <div className="contactos">
                                <h6>Teléfono</h6> 
                                <p> +58 212 555-5555</p><br />                                                                      
                            </div>  
                          </div>
                          <div className="col-md-4 col-12 col-sm-12"></div>
                          <div className="col-md-4 col-12 col-sm-12">
                            <img className='img_contacto'
                                src={soporte}/> 
                            </div>

                          </div>
                        </div>
                                                                    
                      <div className='contactos_info'>
                        <div className="row">
                          <div className="col-md-4 col-12 col-sm-12">
                            <div className="contactos">
                            <h6>Fax</h6> 
                            <p> +58 212 555-5555</p><br />                       
                            </div>
                          </div>
                          <div className="col-md-4 col-12 col-sm-12"></div>
                          <div className="col-md-4 col-12 col-sm-12">
                            <img src={fax} className='img_contacto'/>

                          </div>
                        </div>
                      </div>

                        <div className='contactos_info'>
                          <div className="row">
                            <div className="col-md-4 col-12 col-sm-12">
                              <div className="contactos">
                              <h6>Correo Electrónico</h6> 
                                <p > info@bancouniversitario.com.ve</p> <br />
                              </div>
                            </div>

                            <div className="col-md-4 col-12 col-sm-12"></div>

                            <div className="col-md-4 col-12 col-sm-12">
                              <img src={gmail} className='img_contacto'/>
                            </div>
                          </div>
                        </div>

                        <div className='contactos_info'>
                        <div className='contactos'>
                        </div>    

                          
                      </div>   

                      <h6>Redes Sociales</h6> <br />
                      <p className= "rrss"> @bancouniversitariove</p>
                      <div className="col-12 col-md-12 image-container center-text">
                            <img src={faceimag} className='redes_icons'/>
                            <img src={twitter} className='redes_icons'/>
                            <img src={instagram} className='redes_icons'/>
                          </div>    
                </div>
              </div>
              <div className="col-md-4 col-12 col-sm-12"></div>


            </div>
      
                
            </div>
              
    <Footer/>
    </>
  )
}

