import React, { useState, useEffect } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { isAuthenticated } from '../helpers/auth';
import { Link, useHistory } from 'react-router-dom';
import { signup } from '../api/auth';

const Signup = () => {
    let history = useHistory();
    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            history.push('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            history.push('/user/dashboard');
        }
    }, [history]);

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
                    setFormData({ 
                        ...formData, 
                        loading: false, 
                        errorMsg: err.response.data.errorMessage, 
                    });
                });
        }
    };    
    /********************************************** 
     * VIEWS
    **********************************************/
    const showSignupForm = () => (
        <form className="signup-form" onSubmit={handleSubmit} noValidate>
            {/*Signup*/}
            <p className="text-center text-white">
                <i className="fas fa-user-plus"></i> <h3 className="titleSignup">Regístrarse.</h3>
            </p>
            {/*Username*/}
            <div className="input-group mb-3">
                <span className="input-group-text"><i className="fas fa-user-plus"></i></span>
                <input 
                    type="text" 
                    name="username" 
                    value={username} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Nombre De Usuario."
                    aria-label="Nombre De Usuario."
                    required 
                />
            </div>
            {/*Email*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-at"></i></span>
                <input 
                    type="email" 
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Tu Correo."
                    aria-label="Tu Correo."
                    required 
                />
            </div>
            {/*password A1*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input 
                    type="password" 
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Contraseña."
                    aria-label="Contraseña."
                    pattern=".{6,}" 
                    required
                />
            </div>
            {/*password A2*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                <input 
                    type="password" 
                    name="password2" 
                    value={password2} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Confirmar La Contraseña." 
                    aria-label="Confirmar La Contraseña."
                    pattern=".{6,}"
                    required
                />
            </div>
            {/*Signup Button*/}
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block btn-lg d-grid gap-2 col-6 mx-auto">
                    Crear Cuenta.
                </button>
            </div>
            {/*Already have account*/}
            <p className="text-center text-white">
                ¿Ya Tienes Una Cuenta? 
                <Link to="/signing" className="linkLogin" rel="noopener noreferrer" aria-label="Inicia Sesión."> 
                    <i className="fas fa-user-shield"></i> Inicia Sesión.
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