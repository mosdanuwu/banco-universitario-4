import React from 'react'
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import buscar from "../../assets/images/Buscar.png";
import Modal from "../../components/Modal/Modal";


import './Contact-Mg.css';




 function Contact () {
  return (
    
          <div  className= "contact">
          
             <NavbarApp/>
             <Sidebar/>
             <div>
            
            <div className= " contact-contenido ">
              <h1>Administrar contactos frecuentes</h1></div>
              
              
              <div className='table-contactos'>

                  <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">Numero de cuenta</th>
                          <th scope="col">Alias</th>
                          <th scope="col">Descripcion</th>
                        </tr>
                      </thead>
                      <tbody>
                      <th scope="col-item">---</th>
                          <th scope="col">--</th>
                          <th scope="col">--</th>
                       
                      </tbody>
                    </table>
                                
              </div>
                  <div class=" barra input-group mb-3">
                    <button class="btn btn-outline-secondary" type="button" id="button-addon1"><img src={buscar} className="buscar" /></button>
                    <input type="text" class="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"/>
                  </div>
                  <div class="button input-group mb-3">
                    <button class="btn btn-primary"><link rel="stylesheet" href="/components/Modal" />Agregar</button>

                  </div>

              
                

            </div>

          </div>
              

  
  )
}
export default Contact;