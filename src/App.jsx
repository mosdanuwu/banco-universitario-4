import React from 'react'
import Navbar from './components/Navbar/Navbar.jsx'
import Header from './components/Header/Header.jsx'

function App() {
  
  return (
    <>
      <div>
        <Header/>
        <Navbar/>
        <div className="body-main-page">
          <h1>Bienvenidos a mi aplicación bancaria</h1>
          <p>Esto es una prueba</p>
        </div>
      </div>
    </>
  )
}

export default App
