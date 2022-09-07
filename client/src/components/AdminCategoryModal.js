import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { createCategory } from '../api/category';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const AdminCategoryModal = () => {
    const [category, setCategory] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

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

    return (
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
};

export default AdminCategoryModal;