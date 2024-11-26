import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";
import contac from '../../../assets/images/contacApp.png';
import movi from '../../../assets/images/moviApp.png';
import tranf from '../../../assets/images/transfApp.png';



const Sidebar= () =>{

    return(
        
        <div className="Sidebar">
            <br />
            
            <ul><li><Link to="#">
            <img className='moviApp.png' src={movi}/>Movimientos</Link></li></ul>

            <ul><li><Link to="/src/pages/Application/Transfer.jsx">
            <img className='transfApp.png.png' src={tranf}/>Transferencias</Link></li></ul>

            <ul> <li><Link to="/src/pages/Application/Contact-Mg.jsx">
            <img className='contacApp.png' src={contac}/>Contactos</Link></li></ul>


            

        </div>

    

    );

}
export default Sidebar;