import React from "react";
import NavbarApp from '../../components/Layout/NavbarApp/NavbarApp';
import Sidebar from "../../components/Layout/Sidebar/Sidebar";

import './Welcome.css';


function Welcome(){

    return(
        
        < div className="welcome">
          <div class="container">
                <div class="row">
                  <div class="col-9"><NavbarApp/></div><br />
                  <div class="col-4"><Sidebar/></div><br />
                  <div class="col-6"><h2>!Bienvenida Rhaenerys Targayen!</h2></div>
                </div>
          </div>
    

        </div>

    

    );

}
export default Welcome;