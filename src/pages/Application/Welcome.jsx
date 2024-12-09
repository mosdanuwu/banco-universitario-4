import React, { useState, useEffect } from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import CopyButton from "../../components/CopyButton"
import PaginatedTable from "../../components/Pagination/PaginatedTable";
import './Welcome.css';
import { getBalance, getWhoAmI, getMovements } from "../../api/api";
import { useNavigate } from "react-router-dom";

function Welcome() {
 
  /*const transactions = [
    { referencia: "001", fecha: "2024-11-01", monto: 500, descripcion: "Pago recibido", balance: "4500" },
    { referencia: "002", fecha: "2024-11-02", monto: -300, descripcion: "Pago realizado", balance: "4200" },
    { referencia: "003", fecha: "2024-11-03", monto: 1500, descripcion: "Depósito", balance: "5700" },
    { referencia: "004", fecha: "2024-11-04", monto: -200, descripcion: "Pago tarjeta", balance: "5500" },
    { referencia: "005", fecha: "2024-11-05", monto: 800, descripcion: "Transferencia recibida", balance: "6300" },
    { referencia: "006", fecha: "2024-11-06", monto: -150, descripcion: "Compra supermercado", balance: "6150" },
    { referencia: "007", fecha: "2024-11-07", monto: 1200, descripcion: "Ingreso adicional", balance: "7350" },
    { referencia: "008", fecha: "2024-11-08", monto: -50, descripcion: "Pago servicio", balance: "7300" },
    { referencia: "009", fecha: "2024-11-09", monto: 2000, descripcion: "Pago bono", balance: "9300" },
    { referencia: "010", fecha: "2024-11-10", monto: -400, descripcion: "Pago préstamo", balance: "8900" },
    { referencia: "011", fecha: "2024-11-11", monto: 300, descripcion: "Pago recibido", balance: "9200" },
    { referencia: "012", fecha: "2024-11-12", monto: -100, descripcion: "Compra en línea", balance: "9100" },
    { referencia: "013", fecha: "2024-11-13", monto: 200, descripcion: "Transferencia recibida", balance: "9300" },
    { referencia: "014", fecha: "2024-11-14", monto: -500, descripcion: "Pago tarjeta crédito", balance: "8800" },
    { referencia: "015", fecha: "2024-11-15", monto: 1800, descripcion: "Depósito en cuenta", balance: "10600" },
    { referencia: "016", fecha: "2024-11-16", monto: -250, descripcion: "Pago de renta", balance: "10350" },
    { referencia: "017", fecha: "2024-11-17", monto: 1200, descripcion: "Bono recibido", balance: "11550" },
    { referencia: "018", fecha: "2024-11-18", monto: -650, descripcion: "Pago en efectivo", balance: "10900" },
    { referencia: "019", fecha: "2024-11-19", monto: 1000, descripcion: "Ingreso extra", balance: "11900" },
    { referencia: "020", fecha: "2024-11-20", monto: -900, descripcion: "Pago préstamo personal", balance: "11000" },
  
  // API...
];*/
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
