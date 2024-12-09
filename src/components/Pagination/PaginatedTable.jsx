import React  from "react";
import Pagination from "react-bootstrap/Pagination";
import './PaginatedTable.css';

function PaginatedTable({ data, itemsPerPage, currentPage, setCurrentPage, setItemsPerPage }) {

  
  // Índices para datos en páginas
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Cambio de página
  //const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handlePageChange = (pageNumber) => { 
    if (pageNumber < 1) pageNumber = 1; 
    if (pageNumber > totalPages) pageNumber = totalPages; 
    setCurrentPage(pageNumber); 
  };

	// Cambio de número de filas por página
  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reinicia a la primera página
  };


  return (
    <div className="container">
        <div className="row">
            <div className="col-md-1"></div>
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
                {currentData.map((item) => (
                    <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{new Date(item.created_at).toLocaleDateString()}</td>
                    <td className={item.multiplier===1 ? "monto-positivo" : "monto-negativo"}>{item.amount}</td>
                    <td>{item.description}</td>
                    <td>{item.balance.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}</td>
                </tr>
                ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="5" style={{ textAlign: "center" }}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
          						<label htmlFor="itemsPerPage" className="me-2">Filas por página:</label>
												<select
													id="itemsPerPage"
													className="form-select form-select-sm"
													style={{ width: "auto" }}
													value={itemsPerPage}
													onChange={handleItemsPerPageChange}
												>
													<option value={20}>20</option>
													<option value={35}>35</option>
													<option value={50}>50</option>
          							</select>
        						</div>
								</div>
                    <Pagination className="justify-content-center">
                      <Pagination.Prev
                       onClick={() => handlePageChange(currentPage - 1)} 
                       disabled={currentPage === 1}
                      />
                    {Array.from({ length: totalPages }, (_, index) => (
                        
                        <Pagination.Item
                        key={index + 1}
                        active={index + 1 === currentPage}
                        onClick={() => handlePageChange(index + 1)}
                        >
                        {index + 1}
                        </Pagination.Item>
                        
                    ))}
                    <Pagination.Next
                      onClick={() => handlePageChange(currentPage + 1)} 
                      disabled={currentPage === totalPages}  
                    />
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
