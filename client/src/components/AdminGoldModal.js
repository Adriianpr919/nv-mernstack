import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { createGold } from '../api/category2';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const AdminGoldModal = () => {
    const [gold, setGold] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleMessages = (_evt) => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleGoldChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setGold(evt.target.value);
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
    
    return (
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
};

export default AdminGoldModal;