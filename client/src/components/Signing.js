import React, { useState, useEffect } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';
import { showErrorMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import { setAuthentication, isAuthenticated } from '../helpers/auth';
import { Link, useHistory } from 'react-router-dom';
import { signing } from '../api/auth';

const Signing = () => {
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

                    if (isAuthenticated() && isAuthenticated().role === 1) {
                        console.log('Redirigir Al Panel De Control Administración.');
                        history.push('/admin/dashboard');
                    } else {
                        console.log('Redirigir Al Panel De Control Del Usuario.');
                        history.push('/user/dashboard');
                    }
                })
                .catch((err) => {
                    console.log('iniciar sesión en el error de la función api: ', err);
                });
                
        }
    };
    /********************************************** 
     * VIEWS
    **********************************************/
    const showSigningForm = () => (
        <form className="signing-form" onSubmit={handleSubmit} noValidate>
            {/*Signing*/}
            <p className="text-center text-white">
                <i class="fa-solid fa-house-chimney-user"></i> <h3 className="titleSigning">Inicia Sesión.</h3>
            </p>
            {/*Email*/}
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-at"></i></span>
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
                <span className="input-group-text" id="basic-addon1"><i class="fa-solid fa-lock"></i></span>
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
            {/*Signing Button*/}
            <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block btn-lg d-grid gap-2 col-6 mx-auto">
                    Iniciar Sesión.
                </button>
            </div>
            {/*Already have account*/}
            <p className="text-center text-white">
                <br />
                SI TODAVÍA NO TIENES UNA CUENTA DE USUARIO DE https://nuryvalenzuelajoyeria.com.co/ UTILIZA ESTA OPCIÓN PARA ACCEDER AL FORMULARIO DE REGISTRO.

                TE SOLICITAREMOS LA INFORMACIÓN IMPRESCINDIBLE PARA AGILIZAR EL PROCESO DE COMPRA. <br />
                <Link to="/signup" className="linkLogin" rel="noopener noreferrer" aria-label="Regístrarse."> 
                    <i class="fa-solid fa-user-plus"></i> Regístrarse.
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