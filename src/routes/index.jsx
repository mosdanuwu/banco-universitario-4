import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Nosotros from '../pages/Nosotros'
import Servicios from '../pages/Servicios'
import Contacto from '../pages/Contacto'
import Login from '../pages/Login'
import Registro from '../pages/Registro'
import Welcome from '../pages/Application/Welcome'
import Profile from '../pages/Application/Profile'
import Transfer from '../pages/Application/Transfer'
import Contact from '../pages/Application/Contact-Mg'
import Password from '../pages/Application/Password-change'
import Modal from '../components/Modal/Modal'



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
        <Route path="/application/welcome" element={<Welcome/>} />
        <Route path="/application/profile" element={<Profile/>} />
        <Route path="/application/transfer" element={<Transfer/>} />
        <Route path="/application/contact-Mg" element={<Contact/>} />
        <Route path="/application/password-change" element={<Password/>} />
        <Route path="/components/modal" element={<Modal/>} />
        

      </Routes>
    </Router>
  )
}
export default Routers
