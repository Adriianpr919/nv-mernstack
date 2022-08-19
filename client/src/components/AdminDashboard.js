import React, { Fragment, useState } from 'react';
import { createCategory1 } from '../api/category1';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import './AdminStyle.css';

const AdminDashboard = () => {
    const [category1, setCategory1] = useState('');
    
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState('false');
    /********************************************** 
     * EVENT HANDLERS
    **********************************************/
    const handleMessages = (_evt) => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleCategory1Change = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory1(evt.target.value);
    };

    const handleCategory1Submit = (evt) => {
        evt.preventDefault();

        if (isEmpty(category1)) {
            setErrorMsg('Por favor Ingrese Una Categoría.'); 
        } else {
            const data = { category1 };

            setLoading(true);
            createCategory1(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setCategory1('');
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
                            <i class="fa-solid fa-house-user"></i> Panel De Administrador.
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
                        <button className="btn btn-outline-dark btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal1">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-info btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal2">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría Talla.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-warning btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal3">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría Color De Oro.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-secondary btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal4">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría Color De Piedra.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-primary btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal5">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Productos.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-success btn-block">
                            <i class="fa-solid fa-eye"> 
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
    const showCategoryModal1 = () => (
        <div id="addCategoryModal1" className="modal" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <form onSubmit={handleCategory1Submit}>    
                <div className="modal-header bg-dark text-white">
                    <h5 className="modal-title">
                    <i class="fa-solid fa-circle-plus"></i> Añadir Categoría.
                    </h5>
                    <button className="btn btn-danger" data-bs-dismiss="modal" aria-label="Cerrar.">
                        <span>
                        <i class="fa-solid fa-circle-xmark"></i> Cerrar.
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
                                <label className="text-secondary"><i class="fa-solid fa-circle-plus"></i> Añadir Categoría. *:</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder="Añadir Categoría." 
                                    name="category1"
                                    value={category1}
                                    onChange={handleCategory1Change} 
                                />
                            </Fragment>
                    )}
                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-danger" data-bs-dismiss="modal">
                    <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                    </button>
                    <button type="submit" className="btn btn-outline-success">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar.
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
            {showCategoryModal1()}
        </section>
    );
};

export default AdminDashboard;
