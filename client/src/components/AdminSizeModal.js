import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createSized } from '../redux/actions/sizedActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminSizeModal = () => {
    /****************************
     * REDUX GLOBAL STATE PROPERTIES
     ***************************/
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { loading } = useSelector(state => state.loading);

    const dispatch = useDispatch();
    /****************************
     * COMPONENT STATE PROPERTIES
     ***************************/
    const [sized, setSized] = useState('');
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');
    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleMessages = (_evt) => {
        dispatch(clearMessages());
    };

    const handleSizedChange = (evt) => {
        dispatch(clearMessages());
        setSized(evt.target.value);
    };

    const handleSizedSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(sized)) {
            setClientSideErrorMsg("Por favor Ingrese La Talla.");
        } else {
            const data = { sized };
            dispatch(createSized(data));
            setSized('');
        }
    };
    /****************************
     * RENDERER
     ***************************/
    return (
        <div id="addSizeModal" className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    <form onSubmit={handleSizedSubmit}>
                        <div className="modal-header bg-info">
                            <h5 className="modal-title">
                                <i className="fas fa-plus-circle"></i> A??adir Talla.
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
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" /> IMPORTANTE *:
                                            </div>
                                            <div className="panel-body">
                                                <fieldset className="col-12 mb-2 border border-secondary">
                                                    <legend>
                                                        POR FAVOR TIENES QUE ESCRIBIR ASI
                                                        <span>
                                                            <b>
                                                                <code>
                                                                    "Con Mayuscula."
                                                                </code>
                                                            </b>
                                                        </span>
                                                    </legend>
                                                    <div className="panel panel-default">
                                                        <div className="panel-body">
                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addSize"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-plus-circle"></i> A??adir Talla. *:
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        name='sized'
                                                                        value={sized}
                                                                        onChange={handleSizedChange}
                                                                        className="form-control"
                                                                        placeholder="A??adir Talla."
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
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

export default AdminSizeModal;