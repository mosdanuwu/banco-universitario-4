import React, { useState, useEffect } from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import CopyButton from "../../components/CopyButton"
import PaginatedTable from "../../components/Pagination/PaginatedTable";
import './Welcome.css';
import { getBalance, getWhoAmI, getMovements } from "../../api/api";
import { useNavigate } from "react-router-dom";

function Welcome() {
 
  //Balance
  const [balance, setBalance] = useState('0,00');
  const [accountNumber, setAccountNumber] = useState('00000000000000000000');

  //Datos del usuario
  const [name,setName]=useState('');
  const [lastName, setLastName]=useState('');

  //Movimientos
  const [movements, setMovements] = useState([]); // Datos de la tabla
  const [multiplier, setMultiplier] = useState(0); // Controla el filtro
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  



  useEffect(() => {

    const fetchData = async () => {
    
      const token = localStorage.getItem('bank_jwt');
      if (!token) {
        setError('Token no encontrado, por favor inicie sesión.');
        navigate('/login');
      } 
      else{
        try{
        const result1 = await getWhoAmI(token);
        setAccountNumber(result1.data.account_number);
        setName(result1.data.first_name);
        setLastName(result1.data.last_name);

        const result2 = await getBalance(token);
        setBalance(result2.data.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')); 

        }
        catch(error){
        console.error('Error en la solicitud:', error);
        setError('Error al obtener el balance y el numero de cuenta');
        }
        
      }
      
    };
    fetchData();
}, [navigate]);

useEffect(() => {

  const fetchMovements = async () => {
  
    const token = localStorage.getItem('bank_jwt');
    if (!token) {
      setError('Token no encontrado, por favor inicie sesión.');
    } 
    try{
      const result = await getMovements(token, currentPage, itemsPerPage, multiplier);
      console.log('Respuesta del servidor:', result);
      setMovements(result.data || []);

    }
    catch(error){
      console.error('Error en la solicitud:', error);
      setError('Error al obtener los movimientos');
    }
      
    
    
  };
  fetchMovements();
}, [currentPage, itemsPerPage, multiplier]);

// Manejo del Dropdown de filtro
const handleFilterChange = (event) => {
  const selectedMultiplier = parseInt(event.target.value, 10);
  setMultiplier(selectedMultiplier); // Actualiza el filtro
  setCurrentPage(1); // Reinicia a la primera página
};


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
                <h2 className="welcome-hello">¡Hola, {name} {lastName}!</h2>
                <br></br>
                <br></br>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-12"></div>
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
                          <h4 className="Saldo">Bs.{balance} </h4>
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
                        <h4 id="mov">Movimientos</h4>
                        <br />
                        <select
                            className="form-select"
                            onChange={handleFilterChange}
                            value={multiplier}
                        >
                          <option value="0">Todos</option>
                          <option value="1">Créditos</option>
                          <option value="-1">Débitos</option>
                        </select>
                      </div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                      <div className="col-lg-3 col-md-4 col-sm-12"></div>
                        <br />
                        <br />
                      <PaginatedTable 
                      data={movements} 
                      itemsPerPage={itemsPerPage}
                      currentPage={currentPage}
                      setCurrentPage={setCurrentPage}
                      setItemsPerPage={setItemsPerPage}
                       />

                    </div>
                  </div>

                 
                </div>
          </div>


        </div>
      </div>
  );
}

export default Welcome;
