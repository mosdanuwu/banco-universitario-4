import React from 'react'
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import './Password-change.css';



function Password () {
    return (
      
            <div  className= "password">
               
               <NavbarApp/>
               <Sidebar/>

               <h1>Cambio de Contraseña</h1>

               <div className='container-password'>

               <form>
                    <div className="mb-4">
                      <label className="form-label">Contraseña</label>
                      <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Ingrese Contraseña"/>
                      <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-4">
                      <label for="exampleInputPassword1" className="form-label">Contraseña Nueva</label>
                      <input type="password" className="form-control"  placeholder="Ingrese nueva contraseña"/>
                    </div>
                    <div className="mb-4">
                      <label for="exampleInputPassword1" className="form-label">Confirmar Contraseña</label>
                      <input type="password" className="form-control"  placeholder="Confirmar contraseña"/>
                    </div>
                    <button type="Actualizar" className="btn btn-primary">Actualizar</button>
                  </form>


               </div>
  
  
             </div>
                
  
    
    )
  }
  export default Password;
  