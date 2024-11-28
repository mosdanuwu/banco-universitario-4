import React from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
//import copyimage from '../../assets/icons/copy.svg';
import CopyButton from "../../components/CopyButton"
//import Pagin from '../../components/Pagination/Pagination';
import Pagination from 'react-bootstrap/Pagination';
import PaginatedTable from "../../components/Pagination/PaginatedTable";
import './Welcome.css';


function Welcome(){
  const accountNumber='01689296';
  const balance='4.950';
  
  const transactions = [
    { referencia: "001", fecha: "2024-11-01", monto: "500", descripcion: "Pago 1", balance: "4500" },
    { referencia: "002", fecha: "2024-11-02", monto: "1000", descripcion: "Pago 2", balance: "5500" },
    { referencia: "003", fecha: "2024-11-03", monto: "1500", descripcion: "Pago 3", balance: "6000" },
    { referencia: "004", fecha: "2024-11-04", monto: "2000", descripcion: "Pago 4", balance: "8000" },
    { referencia: "005", fecha: "2024-11-05", monto: "3000", descripcion: "Pago 5", balance: "11000" },
    { referencia: "006", fecha: "2024-11-06", monto: "4000", descripcion: "Pago 6", balance: "15000" },
    { referencia: "006", fecha: "2024-11-06", monto: "4000", descripcion: "Pago 6", balance: "15000" },
    // Más datos...
  ];

    return(

        < div className="container-text">
              <NavbarApp/>
              <div className="flex">
                <Sidebar/>
                <div className="content">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-sm-12"></div>
                      <div className="col-lg-4 col-md-4 col-sm-12">
                        <h2 className="welcome-hello">¡Hola. !</h2>
                        <br></br>
                        <br></br>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-12"></div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                      <h4>Consulta de Cuenta</h4>
                        <br></br>
                    </div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                    </div>
                  </div>

                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="jumbo">
                          <h4 className="Saldo">Bs.{balance}</h4>
                          <p className="TextJumbo">Saldo Disponible</p>

                          <div className="Cuenta">
                            <div className="row align-items-center">
                              <div className="col-auto">
                                <CopyButton className="copy-button" textToCopy={accountNumber} />
                              </div>
                              <div className="col">
                                <p className="numCuenta flex-grow-1">{accountNumber}</p>
                              </div>
                              
                            </div>
                            <p>Nro. cuenta</p>
                          </div>
                          
                          
                          </div>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                    </div>
                  </div>

                  <br />
                  <br />

                  <div className="container">
                    <div className="row">
                      <div className="col-lg-3 col-md-4 col-sm-12">
                        <h4>Movimientos</h4>
                        <br />
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                        <br />
                        <br />
                      <PaginatedTable data={transactions} itemsPerPage={3} />

                    </div>
                  </div>

                 
                </div>
          </div>

    

        </div>

    

    );

}
export default Welcome;