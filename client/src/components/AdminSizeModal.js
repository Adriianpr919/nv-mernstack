import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { createSize } from '../api/category1';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const AdminSizeModal = () => {
    const [size, setSize] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleMessages = (_evt) => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleSizeChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setSize(evt.target.value);
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

    return (
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
}

export default AdminSizeModal;