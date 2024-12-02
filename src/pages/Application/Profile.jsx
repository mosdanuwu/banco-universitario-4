import React from 'react'
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import './Profile.css';
import user from "../..//assets/images/user_icon.png";


 function Profile () {
  return (
    
          <div  className= "prolife">
             
             <NavbarApp/>
             <Sidebar/>

             <div className='container'>
                  <div className='profile-contenido'>
                      <h1>Informacion de perfil</h1> </div>
              </div>

              <div class="container-col text-center">
              <div class="row align-items-start">
                <div class="col-1">
                <img className='img_user'  src={user}/>
                </div>
                <div class="col-2">
                <div class="form-row">
                                <div class="form-group col-md-6">
                                  <label for="inputEmail4">Nombres</label>
                                  <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                                </div>
                                  <div class="form-group col-md-6">
                                    <label for="inputPassword4">Apellidos</label>
                                    <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                                  </div>
                            </div>
                              <div class="form-group col-md-6">
                                <label for="inputAddress">Numeros de cuenta</label>
                                <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                              </div>
                            <div class="form-group col-md-6">
                              <label for="inputAddress2">Email</label>
                              <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputAddress2">Telefono</label>
                              <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                            </div>
                            <div class="form-group col-md-6">
                              <label for="inputAddress2">Fecha de nacimiento</label>
                              <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                            </div>


                </div>
              </div>
            </div>
          </div>

              
  )
}
export default Profile;
