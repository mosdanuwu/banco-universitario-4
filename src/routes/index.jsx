import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'
import Login from '../pages/Login'

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/Nosotros" element={<Nosotros/>} />
        <Route path="/Servicios" element={<Servicios/>} />
        <Route path="/Contacto" element={<Contacto/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  )
}
export default Routers
