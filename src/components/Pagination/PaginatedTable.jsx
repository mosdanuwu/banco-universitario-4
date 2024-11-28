import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import './PaginatedTable.css';

function PaginatedTable({ data, itemsPerPage }) {
  const [currentPage, setCurrentPage] = useState(1); // Página actual

  // Índices para dividir los datos en páginas
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Cambiar de página
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-0"></div>
            <table className="col-md-11 tba">
            <thead>
                <tr>
                <th>Referencia</th>
                <th>Fecha</th>
                <th>Monto (Bs)</th>
                <th>Descripción</th>
                <th>Balance</th>
                </tr>
            </thead>
            <tbody>
                {currentData.map((item, index) => (
                    <tr key={index}>
                    <td>{item.referencia}</td>
                    <td>{item.fecha}</td>
                    <td>{item.monto}</td>
                    <td>{item.descripcion}</td>
                    <td>{item.balance}</td>
                </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                    <Pagination className="justify-content-center">
                    {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
                        <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                        >
                        {index + 1}
                        </Pagination.Item>
                    ))}
                    </Pagination>
                </td>
                </tr>
            </tfoot>
            </table>
            <div className="col-md-1"></div>
        </div>
    </div>
  );
}

export default PaginatedTable;
