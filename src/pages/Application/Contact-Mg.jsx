import React from 'react'
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";


import './Contact-Mg.css';




 function Contact () {
  return (
    
          <div  className= "contact">
          
             <NavbarApp/>
             <Sidebar/>
             <div>
            
            <div className= " contact-contenido ">
              <h1>Administrar contactos frecuentes</h1></div>
              <div className='button-agregar'>
              <button type="agregar" className="btn btn-primary btn-custom-primary fw-bold">Agregar</button> 
              </div>
              
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
                 <div className="label col-md-6 mb-3">
                    <label htmlFor="nombres" className="form-label"></label>
                    <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto" />
                 </div>

                 <button type="volver" className="regresar btn btn-primary btn-custom-primary fw-bold">
                  Volver</button>
                
              



            </div>

          </div>
              

  
  )
}
export default Contact;