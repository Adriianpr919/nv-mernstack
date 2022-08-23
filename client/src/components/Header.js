import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';
import Logo from './img/Logonv.png';

const Header = ({ history }) => {
    const handleLogout = (_evt) => {
        logout(() => {
            history.push('/signing');
        });
    };
    //views header
    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to='/' className="navbar-brand">
            <img src={Logo} alt="Nury Valenzuela Joyería." title="Nury Valenzuela Joyería." />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link 
                    className="nav-link active" 
                    aria-current="page" 
                    to='/'>
                        <i className="fas fa-globe"></i> Inicio.
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                    className="nav-link" 
                    to='/about'>
                        <i className="fas fa-info-circle"></i> Sobre Nosotros.
                    </Link>
                </li>
                <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-shopping-bag"></i> Ver Tienda.
                    </Link>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <div className="dropdown-divider"></div>
                        <Link 
                        className="dropdown-item" 
                        to='/products'>
                            <i className="fas fa-shopping-bag"></i> Ver Todos Los Productos.
                        </Link>
                        <div className="dropdown-divider"></div>
                    </div>
                </li>
            </ul>
        </div>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {!isAuthenticated() && (
                    <Fragment>
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
                                <i className="fas fa-users"></i> Panel De Usuario.
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
                                <i className="fas fa-user-tie"></i> Panel De Administrador.
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
                <li>
                    <form className="d-flex">
                        <button className="btn btn-outline-dark" type="submit">
                            <i className="bi-cart-fill me-1"></i>
                            <i className="fas fa-cart-plus"></i> Ver Carrito.
                            <span className="badge bg-dark text-white ms-1 rounded-pill">
                                ($0 COP)
                            </span>
                        </button>
                    </form>
                </li>
            </ul>
        </div>
        </nav>
    );

    //render
    return <header id='header'>{showNavigation()}</header>;

};

export default withRouter(Header);
