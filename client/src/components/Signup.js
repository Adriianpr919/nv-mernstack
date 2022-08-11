import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    /********************************************** 
     * VIEWS
    **********************************************/
    const showSignupForm = () => (
        <form className="signup-form">
            {/*Signup*/}
            <p className="text-center text-white">
                <i class="fa-solid fa-user-plus"></i> <h3 className="titleSignup">Registrarse.</h3>
            </p>
            {/*Username*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-user-plus"></i></span>
                <input type="text" name="" className="form-control" placeholder="Nombre De Usuario." aria-label="Nombre De Usuario." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
            </div>
            {/*Email*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
                <input type="email" name="" className="form-control" placeholder="Tu Correo." aria-label="Tu Correo." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
            </div>
            {/*password A1*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                <input type="password" name="" pattern=".{150,}" className="form-control" placeholder="Contraseña." aria-label="Contraseña." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
            </div>
            {/*password A2*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                <input type="password" name="" pattern=".{150,}" className="form-control" placeholder="Confirmar La Contraseña." aria-label="Confirmar La Contraseña." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
            </div>
            {/*Signup Button*/}
            <div className="form-group">
                <button type="submit" className="btn btn-primary d-grid gap-2 col-6 mx-auto">
                    Registrarse.
                </button>
            </div>
            {/*Already have account*/}
            <p className="text-center text-white">
                ¿Ya Tienes Una Cuenta? 
                <Link to="#" className="linkLogin" rel="noopener noreferrer" aria-label="Inicia Sesión."> 
                    <i class="fa-solid fa-house-chimney-user"></i> Inicia Sesión.
                </Link>
            </p>
        </form>
    );
    
    /********************************************** 
     * RENDERING
    **********************************************/
    return (
        <div className="signup-container">
            <div className="px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {showSignupForm()}
                </div>
            </div>
        </div>
    );
};

export default Signup;