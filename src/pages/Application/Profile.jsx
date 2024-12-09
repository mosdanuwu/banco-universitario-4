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

              <div className="container-col text-center">
              <div className="row align-items-start">
                <div className="col-1">
                <img className='img_user'  src={user}/>
                </div>
                <div className="col-2">
                <div className="form-row">
                                <div className="form-group col-md-6">
                                  <label htmlFor="inputEmail4">Nombres</label>
                                  <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                                </div>
                                  <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4">Apellidos</label>
                                    <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                                  </div>
                            </div>
                              <div className="form-group col-md-6">
                                <label htmlFor="inputAddress">Numeros de cuenta</label>
                                <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                              </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputAddress2">Email</label>
                              <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputAddress2">Telefono</label>
                              <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                            </div>
                            <div className="form-group col-md-6">
                              <label htmlFor="inputAddress2">Fecha de nacimiento</label>
                              <input type="text" className="form-control" id="buscar" placeholder="Buscar contacto"/>
                            </div>


                </div>
              </div>
            </div>
          </div>

              
  )
}
export default Profile;
