import React from 'react';
import './Footer.css';
import Logo from '../../assets/icons/logo-principal-header.svg'
import Facebook from '../../assets/icons/Facebook.svg'
import Twitter from '../../assets/icons/Twitter.svg'
import Instagram from '../../assets/icons/Instagram.svg'

const Footer=()=>{
    return (
        <footer> 
            <div className='footer-custom'>
                <div className="container-fluid">
                    <div className='row p-5 bg-secondary white-text'>
                        <div className="col-xs-12 col-md-6 col-lg-3">
                            
                                <img src={Logo} className="img-fluid" alt="Logo Banco Universitario"/>
                           
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-3"></div> 
                            <p className='h5'>Nosotros</p>
                        <div className="col-xs-12 col-md-6 col-lg-3"></div> 
                            <p className='h5'>Servicios</p>
                        <div className="col-xs-12 col-md-6 col-lg-3"></div> 
                            <p className='h5'>Contacto</p>
                    </div>               
                </div>
            </div>
    </footer>   
    )
}

export default Footer