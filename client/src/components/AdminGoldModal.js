import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createGolden } from '../redux/actions/goldActions';

const AdminGoldModal = () => {
    /****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { loading } = useSelector(state => state.loading);

    const dispatch = useDispatch();
    /****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
    const [golden, setGolden] = useState('');
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');

    /****************************
	 * EVENT HANDLERS
	 ***************************/
    const handleMessages = (_evt) => {
        dispatch(clearMessages());
    };

    const handleGoldenChange = (evt) => {
        dispatch(clearMessages());
        setGolden(evt.target.value);
    };

    const handleGoldenSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(golden)) {
            setClientSideErrorMsg("Todos Los Campos Son Obligatorios.");
        } else {
            const data = { golden };
            dispatch(createGolden(data));
            setGolden('');
        }
    };

    /****************************
	 * RENDERER
	 ***************************/
    return (
        <div id="addGoldModal" className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    <form onSubmit={handleGoldenSubmit}>
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
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addGold" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Nombre Color De Oro. *:
                                            </label>
                                            <input 
                                                type="text"
                                                name='golden'
                                                value={golden} 
                                                onChange={handleGoldenChange} 
                                                className="form-control"
                                                placeholder="Nombre Color De Oro."
                                            />
                                        </div>
                                    </div>
                                </div>
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