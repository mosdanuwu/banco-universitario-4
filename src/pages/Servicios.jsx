import React from 'react'
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import transferencia from "../assets/images/transferencia.png";
import deposito from "../assets/images/deposito.png";
import retiro from "../assets/images/retiro.png";
import  matricula from "../assets/images/matricula.png";
import beca from "../assets/images/beca.png";




const Servicios = () => {
  return (

    <>
      <Header/>
      <Navbar/>
      <div className="container-fluid d-flex align-items-center justify-content-center container_s ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className='center-text'>¡Servicios que ofrecemos para ti!</h1>
          <div className="row text-xs-center text-md-left justify-between gap-12 py-4">
            <div className=" container_tac container-fluid d-flex align-items-center justify-content-center ">
                <div className='row text-xs-center text-md-left justify-between gap-5 py-0'>
                    <h1 >Transferencias sin Comisiones</h1>
                    <img src={transferencia} className="col-6 col-md-2 image-container justify-content-end"/>
                    
                    <p> El Banco Universitario ofrece un servicio de transferencias entre 
                          estudiantes sin costo alguno, con el objetivo de facilitar el intercambio de
                          dinero entre los estudiantes universitario.
                          Transferir dinero de manera rápida, segura y eficiente, lo que permite a los 
                          estudiantes contar con una alternativa más para realizar sus pagos y transacciones.</p>

                </div>
              
              

            </div>
                <h1>Depósitos en Efectivo</h1> 
                <img src={deposito} className="col-6 col-md-2 image-container justify-content-end"/>
                <p> Depósitos en efectivo de manera sencilla y cómoda en cualquiera de sus sucursales. 
                Este servicio está disponible las 24 horas del día, los 7 días de la semana, lo que 
                permite a los estudiantes realizar sus depósitos en cualquier momento que lo necesiten.</p>

        
                  <div className=" container_tac container-fluid d-flex align-items-center justify-content-center ">
                    <div className='row text-xs-center text-md-left justify-between gap-5 py-0'>
                      <h1>Retiros en Efectivo</h1>
                      <img src={retiro} className="col-6 col-md-2 image-container justify-content-end"/>
                      <p> Realizar retiros en efectivo de manera rápida y segura. Los estudiantes pueden realizar 
                        retiros en cualquiera de las sucursales del banco, con la tranquilidad de que sus fondos 
                        están seguros y protegidos.</p>

                    </div>
                   </div>
                <h1>Pago de Matrícula Estudiantil</h1>
                <img src={matricula} className="col-6 col-md-2 image-container justify-content-end"/>
              
                <p>Ofrece un servicio de pago de matrícula estudiantil, que permite a los estudiantes 
                universitarios pagar sus matrículas de manera rápida y sencilla. Este servicio se 
                  realiza en línea y está disponible las 24 horas del día, lo que permite a los estudiantes
                realizar sus pagos en cualquier momento que lo necesiten.</p>
              
        

          </div>
              <div className='container_tac container-fluid d-flex align-items-center'>
                  <h1>Cobro de Beca Estudiantil</h1>
                  <img src={beca} className="col-6 col-md-2 image-container justify-content-end"/>
                  <p>Los estudiantes universitarios pueden cobrar sus becas estudiantiles de manera sencilla 
                    y eficiente. Este servicio está disponible en cualquiera de las sucursales del banco, 
                    lo que permite a los estudiantes acceder a sus fondos de manera rápida y segura.</p>

                </div>

        </div>
      </div>

    

    
     <Footer/>
    </>
   
  )
}

export default Servicios