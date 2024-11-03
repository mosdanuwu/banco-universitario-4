import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import faceimag from '../assets/images/Facebook.png';
import twitter from '../assets/images/TwitterX.png';
import instagram from '../assets/images/Instagram.png';
import soporte from '../assets/images/Support.png';
import fax from '../assets/images/Fax.png';
import gmail from '../assets/images/Gmail.png';


export default function Contacto () {
  return (
    <>
    <Header/>
    <Navbar/>
          <div  className= "container-fluid align-items-center justify-content-center ">
            <h1 className="container_tac container-fluid d-flex align-items-center justify-content-center text-white">Contactos</h1>
                <div className= "container">
                     <p className='center-text'>Dispones de los siguientes medios de comunicación para trasmitir tus sugerencias
                      o solicitar mayor información sobre nuestros servicios.
                      </p>

                      <h3 >Teléfono</h3> <img src={soporte} />
                      <p> +58 212 555-5555</p>
                      <h3>Fax</h3> <img src={fax}/>
                      <p> +58 212 555-5555</p>
                      <h3>Correo Electrónico</h3> <img src={gmail}/>
                      <p > info@bancouniversitario.com.ve</p>
                      <h3>Redes Sociales</h3>
                      <p className= "col-12 col-md-12 center-text"> @bancouniversitariove</p>
         
                </div>
                    <div className="col-6 col-md-12 image-container center-text">
                            <img src={faceimag} className='center-text'/>
                            <img src={twitter} className='center-text'/>
                            <img src={instagram} className='center-text'/>
                          </div>

                
            </div>
              
    <Footer/>
    </>
  )
}

