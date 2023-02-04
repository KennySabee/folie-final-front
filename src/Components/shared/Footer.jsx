import React from 'react'
import '../../App.css';
import fbLogo from './../../assets/fb-logo.png'

function Footer() {
  return (
    <>
     <div className="gridfooter-container">
            <div className="griditem-1">
                <a href="">
                    {/* no me aparece la imagen? */}
                    {/* <img src={fbLogo} alt="instagram" className="social-icons"></img> */}
                
                </a>
               
            </div>
            <div className="griditem-2">
                <h4 className="title-links">PRODUCTOS</h4>
                <a href="" className="footer-links">
                    Menú
                </a>
            </div>
            <div className="griditem-3">
                <h4 className="title-links">NOSOTROS</h4>
                <ul className="footer-list">
                    <li><a href="" className="footer-links">Acerca de</a> </li>
                    <li><a href="" className="footer-links">Blog</a></li>                   
                    <li><a href="" className="footer-links">Contacto</a></li>
                </ul>
            </div>
            <div className="griditem-4">
                <h4 className="title-links">SOPORTE</h4>
                <ul className="footer-list">
                    <li><a href="" className="footer-links">Precios y cotizaciones</a> </li>
                    <li><a href="" className="footer-links">FAQ</a></li>
                    <li><a href="" className="footer-links">Alianzas</a></li>
                </ul>
            </div>
           
            <div className="griditem-5">
                <h4 className="title-links">LEGAL</h4>
                <ul className="footer-list">
                    <li><a href="" className="footer-links">Privacidad</a> </li>
                    <li><a href="" className="footer-links">Términos y Condiciones</a></li>
                    
                </ul>
            </div>
            <div className="griditem-6">
                <p>Desarrollado por Kenny Merizalde.  </p>
            </div>
        </div>
    </>
  )
}

export default Footer