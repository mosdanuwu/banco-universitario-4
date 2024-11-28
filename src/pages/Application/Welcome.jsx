import React, { useState, useEffect } from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import CopyButton from "../../components/CopyButton";
import './Welcome.css';
import { Alert } from "bootstrap/dist/js/bootstrap.bundle.min";
import { getBalance } from "../../api/api";

function Welcome() {
  const [balance, setBalance] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBalance = async () => {
      const token = localStorage.getItem('bank_jwt');
      /*if (!token) {
        setError('Token no encontrado, por favor inicie sesión.');
        return;
      }*/

      try {
        const result = await getBalance(token);
        setBalance(result.balance); 
        setAccountNumber(result.accountNumber);
      } catch (error) {
        console.error('Error en la solicitud:', error);
        setError('Error al obtener el balance');
      }
    };

    fetchBalance();
  }, []);

  return (
    <div className="container-text">
      <NavbarApp />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-12"></div>
              <div className="col-lg-4 col-md-4 col-sm-12">
                <h2 className="welcome-hello">¡Hola!</h2>
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
              <table>
                <thead>
                  <tr>
                    <th>Referencia</th>
                    <th>Fecha</th>
                    <th>Monto(Bs)</th>
                    <th>Descripcion</th>
                    <th>Balance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
