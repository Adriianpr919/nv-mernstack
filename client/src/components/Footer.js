import React from 'react';
import Logo from './img/Logonv.png';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container py-5" style={{textAlign: "justify"}} lang="es">
            <div className="row">
                <div className="col-12 col-md">
                    <img src={Logo} alt="Nury Valenzuela." title="Nury Valenzuela." lang="es" />
                    <small className="d-block mb-3 text-muted">
                        CopyRight &copy; {new Date().getFullYear()}
                        &#9474; Todos Los Derechos Reservados.
                        &#9474; Distribuido Por: <strong><span><b>Nury Valenzuela.</b></span></strong>
                    </small>
                </div>
                <div className="col-12 col-md">
                    <h5>Síganos.</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a href="https://www.youtube.com/embed/lUIAHkN8TlQ" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                            <i className="fab fa-youtube" style={{fontSize:"25px", color:"#FD1D1D"}}></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                            <i className="fab fa-instagram" style={{fontSize:"25px", color:"#C13584"}}></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                            <i className="fab fa-whatsapp" style={{fontSize:"25px", color:"#008000"}}></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md">
                    <h5>Información De La Tienda.</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link to="#" className="text-muted">
                            <i className="fab fa-periscope" style={{fontSize:"25px", color:"#E6ACA9"}}></i> <span className="linkEnlace">Villavicencio, Meta, América Del Sur.</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="text-muted">
                            <i className="fas fa-home" style={{fontSize:"25px", color:"#E6ACA9"}}></i> <span className="linkEnlace">Dirección: MonteArroyo Reservado (casa 6 manzana 3)</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md">
                    <h5>Área Legal.</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <Link to="/options1" className="text-muted">
                            <i className="fas fa-info-circle"></i> <span className="linkEnlace">Términos y Condiciones.</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/options2" className="text-muted">
                            <i className="fas fa-info-circle"></i> <span className="linkEnlace">Políticas De Envios, Cambios, Devoluciones Y Garantías.</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/faq" className="text-muted">
                            <i className="fas fa-info-circle"></i> <span className="linkEnlace">Preguntas Frecuentes.</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-muted">
                            <i className="fas fa-info-circle"></i> <span className="linkEnlace">Sobre Nosotros.</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="col-12 col-md">
                    <h5>Atención Al Cliente.</h5>
                    <ul className="list-unstyled text-small">
                        <li>
                            <a 
                            href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-muted">
                                <span className="linkEnlace">
                                <i className="fab fa-whatsapp" style={{fontSize:"25px", color:"#008000"}}></i> WhatsApp: +57-3133966349
                                </span>
                            </a>
                        </li>
                        <li>
                            <a 
                            href="mailto:nuryvalenzuelajoyeria@gmail.com"
                            rel="noopener noreferrer"
                            className="text-muted">
                                <span className="linkEnlace">
                                <i className="fab fa-telegram" style={{fontSize:"25px", color:"blue"}}></i> nuryvalenzuelajoyeria@gmail.com
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
