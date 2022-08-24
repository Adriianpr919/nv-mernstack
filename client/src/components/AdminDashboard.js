import React, { Fragment, useState } from 'react';
import { createCategory } from '../api/category';
import { createSize } from '../api/category1';
import { createGold } from '../api/category2';
import { createStone } from '../api/category3';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import './AdminStyle.css';

const AdminDashboard = () => {
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [gold, setGold] = useState('');
    const [stone, setStone] = useState('');
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
    const handleSizeChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setSize(evt.target.value);
    };
    const handleGoldChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setGold(evt.target.value);
    };
    const handleStoneChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setStone(evt.target.value);
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
    const handleSizeSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(size)) {
            setErrorMsg('Por favor Ingrese Una Talla.'); 
        } else {
            const data = { size };

            setLoading(true);
            createSize(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setSize('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
    };
    const handleGoldSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(gold)) {
            setErrorMsg('Por favor Ingrese El Color De Oro.'); 
        } else {
            const data = { gold };

            setLoading(true);
            createGold(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setGold('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
    };
    const handleStoneSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(stone)) {
            setErrorMsg('Por favor Ingrese El Color De Piedra.'); 
        } else {
            const data = { stone };

            setLoading(true);
            createStone(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setStone('');
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
                        <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addSizeModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Talla.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-warning btn-block" data-toggle="modal" data-target="#addGoldModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Color De Oro.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-secondary btn-block" data-toggle="modal" data-target="#addStoneModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Color De Piedra.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-primary btn-block" data-toggle="modal" data-target="#addProductsModal">
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
    const showSizeModal = () => (
        <div id="addSizeModal" className="modal" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <form onSubmit={handleSizeSubmit}>
                        <div className="modal-header bg-info">
                            <h5 className="modal-title">
                                <i className="fas fa-plus-circle"></i> Añadir Talla.
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
                                            htmlFor="addSize" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Añadir Talla. *:
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name='size'
                                            value={size}
                                            onChange={handleSizeChange} 
                                            placeholder="Añadir Talla."
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
    const showGoldModal = () => (
        <div id="addGoldModal" className="modal" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <form onSubmit={handleGoldSubmit}>
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title">
                                <i className="fas fa-plus-circle"></i> Añadir Color De Oro.
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
                                            htmlFor="addGold" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Añadir Color De Oro. *:
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name='gold'
                                            value={gold}
                                            onChange={handleGoldChange} 
                                            placeholder="Añadir Color De Oro."
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
    const showStoneModal = () => (
        <div id="addStoneModal" className="modal" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <form onSubmit={handleStoneSubmit}>
                        <div className="modal-header bg-secondary text-white">
                            <h5 className="modal-title">
                                <i className="fas fa-plus-circle"></i> Añadir Color De Piedra.
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
                                            htmlFor="addStone" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Añadir Color De Piedra. *:
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name='stone'
                                            value={stone}
                                            onChange={handleStoneChange} 
                                            placeholder="Añadir Color De Piedra."
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
            {showSizeModal()}
            {showGoldModal()}
            {showStoneModal()}
        </section>
    );
};

export default AdminDashboard;
