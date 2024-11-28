import React from 'react'
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";




 function Transfer () {
  return (
    
          <div  className= "transfer">
             <NavbarApp/>
             <Sidebar/>

             <div className="content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12"></div>
                            <div className="col-lg-4 col-md-4 col-sm-12">
                            <h2 className="transfer-title">Transferencia a Terceros</h2>
                            <br></br>
                            <br></br>
                            </div>
                            <div className="col-lg-4 col-md-4 col-sm-12"></div>
                        </div>
                    </div>
                </div>
     

      
          </div>
              

  
  )
}
export default Transfer;
