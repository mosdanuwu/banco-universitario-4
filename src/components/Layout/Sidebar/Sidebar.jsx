// src/Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import contac from '../../../assets/images/contacApp.png';
import movi from '../../../assets/images/moviApp.png';
import tranf from '../../../assets/images/transfApp.png';
import abrirIcon from '../../../assets/images/Group.png'; // Ajusta la ruta de tu imagen de abrir 
import cerrarIcon from '../../../assets/images/Group.png'; // Ajusta la ruta de tu imagen de cerrar


const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="toggle-button" onClick={toggleSidebar}>
            <img src={isOpen ? cerrarIcon : abrirIcon} alt={isOpen ? 'Cerrar' : 'Abrir'} />
            </button>
            <ul className="sidebar-menu">
                <li><a href="#home"><img className='moviApp.png' src={movi}/>Movimientos</a></li>
                <li><a href="/src/pages/Application/Transfer.jsx"><img className='transfApp.png.png' src={tranf}/>Transferencias</a></li>
                <li><a href="/src/pages/Application/Contact-Mg.jsx"><img className='contacApp.png' src={contac}/>Contactos</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;

