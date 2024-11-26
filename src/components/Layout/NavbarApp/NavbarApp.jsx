import React from "react";
import './NavbarApp.css'
import {Link} from 'react-router-dom'
import logo from '../../../assets/images/logo-no-background.png'


const NavbarApp = () =>{

    return(
        
        <div className="NavbarApp">
            <img src={logo}  alt="logo-no-background.png" />    

        </div>

    

    );

}
export default NavbarApp;