import React, { Fragment, useState } from 'react';
import { createCategory } from '../api/category';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import './AdminStyle.css';

const AdminDashboard = () => {
    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);
    /********************************************** 
     * EVENT HANDLERS
    **********************************************/
    const handleMessages = (_evt) => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleCategoryChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory(evt.target.value);
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(category)) {
            setErrorMsg('Por favor Ingrese Una Categoría.'); 
        } else {
            const data = { category };

            setLoading(true);
            createCategory(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setCategory('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
    };
    /********************************************** 
     * VIEWS
    **********************************************/
    const showHeader = () => (
        <div className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="fontFamilyH6">
                            <i className="fas fa-user-tie"></i> Panel De Administrador.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );

    const showActionBtns = () => (
        <div className="bg-light my-2">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-dark btn-block" data-toggle="modal" data-target="#addCategoryModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Categoría.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addCategoryModal1">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Categoría Talla.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-warning btn-block" data-toggle="modal" data-target="#addCategoryModal2">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Categoría Color De Oro.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-secondary btn-block" data-toggle="modal" data-target="#addCategoryModal3">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Categoría Color De Piedra.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-primary btn-block" data-toggle="modal" data-target="#addCategoryModal4">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Productos.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-success btn-block">
                            <i className="fas fa-eye"> 
                                {' '}
                                <h5 className="fontFamilyH6">Ver Pedidos.</h5> 
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    /********************************************** 
     * MODAL PLUGIN DEFINITIONS
    **********************************************/
    const showCategoryModal = () => (
        <div id="addCategoryModal" className="modal" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <form onSubmit={handleCategorySubmit}>    
                        <div className="modal-header bg-dark text-white">
                            <h5 className="modal-title">
                            <i className="fas fa-plus-circle"></i> Añadir Categoría.
                            </h5>
                            <button className="btn btn-danger" data-dismiss="modal" aria-label="Cerrar.">
                                <span>
                                <i className="fas fa-window-close"></i> Cerrar.
                                </span>
                            </button>
                        </div>
                        <div className="modal-body my-2">
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}

                            {loading ? (
                                    <div className="text-center">
                                        {showLoading()}
                                    </div>
                                ) : (
                                    <Fragment>
                                        <label 
                                            htmlFor="addCategory" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Añadir Categoría. *:
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name='category'
                                            value={category}
                                            onChange={handleCategoryChange} 
                                            placeholder="Añadir Categoría."
                                        />
                                    </Fragment>
                            )}
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-danger" data-dismiss="modal">
                            <i className="fas fa-window-close"></i> Cerrar.
                            </button>
                            <button type="submit" className="btn btn-outline-success">
                            <i className="far fa-check-circle"></i> Guardar.
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
    /********************************************** 
     * RENDERING
    **********************************************/
    return (
        <section>
            {showHeader()}
            {showActionBtns()}
            {showCategoryModal()}
        </section>
    );
};

export default AdminDashboard;
