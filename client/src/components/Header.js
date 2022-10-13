import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';
import { useSelector } from 'react-redux';
import Logo from './assets/img/Logonv.png';
import './Header.css';

const Header = () => {
    let navigate = useNavigate();
    const { cart } = useSelector(state => state.cart);

    const handleLogout = (_evt) => {
        logout(() => {
            navigate('/signing');
        });
    };
    //views headerQS
    const showNavigation = () => (
        <>
            <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
                <Link className="navbar-brand ml-auto mr-lg-0 active" aria-current="page" to="/">
                    <i className="fas fa-globe"></i> Inicio. <span className="sr-only">(current)</span>
                </Link>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 my-2 my-lg-0">
                        {!isAuthenticated() && (
                            <Fragment>
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
                                    <form className='form-inline'>
                                        <Link to='/cart' className='nav-link btn btn-outline-muted border border-secondary text-dark my-2 my-sm-0'>
                                            <i className="bi-cart-fill me-1"></i>
                                            <i className='fas fa-cart-plus'></i>{' '}
                                            Ver Carrito.{' '}
                                            <span
                                                className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill'
                                                lang="es"
                                            >
                                                ({cart.length})
                                            </span>
                                        </Link>
                                    </form>
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
                                    <form className='form-inline'>
                                        <Link to='/cart' className='nav-link btn btn-outline-muted border border-secondary text-dark my-2 my-sm-0'>
                                            <i className="bi-cart-fill me-1"></i>
                                            <i className='fas fa-cart-plus'></i>{' '}
                                            Ver Carrito.{' '}
                                            <span
                                                className='badge badge-pill badge-danger bg-danger border border-secondary text-white ms-1 rounded-pill'
                                                lang="es"
                                            >
                                                ({cart.length})
                                            </span>
                                        </Link>
                                    </form>
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
            <div className="nav-scroller bg-light shadow-sm">
                <nav className="nav nav-underline">
                    <Link className="nav-link active" to="/">
                        <img src={Logo} alt="Nury Valenzuela." title="Nury Valenzuela." lang="es" />
                    </Link>
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">
                                        CopyRight &copy; {new Date().getFullYear()}
                                    </th>
                                    <th scope="col">
                                        <a href="https://www.youtube.com/embed/lUIAHkN8TlQ" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                                            <i className="fab fa-youtube" style={{fontSize:"25px", color:"#FD1D1D"}}></i>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a href="https://www.instagram.com/nuryvalenzuelajoyeria/" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                                            <i className="fab fa-instagram" style={{fontSize:"25px", color:"#C13584"}}></i>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <a href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" target="_blank" rel="noopener noreferrer" className="text-muted linkEnlace">
                                            <i className="fab fa-whatsapp" style={{fontSize:"25px", color:"#008000"}}></i>
                                        </a>
                                    </th>
                                    <th scope="col">
                                        <Link to="#" className="text-muted">
                                            <i className="fab fa-periscope" style={{fontSize:"25px", color:"#E6ACA9"}}></i> <span className="linkEnlace">Villavicencio, Meta, América Del Sur.</span>
                                        </Link>
                                    </th>
                                    <th scope="col">
                                        <Link to="#" className="text-muted">
                                            <i className="fas fa-home" style={{fontSize:"25px", color:"#E6ACA9"}}></i> <span className="linkEnlace">Dirección: MonteArroyo Reservados (casa 6 manzana 3)</span>
                                        </Link>
                                    </th>
                                    <th scope="col">
                                        <a
                                        href="mailto:nuryvalenzuelajoyeria@gmail.com"
                                        rel="noopener noreferrer"
                                        className="text-muted">
                                            <span className="linkEnlace">
                                                <i className="fab fa-telegram" style={{fontSize:"25px", color:"blue"}}></i> nuryvalenzuelajoyeria@gmail.com
                                            </span>
                                        </a>
                                    </th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </nav>
            </div>
        </>
    );

    //render
    return <header id='header'>{showNavigation()}</header>;

};

export default Header;
