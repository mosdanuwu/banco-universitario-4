import React from 'react'
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import './Contact-Mg.css';




 function Contact () {
  return (
    
          <div  className= "contact">
          
             <NavbarApp/>
             <Sidebar/>
            
            <div className='contact-contenido'>
              <h1>Administrar contactos frecuentes</h1>
              <div className='button-agregar'>
            
                 <button type="button">Agregar</button>

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

                      </tbody>
                    </table>
                                
              </div>

            </div>
            




          </div>
              

  
  )
}
export default Contact;