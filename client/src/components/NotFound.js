import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <div id="notfound">
                <div className="notfound-bg">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="notfound">
                    <div className="notfound-404">
                        <h1>404</h1>
                    </div>
                    <h2>Página No Encontrada Lo Siento.</h2>
                    <p>Es posible que la página que este buscando haya sido eliminada debido a un cambios de nombre o no este disponible temporalmente.</p>
                    <Link to="/">
                        <i className="fas fa-globe"></i> Volver Inicio.
                    </Link>
                    <div className="notfound-social">
                        <a href="https://www.youtube.com/embed/lUIAHkN8TlQ" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-youtube" style={{fontSize:"25px"}}></i>
                        </a>
                        <a href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" style={{fontSize:"25px"}}></i>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-whatsapp" style={{fontSize:"25px"}}></i>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;