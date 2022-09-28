import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';
import { useSelector } from 'react-redux';
import Logo from './img/Logonv.png';

const Header = () => {
    let navigate = useNavigate();
    const { cart } = useSelector(state => state.cart);

    const handleLogout = (_evt) => {
        logout(() => {
            navigate('/signing');
        });
    };
    //views header
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/' className="navbar-brand">
                <img src={Logo} alt="Nury Valenzuela Joyería." title="Nury Valenzuela Joyería." lang="es" />
            </Link>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarTogglerDemo02" 
                aria-controls="navbarTogglerDemo02" 
                aria-expanded="false" 
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item active">
                                <Link 
                                className="nav-link active" 
                                aria-current="page" 
                                to='/'>
                                    <i className="fas fa-globe"></i> Inicio.
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-info-circle"></i> Área Legal.
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/options1'>
                                        <i className="fas fa-info-circle"></i> Términos y Condiciones.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/options2'>
                                        <i className="fas fa-info-circle"></i> Políticas De Envios, Cambios, Devoluciones Y Garantías.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/faq'>
                                        <i className="fas fa-info-circle"></i> Preguntas Frecuentes.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/about'>
                                        <i className="fas fa-info-circle"></i> Sobre Nosotros.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-shopping-bag"></i> Ver Tienda.
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/shop'>
                                        <i className="fas fa-shopping-bag"></i> Ver Todos Los Productos.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                </div>
                            </li>
                            <li
                                className='nav-item mr-2'
                                style={{ position: 'relative' }}
                            >
                                <Link to='/cart' className='nav-link btn btn-outline-danger text-dark'>
                                    <i className="bi-cart-fill me-1"></i>
                                    <i className='fas fa-cart-plus'></i>{' '}
                                    Ver Carrito.{' '}
                                    <span
                                        className='badge badge-danger bg-dark text-white ms-1 rounded-pill'
                                        lang="es"
                                        style={{
                                            position: 'absolute',
                                            top: '0px',
                                        }}
                                    >
                                        ({cart.length})
                                    </span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link" 
                                to='/signing'>
                                    <i className="fas fa-user-shield"></i>{' '} 
                                    Inicia Sesión.
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link" 
                                to='/signup'>
                                    <i className="fas fa-user-plus"></i> Regístrarse.
                                </Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && isAuthenticated().role === 0 && (
                        <Fragment>
                            <li className="nav-item">
                                <Link 
                                className="nav-link active" 
                                aria-current="page" 
                                to='/user/dashboard'>
                                    <i className="fas fa-users"></i>{' '} 
                                    Panel De Usuario.
                                </Link>
                            </li>
                            <li className="nav-item active">
                                <Link 
                                className="nav-link active" 
                                aria-current="page" 
                                to='/'>
                                    <i className="fas fa-globe"></i> Inicio.
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-info-circle"></i> Área Legal.
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/options1'>
                                        <i className="fas fa-info-circle"></i> Términos y Condiciones.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/options2'>
                                        <i className="fas fa-info-circle"></i> Políticas De Envios, Cambios, Devoluciones Y Garantías.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/faq'>
                                        <i className="fas fa-info-circle"></i> Preguntas Frecuentes.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/about'>
                                        <i className="fas fa-info-circle"></i> Sobre Nosotros.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-shopping-bag"></i> Ver Tienda.
                                </Link>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div className="dropdown-divider"></div>
                                    <Link 
                                    className="dropdown-item" 
                                    to='/shop'>
                                        <i className="fas fa-shopping-bag"></i> Ver Todos Los Productos.
                                    </Link>
                                    <div className="dropdown-divider"></div>
                                </div>
                            </li>
                            <li
                                className='nav-item mr-2'
                                style={{ position: 'relative' }}
                            >
                                <Link to='/cart' className='nav-link btn btn-outline-danger text-dark'>
                                    <i className="bi-cart-fill me-1"></i>
                                    <i className='fas fa-cart-plus'></i>{' '}
                                    Ver Carrito.{' '}
                                    <span
                                        className='badge badge-danger bg-dark text-white ms-1 rounded-pill'
                                        lang="es"
                                        style={{
                                            position: 'absolute',
                                            top: '0px',
                                        }}
                                    >
                                        ({cart.length})
                                    </span>
                                </Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && isAuthenticated().role === 1 && (
                        <Fragment>
                            <li className="nav-item">
                                <Link 
                                className="nav-link active" 
                                aria-current="page" 
                                to='/admin/dashboard'>
                                    <i className="fas fa-user-tie"></i>{' '} 
                                    Panel De Administrador.
                                </Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <button 
                                className="btn btn-outline-danger logoutHover"
                                onClick={handleLogout}>
                                    <i className="fas fa-power-off"></i>{' '} 
                                    Cerrar Sesión.
                                </button>
                            </li>
                        </Fragment>
                    )}
                </ul>
            </div>
        </nav>
    );

    //render
    return <header id='header'>{showNavigation()}</header>;

};

export default Header;
