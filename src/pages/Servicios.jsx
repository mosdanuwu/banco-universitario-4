import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import transferencia from "../assets/images/transferencia.png";
import deposito from "../assets/images/deposito.png";
import retiro from "../assets/images/retiro.png";
import  matricula from "../assets/images/matricula.png";
import beca from "../assets/images/beca.png";
import './Servicios.css';




const Servicios = () => {
  return (

    <>
      <Header/>
      <Navbar/>

      <div className="servicios_container">
        <div className="servicios_c">
            <h1 className='servicios_title'>¡Servicios que ofrecemos para ti!</h1>
           
             
                <div className=" turquesa_container ">                
                  <div className='transf_container'>
                    <h2 className='titulo_servicioTurquesa'>Transferencias sin Comisiones</h2> <br />                                     
                    <p> El Banco Universitario ofrece un servicio de transferencias entre 
                          estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de
                          dinero entre los estudiantes universitario. <br />
                          Transferir dinero de manera rápida, segura y eficiente, lo que permite a los 
                          estudiantes contar con una alternativa más para realizar sus pagos y transacciones.</p>
                </div>     
                <img src={transferencia} className="img_turquesa"/>         
            </div>


            <div className="blanco_container" >
            <img src={deposito} className="img_blanco"/>
              <div className='deposito_container'>
              <h2 className='titulo_servicio'>Depósitos en Efectivo</h2> <br />               
                <p> Depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. 
                Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que 
                permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.</p>

              </div>            
            </div>              
      

              <div className="turquesa_container">              
                    <div className='retiro_container'>
                      <h2 className='titulo_servicioTurquesa'>Retiros en Efectivo</h2> <br />                     
                      <p> Realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar 
                        retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos 
                        están seguros y protegidos.</p>
                    </div>
                    <img src={retiro} className="img_turquesa"/>
                   </div>


                   <div className="blanco_container">
                   <img src={matricula} className="img_blanco"/>
                    <div className= "matricula_container">
                    <h2 className='titulo_servicio'>Pago de Matrícula Estudiantil</h2>                                
                  <p>Ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes 
                   universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se 
                  realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes
                  realizar sus pagos en cualquier momento que lo necesiten.</p>
                    </div>
                   </div>


                   <div className=" turquesa_container">                  
                    <div className='beca_container'>
                      <h2 className='titulo_servicioTurquesa'>Cobro de Beca Estudiantil</h2>                      
                      <p>Los estudiantes universitarios pueden cobrar sus becas estudiantiles de manera sencilla 
                      y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, 
                      lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.</p>
                    </div>    
                    <img src={beca} className="img_turquesa"/>             
                </div>

        

          </div>
            </div>
          
             
        
      

    

    
     <Footer/>
    </>
   
  )
}

export default Servicios