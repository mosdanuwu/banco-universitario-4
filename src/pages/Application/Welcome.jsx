import React from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";

import './Welcome.css';


function Welcome(){

    return(
        
        < div className="welcome">
         
          <NavbarApp/>
          <Sidebar/>
    

        </div>

    

    );

}
export default Welcome;