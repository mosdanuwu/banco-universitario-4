import React from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";

import './Welcome.css';


function Welcome(){

    return(
        
        < div className="welcome">
          <div class="container">
                <div class="row">
                  <div class="columnna_navbar"><NavbarApp/></div><br />
                  <div class="columnna_sidebar"><Sidebar/></div><br />
                  <div class="columnna_body"><h2></h2></div>
                </div>
          </div>
    

        </div>

    

    );

}
export default Welcome;