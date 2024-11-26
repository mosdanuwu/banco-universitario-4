import React from "react";
import './NavbarApp.css'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/logo-no-background.png'
import logoSub from '../../../assets/images/soli_user.png'
import perfil from '../../../assets/images/perfilbtto.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const NavbarApp = () =>{

    return(
        
        <div className="NavbarApp">
            <img src={logo}  alt="logo-no-background.png" />    
                <div className="logo-submenu">
                    <img src={logoSub}  alt="soli_user.png" /> 
                </div>

                <div class="dropdown">
                
                    <img src={perfil}  alt="perfilbtto.png" />
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-perfil" href="/src/pages/Application/Profile.jsx">Perfil</a></li>
                        <li><a class="dropdown-contraseña" href="#">Cambio de contraseña</a></li>
                        <li><a class="dropdown-sesion" href="#">Cerrar sesion</a></li>
                    </ul>
                </div>

        </div>

    

    );

}
export default NavbarApp;