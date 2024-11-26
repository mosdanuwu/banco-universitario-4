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
            <ul> <li><Link to="#"><img className='contacApp.png' src={contac}/> Movimientos</Link></li></ul>
            <ul><li><Link to="#"><img className='moviApp.png' src={movi}/>Transferencia</Link></li></ul>
            <ul><li><Link to="#"><img className='transfApp.png.png' src={tranf}/>Contactos</Link></li></ul>

        </div>

    

    );

}
export default Sidebar;