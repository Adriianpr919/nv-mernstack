import React, { Fragment, useState, useRef } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createCategory } from '../redux/actions/categoryActions';

const AdminCategoryModal = () => {
    /****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { loading } = useSelector(state => state.loading);

    const data=useRef();

    const dispatch = useDispatch();
    /****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
    const [category, setCategory] = useState('');
    const [clientSideErrorMsg, setClientSideErrorMsg] = useState('');

    /****************************
	 * EVENT HANDLERS
	 ***************************/
    const handleMessages = (_evt) => {
        dispatch(clearMessages());

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };

    const handleCategoryChange = (evt) => {
        dispatch(clearMessages());
        setCategory(evt.target.value);

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(category)) {
            setClientSideErrorMsg('Por favor Ingrese Una Categoría.'); 
        } else {
            const data = { category };
            dispatch(createCategory(data));
            setCategory('');
        }

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };

    console.log(localStorage.getItem("inputValue"),"****");
    
    /****************************
	 * RENDERER
	 ***************************/
    return (
        <div id="addCategoryModal" className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
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
                                            htmlFor="addCategory" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Añadir Categoría. *:
                                        </label>
                                        <input 
                                            type="text" 
                                            ref={data}
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