import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import mision from  "../assets/images/mision.png";
import vision from "../assets/images/vision.png";
import objetivos from "../assets/images/objetivos.png";

export default function Nosotros ()  {
  return (
    <>
     <Header/>
     <Navbar/>

     
          <div  className= "align-items-center justify-content-center ">
             <h1 className='center-text'>¿Quienes somos nosotros?</h1>
             <br/>
              <div className="center-text container_tac align-items-center justify-content-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-20 "> 

                    <h2  className='center-text'> Mision</h2> 
                    <img src={mision} />
                    <p  className='center-text'> Somos una institución financiera comprometida con 
                    los estudiantes universitarios, brindando soluciones 
                    financieras ágiles y eficientes. Nuestra misión es facilitar 
                    la gestión de sus recursos y contribuir al crecimiento económico 
                    y personal de nuestros clientes.</p>

                    <h2  className='center-text'> Vision</h2> 
                    <img src={vision}/>
                    <p  className='center-text'> Queremos ser la mejor opción financiera para estudiantes
                      universitarios en el país. Deseamos ser reconocidos por 
                      nuestros servicios innovadores, la calidad de atención 
                      al cliente y nuestro compromiso con la educación 
                      y el desarrollo social.</p>
              </div>

              <div className= "align-items-center justify-content-center">
                <br />
                <br />
                <br />
                <h1 className='col-10 col-md-12 col-xs-3 image-container'>Objetivos</h1>  
                <img src={objetivos} className='img-fluid rounded-lg'/>
                <p> Brindar a los estudiantes universitarios un servicio eficiente y 
                  de calidad en la gestión de sus recursos financieros, a través de 
                  nuestros canales digitales y nuestros puntos de atención presencial. </p>


                  <p> Fomentar el uso de nuestras plataformas digitales para hacer transferencias 
                    entre estudiantes sin comisión, depósitos y retiros en efectivo, ofreciendo 
                    herramientas tecnológicas fáciles y seguras.</p>

                  <p> Promover la educación financiera de los estudiantes universitarios, 
                    a través de charlas, talleres y capacitaciones sobre temas como 
                    el ahorro, la inversión y el uso responsable del crédito.</p>

                     <p>Establecer alianzas estratégicas con universidades y empresas para ofrecer
                     beneficios exclusivos a nuestros clientes, tales como descuentos
                     en matrículas, becas, prácticas laborales, entre otros.</p>

                      <p> Mantener una cultura de innovación y mejora continua en
                       nuestros procesos, productos y servicios, para estar 
                      siempre a la vanguardia de las necesidades de nuestros
                      clientes y del mercado.</p>



              </div>

        </div>
    
    
    <Footer/>
    </>
   
  )
}

