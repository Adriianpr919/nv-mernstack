import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createStone } from '../redux/actions/storeActions';

const AdminStoneModal = () => {
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { loading } = useSelector(state => state.loading);

    const dispatch = useDispatch();

    const [stone, setStone] = useState('');
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');

    const handleMessages = (_evt) => {
        dispatch(clearMessages());
    };

    const handleStoneChange = (evt) => {
        dispatch(clearMessages());
        setStone(evt.target.value);
    };
    
    const handleStoneSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(stone)) {
            setClientSideErrorMsg('Por favor Ingrese El Color De Piedra.'); 
        } else {
            const data = { stone };
            dispatch(createStone(data));
            setStone('');
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