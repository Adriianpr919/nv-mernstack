import React, { useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { Link } from 'react-router-dom';
import { signup } from '../api/auth';
import './Signup.css';

const Signup = () => {
    /************ component state *************/
    const [formData, setFormData] = useState({
        username: 'example123',
        email: 'example123@gmail.com',
        password: 'abc12345',
        password2: 'abc12345',
        successMsg: false,
        errorMsg: false,
        loading: false,
    });

    const {
        username,
        email,
        password,
        password2,
        successMsg,
        errorMsg,
        loading,
    } = formData;
    /********************************************** 
     * EVENT HANDLERS 
    **********************************************/
    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value,
            successMsg: '',
            errorMsg: '',
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (
            isEmpty(username) || 
            isEmpty(email) || 
            isEmpty(password) || 
            isEmpty(password2)
        ) {
            setFormData({
                ...formData, 
                errorMsg: 'Todos Los Campos Son Obligatorios.',
            });
        } else if ( !isEmail(email) ) {
            setFormData({
                ...formData,
                errorMsg: 'Tu Correo Inválido.',
            });
        } else if ( !equals(password, password2) ) {
            setFormData({
                ...formData, 
                errorMsg: 'La Contraseña No Coincide.',
            });
        } else {
            const { username, email, password } = formData;
            const data = { username, email, password };

            setFormData({ ...formData, loading: true });

            signup(data)
                .then((response) => {
                    console.log('Éxito De Registro De Axios: ', response);
                    setFormData({
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        loading: false,
                        successMsg: response.data.successMessage,
                    });
                })
                .catch((err) => {
                    console.log('Error De Registro De Axios: ', err);
                    setFormData({ ...formData, loading: false, errorMsg: err.response.data.errorMessage });
                });
        }
    };    
    /********************************************** 
     * VIEWS
    **********************************************/
    const showSignupForm = () => (
        <form className="signup-form was-validated" onSubmit={handleSubmit} noValidate>
            {/*Signup*/}
            <p className="text-center text-white">
                <i class="fa-solid fa-user-plus"></i> <h3 className="titleSignup">Registrarse.</h3>
            </p>
            {/*Username*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-user-plus"></i></span>
                <input type="text" name="username" value={username} onChange={handleChange} className="form-control" placeholder="Nombre De Usuario." aria-label="Nombre De Usuario." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
                <div className="invalid-feedback">Por favor ingrese el nombre de usuario en el área de texto.</div>
            </div>
            {/*Email*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
                <input type="email" name="email" value={email} onChange={handleChange} className="form-control" placeholder="Tu Correo." aria-label="Tu Correo." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
                <div className="invalid-feedback">Por favor ingrese tu correo en el área de texto.</div>
            </div>
            {/*password A1*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                <input type="password" name="password" value={password} onChange={handleChange} pattern=".{150,}" className="form-control" placeholder="Contraseña." aria-label="Contraseña." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
                <div className="invalid-feedback">Por favor ingrese la contraseña en el área de texto.</div>
            </div>
            {/*password A2*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
                <input type="password" name="password2" value={password2} onChange={handleChange} pattern=".{150,}" className="form-control" placeholder="Confirmar La Contraseña." aria-label="Confirmar La Contraseña." aria-describedby="basic-addon1" required/>
                <span className="validity"></span>
                <div className="invalid-feedback">Por favor ingrese confirmar la contraseña en el área de texto.</div>
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
                <Link to="/signing" className="linkLogin" rel="noopener noreferrer" aria-label="Inicia Sesión."> 
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
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {successMsg && showSuccessMsg(successMsg)}
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && (
                        <div className="text-center pb-4">{showLoading()}</div>
                    )}
                    {showSignupForm()}
                    {/* <p style={{ color: 'white' }}>{JSON.stringify(formData)}</p> */}
                </div>
            </div>
        </div>
    );
};

export default Signup;