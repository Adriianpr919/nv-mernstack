import React, { useState, useEffect, useRef } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import equals from 'validator/lib/equals';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { isAuthenticated } from '../helpers/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';
import './Signup.css';

const Signup = () => {
    let navigate = useNavigate();

    const data=useRef();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            navigate('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            navigate('/user/dashboard');
        }
    }, [navigate]);

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

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
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

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };    

    console.log(localStorage.getItem("inputValue"),"****");
    /********************************************** 
     * VIEWS
    **********************************************/
    const showSignupForm = () => (
        <form className="form-signin" onSubmit={handleSubmit} noValidate>
            {/*Signup*/}
            <div className="text-center text-white mb-4">
                <i className="fas fa-user-plus"></i> <h3 className="titleSignup mb-3 font-weight-normal">Regístrarse.</h3>
            </div>
            {/*Username*/}
            <div className="form-label-group">
                <input 
                    type="text" 
                    ref={data}
                    id="inputName"
                    name="username" 
                    value={username} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Nombre De Usuario."
                    aria-label="Nombre De Usuario."
                    required 
                    autofocus
                />
                <label 
                    htmlFor="inputName" 
                    className="text-secondary">
                        <i className="fas fa-user-plus"></i> Usuario.
                </label>
            </div>
            {/*Email*/}
            <div className="form-label-group">
                <input 
                    type="email" 
                    ref={data}
                    id="inputEmail"
                    name="email" 
                    value={email} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Tu Correo."
                    aria-label="Tu Correo."
                    required 
                    autofocus
                />
                <label 
                    htmlFor="inputEmail" 
                    className="text-secondary">
                        <i className="fas fa-at"></i> Correo.
                </label>
            </div>
            {/*password A1*/}
            <div className="form-label-group">
                <input 
                    type="password" 
                    ref={data}
                    id="inputPassword"
                    name="password" 
                    value={password} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Contraseña."
                    aria-label="Contraseña."
                    pattern=".{6,}" 
                    required
                />
                <label 
                    htmlFor="inputPassword" 
                    className="text-secondary">
                        <i className="fas fa-key"></i> Contraseña 1.
                </label>
            </div>
            {/*password A2*/}
            <div className="form-label-group">
                <input 
                    type="password" 
                    ref={data}
                    id="inputPassword2"
                    name="password2" 
                    value={password2} 
                    onChange={handleChange} 
                    className="form-control" 
                    placeholder="Confirmar La Contraseña." 
                    aria-label="Confirmar La Contraseña."
                    pattern=".{6,}"
                    required
                />
                <label 
                    htmlFor="inputPassword2" 
                    className="text-secondary">
                        <i className="fas fa-key"></i> Contraseña 2.
                </label>
            </div>
            {/*Signup Button*/}
            <div className="form-group">
                <button type="submit" ref={data} className="btn btn-primary btn-block btn-lg d-grid gap-2 col-6 mx-auto">
                    <i className="fas fa-user-plus"></i> Crear Cuenta.
                </button>
            </div>
            {/*Already have account*/}
            <p className="text-center text-white mt-5 mb-3">
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
                </div>
            </div>
        </div>
    );
};

export default Signup;