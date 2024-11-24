import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'
import Login from '../pages/Login'
import Registro from '../pages/Registro'

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/servicios" element={<Servicios/>} />
        <Route path="/contactos" element={<Contacto/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/registro" element={<Registro/>} />
      </Routes>
    </Router>
  )
}
export default Routers
