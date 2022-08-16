import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './img/Logonv.png';

const Header = () => {
    //views header
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <Link to='/' className="navbar-brand">
                    <img src={Logo} alt="Nury Valenzuela Joyería." title="Nury Valenzuela Joyería." />
                </Link>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link 
                            className="nav-link active" 
                            aria-current="page" 
                            to='/'>
                                <i class="fa-solid fa-globe"></i> Inicio.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            className="nav-link" 
                            to='/about'>
                                <i class="fa-solid fa-circle-info"></i> Sobre Nosotros.
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link 
                            className="nav-link dropdown-toggle" 
                            id="navbarDropdown" 
                            to='#' 
                            role="button" 
                            data-bs-toggle="dropdown" 
                            aria-expanded="false">
                                <i class="fa-solid fa-store"></i> Ver Tienda.
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/products'>
                                        <i class="fa-solid fa-bag-shopping"></i> Ver Todos Los Productos.
                                    </Link>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link 
                            className="nav-link" 
                            to='/signing'>
                                <i class="fa-solid fa-house-chimney-user"></i> Inicia Sesión.
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link 
                            className="nav-link" 
                            to='/signup'>
                                <i class="fa-solid fa-user-plus"></i> Regístrarse.
                            </Link>
                        </li>
                        <li>
                            <form className="d-flex">
                                <button class="btn btn-outline-dark" type="submit">
                                    <i class="bi-cart-fill me-1"></i>
                                    <i class="fa-solid fa-cart-plus"></i> Ver Carrito.
                                    <span class="badge bg-dark text-white ms-1 rounded-pill">
                                        ($0 COP)
                                    </span>
                                </button>
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

    //render
    return <header id='header'>{showNavigation()}</header>;

};

export default Header;
