import React from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import copyimage from '../../assets/icons/copy.svg';


import './Welcome.css';


function Welcome(){

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
                        <h2>¡Hola. !</h2>
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
                          <h4 className="Saldo">Bs. 4.950</h4>
                          <p className="TextJumbo">Saldo Disponible</p>

                          <div className="Cuenta text-end">
                            <div>
                              <copyimage />
                            </div>
                            <p className="numCuenta">01689296</p>
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
                        <h4>movimientos</h4>
                        <br />
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                      <table>
                          <thead>
                            <tr>
                              <th>Nro. Referencia</th>
                              <th>Nro. Cuenta</th>
                              <th>Descripción</th>
                              <th>Monto (Bs)</th>
                              <th>Balance</th>
                              <th>Fecha</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                        <br />
                        <br />

                    </div>
                  </div>

                 
                </div>
          </div>
    

        </div>

    

    );

}
export default Welcome;