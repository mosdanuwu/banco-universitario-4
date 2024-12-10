import React from 'react'
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import { useState } from "react";
import './Transfer.css';



 function Transfer () {
        
        // Estados para manejar los valores de los campos
        const [miCuenta, setMiCuenta] = useState("");
        const [cuentaDestino, setCuentaDestino] = useState("");
        const [monto, setMonto] = useState("");
        const [concepto, setConcepto] = useState("");
      
        // Manejar el reset de los campos
        const handleReset = () => {
          setMiCuenta("");
          setCuentaDestino("");
          setMonto("");
          setConcepto("");
        };
      
        // Manejar el submit
        const handleSubmit = (e) => {
          e.preventDefault();
          console.log({
            miCuenta,
            cuentaDestino,
            monto,
            concepto,
          });
          alert("Datos enviados con éxito.");
        };

        // Estados para manejar el modal
        const [show, setShow] = useState(false);

        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);

  
        return (
    
          <div  className= "transfer">
             <NavbarApp/>
             <Sidebar/>

             <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <br />
                                <br />
                                <h2 className="transfer-title">Transferencia a Terceros</h2>
                                <br></br>
                                <br></br>

                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3 col-sm-1"></div>
                            <div className="col-lg-6 col-md-6 col-sm-10">
                                <div className="formTransf">
                                        <h3>Datos de la operación</h3>
                                        <div className="row">
                                                <div className="col-lg-1"></div>
                                                <div className="col-lg-6">
                                                        <form onSubmit={handleSubmit}>
                                                                {/* Campo 1: Desde mi cuenta */}
                                                                <div className="mb-3">
                                                                <label htmlFor="miCuenta" className="form-label">
                                                                Desde mi cuenta
                                                                </label>
                                                                <select
                                                                id="miCuenta"
                                                                className="form-select"
                                                                value={miCuenta}
                                                                onChange={(e) => setMiCuenta(e.target.value)}
                                                                >
                                                                <option value="">Seleccione una cuenta</option>
                                                                <option value="Cuenta 1">Cuenta 1</option>
                                                                <option value="Cuenta 2">Cuenta 2</option>
                                                                </select>
                                                                </div>

                                                                {/* Campo 2: A la cuenta de */}
                                                                <div className="mb-3">
                                                                <label htmlFor="cuentaDestino" className="form-label">
                                                                A la cuenta de
                                                                </label>
                                                                <select
                                                                id="cuentaDestino"
                                                                className="form-select"
                                                                value={cuentaDestino}
                                                                onChange={(e) => setCuentaDestino(e.target.value)}
                                                                >
                                                                <option value="">Seleccione una cuenta</option>
                                                                <option value="Cuenta 3">Cuenta 3</option>
                                                                <option value="Cuenta 4">Cuenta 4</option>
                                                                </select>
                                                                </div>

                                                                {/* Campo 3: Transferir */}
                                                                <div className="mb-3">
                                                                <label htmlFor="monto" className="form-label">
                                                                Transferir (Bs)
                                                                </label>
                                                                <input
                                                                type="number"
                                                                id="monto"
                                                                className="form-control"
                                                                placeholder="Monto a transferir"
                                                                value={monto}
                                                                onChange={(e) => setMonto(e.target.value)}
                                                                />
                                                                </div>

                                                                {/* Campo 4: Concepto */}
                                                                <div className="mb-3">
                                                                <label htmlFor="concepto" className="form-label">
                                                                Concepto
                                                                </label>
                                                                <input
                                                                type="text"
                                                                id="concepto"
                                                                className="form-control"
                                                                placeholder="Escriba el concepto"
                                                                value={concepto}
                                                                onChange={(e) => setConcepto(e.target.value)}
                                                                />
                                                                </div>

                                                                {/* Botones */}
                                                                <div className="d-flex justify-content-between">
                                                                
                                                                <button type="submit" className="btn btn-primary">
                                                                Continuar
                                                                </button>
                                                                </div>
                                                        </form>
                                                </div>
                                                <div className="col-lg-1"></div>
                                                <div className="col-lg-4">
                                                        <form action="">
                                                        <div className="d-flex justify-content-between">
                                                                <button
                                                                type="button"
                                                                className="btn btn-secondary"
                                                                onClick={handleReset}
                                                                >
                                                                Borrar
                                                                </button> 
                                                                </div>  
                                                        </form>

                                                        
                                                </div>
                                        </div>
                                        </div>
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-1"></div>

                        </div>
                    </div>
                </div>

        
     

      
          </div>
              

  
  )
}
export default Transfer;
