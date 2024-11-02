import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import mision from  "../assets/images/mision.png";
import vision from "../assets/images/vision.png";
import objetivos from "../assets/images/objetivos.png";
import './nosotros.css';

export default function Nosotros ()  {
  return (
    <>
     <Header/>
     <Navbar/>

     
          <div  className= "align-items-center justify-content-center ">
             <h1 className='title_nosotros'>¿Quienes somos nosotros?</h1>
             <br/>
              <div className="mision_container "> 

                    <h2  className='mision_title'> Mision</h2> 
                    <img className='img_nosotros' 
                    src={mision} />
                    <p  className='mision_parrafo'> Somos una institución financiera comprometida con 
                    los estudiantes universitarios, brindando soluciones 
                    financieras ágiles y eficientes. Nuestra misión es facilitar 
                    la gestión de sus recursos y contribuir al crecimiento económico 
                    y personal de nuestros clientes.</p>

                    <h2  className='vision_title'> Vision</h2> 
                    <img className='img_nosotros'
                    src={vision}/>
                    <p  className='vision_parrafo'> Queremos ser la mejor opción financiera para estudiantes
                      universitarios en el país. Deseamos ser reconocidos por 
                      nuestros servicios innovadores, la calidad de atención 
                      al cliente y nuestro compromiso con la educación 
                      y el desarrollo social.</p>
              </div>

              <div className= "objetivos_container ">

                <div className='objetivos_content'>
                <h1 className='objetivos_title'>Objetivos</h1>  
               
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
                <img src={objetivos} className='obj_img'/>
                


              </div>

        </div>
    
    
    <Footer/>
    </>
   
  )
}

