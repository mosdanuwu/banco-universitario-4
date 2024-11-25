import React from "react";
import './Sidebar.css'
import { Link } from "react-router-dom";



const Sidebar= () =>{

    return(
        
        <div className="Sidebar">
            <ul>
                <li><Link to="#" className='text-white'>Movimientos</Link></li>
            </ul>
            <ul>
                <li><Link to="#" className='text-white'>Transferencia</Link></li>
            </ul>
            <ul>
                <li><Link to="#" className='text-white'>Contactos</Link></li>
            </ul>
        

        </div>

    

    );

}
export default Sidebar;