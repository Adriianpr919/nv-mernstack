import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { createStone } from '../api/category3';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';

const AdminStoneModal = () => {
    const [stone, setStone] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);

    const handleMessages = (_evt) => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleStoneChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setStone(evt.target.value);
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

    return (
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
};

export default AdminStoneModal;