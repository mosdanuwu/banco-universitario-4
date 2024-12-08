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
              
              
              <div className='table-contactos'>

                  <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Numero de cuenta</th>
                          <th scope="col">Alias</th>
                          <th scope="col">Descripcion</th>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td>---</td>
                        <td>--</td>
                        <td>--</td>
                      </tr>
              
                      </tbody>
                    </table>
                                
              </div>
              <div className="barra input-group mb-3">
          <button className="btn btn-outline-secondary" type="button" id="button-addon1">
            Buscar
          </button>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese el alias del contacto"
            aria-label="Ingrese el alias del contacto"
            aria-describedby="button-addon1"
          />
          <button className="btn btn-secondary ms-4" type="button" id="button-addon2">
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;