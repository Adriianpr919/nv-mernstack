import React, { useState, useEffect } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { setAuthentication, isAuthenticated } from '../helpers/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { signing } from '../api/auth';
import './Signing.css';

const Signing = () => {
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        if (isAuthenticated() && isAuthenticated().role === 1) {
            navigate('/admin/dashboard');
        } else if (isAuthenticated() && isAuthenticated().role === 0) {
            navigate('/user/dashboard');
        }
    }, [navigate]);

    /************ component state *************/
    const [formData, setFormData] = useState({
        email: 'example123@gmail.com',
        password: 'abc12345',
        errorMsg: false,
        loading: false,
    });
    const {
        email,
        password,
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
            errorMsg: '',
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        // client-side validation
        if (isEmpty(email) || isEmpty(password)) {
            setFormData({
                ...formData, 
                errorMsg: 'Todos Los Campos Son Obligatorios.',
            });
        } else if (!isEmail(email)) {
            setFormData({
                ...formData,
                errorMsg: 'Tu Correo Inválido.',
            });
        } else {
            const { email, password } = formData;
            const data = { email, password };

            setFormData({ ...formData, loading: true });

            signing(data)
                .then((response) => {
                    setAuthentication(response.data.token, response.data.user);
                    const redirect = location.search.split('=')[1];

                    if (isAuthenticated() && isAuthenticated().role === 1) {
                        console.log('Redirigir Al Panel De Control Administración.');
                        navigate('/admin/dashboard');
                    }
                    else if (
						isAuthenticated() &&
						isAuthenticated().role === 0 &&
						!redirect
					) {
						console.log('Redirigir Al Panel De Control Del Usuario.');
						navigate('/user/dashboard');
					} else {
                        console.log('Redireccionamiento A Envío.');
                        navigate('/shipping');
                    }
                })
                .catch((err) => {
                    console.log('Iniciar Sesión En El Error De La Función API: ', err);
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
    const showSigningForm = () => (
        <form className="form-signin" onSubmit={handleSubmit} noValidate>
            {/*Signing*/}
            <div className="text-center text-white mb-4">
                <i className="fas fa-user-shield"></i> <h3 className="titleSigning mb-3 font-weight-normal">Inicia Sesión.</h3>
            </div>
            {/*Email*/}
            <div className="form-label-group">
                <input 
                    type="email" 
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
                        <i className="fas fa-key"></i> Contraseña.
                </label>
            </div>
            {/*Signing Button*/}
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block btn-lg d-grid gap-2 col-6 mx-auto">
                    <i className="fas fa-user-shield"></i> Iniciar Sesión.
                </button>
            </div>
            {/*Already have account*/}
            <p className="commentFormSigning mt-5 mb-3">
                <p className="commentFormP">
                SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO DE https://nuryvalenzuelajoyeria.com.co/ UTILIZA ESTA OPCIÓN PARA ACCEDER AL FORMULARIO DE REGISTRO.

                TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA AGILIZAR EL PROCESO DE COMPRA.
                </p>
                <Link to="/signup" className="linkLogin" rel="noopener noreferrer" aria-label="Regístrarse."> 
                    <i className="fas fa-user-plus"></i> Regístrarse.
                </Link>
            </p>
        </form>
    );

    /********************************************** 
     * RENDERING
    **********************************************/
    return (
        <div className="signing-container">
            <div className="row px-3 vh-100">
                <div className="col-md-5 mx-auto align-self-center">
                    {errorMsg && showErrorMsg(errorMsg)}
                    {loading && (
                        <div className="text-center pb-4">{showLoading()}</div>
                    )}
                    {showSigningForm()}
                </div>
            </div>
        </div>
    );
};

export default Signing;