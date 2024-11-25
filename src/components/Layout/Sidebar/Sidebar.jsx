import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";



const Sidebar= () =>{

    return(
        
        <div className="Sidebar">
            <ul>
                <li><Link to="#">Movimientos</Link></li>
            </ul>
            <ul>
                <li><Link to="#">Transferencia</Link></li>
            </ul>
            <ul>
                <li><Link to="#">Contactos</Link></li>
            </ul>
        

        </div>

    

    );

}
export default Sidebar;