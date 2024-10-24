import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Estudiantes from "../assets/images/Estudiantes-body.png"


export default function Home(){
    return(
        <>
        <Header/>
        <Navbar/>
        <div className="container_body container-fluid d-flex align-items-center justify-content-center text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="row text-xs-center text-md-left justify-between gap-12 py-4">
              <div className="col-12 col-md-6 cold-xs-3 text-container">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  ¡Abre Tu Cuenta Ahora!
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Se Parte Del<br />
                  Banco Universitario
                </h2>
                <p className="text-xl md:text-2xl">
                  Un Paso Más Cerca A Tu<br />
                  Independencia
                </p>
                </div>
                <div className="col-12 col-md-6 col-xs-3 image-container">
                  <img 
                    src={Estudiantes}
                    alt="Estudiantes universitarios"
                    className="img-fluid rounded-lg"
                  />
                </div>
              
            </div>
          </div>
        </div>
        <Footer/>
        </>
    )
}
