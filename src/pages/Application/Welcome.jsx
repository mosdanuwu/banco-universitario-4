import React from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";

import './Welcome.css';


function Welcome(){

    return(
        
        < div className="container-text">
              <NavbarApp/>
              <div className="flex">
                <Sidebar/>
                <div className="contenido">

                </div>
              </div>

            

        </div>

    

    );

}
export default Welcome;