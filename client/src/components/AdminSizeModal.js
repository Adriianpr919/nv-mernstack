import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createSize } from '../redux/actions/sizeActions';

const AdminSizeModal = () => {
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { loading } = useSelector(state => state.loading);

    const dispatch = useDispatch();

    const [size, setSize] = useState('');
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');

    const handleMessages = (_evt) => {
        dispatch(clearMessages());
    };

    const handleSizeChange = (evt) => {
        dispatch(clearMessages());
        setSize(evt.target.value);
    };

    const handleSizeSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(size)) {
            setClientSideErrorMsg('Por favor Ingrese Una Talla.'); 
        } else {
            const data = { size };
            dispatch(createSize(data));
            setSize('');
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
                            {clientSideErrorMsg && 
                                    showErrorMsg(clientSideErrorMsg)}
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