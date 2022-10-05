import React, { Fragment, useState, useRef } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createGold } from '../redux/actions/goldActions';

const AdminGoldModal = () => {
    /****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
    const { loading } = useSelector(state => state.loading);
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { categories } = useSelector(state => state.categories);

    const data=useRef();

    const dispatch = useDispatch();
    /****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
    const [clientSideError, setClientSideError] = useState('');
    const [goldData, setGoldData] = useState({
        productImage: null,
        productName: '',
        productCategory: '',
    });
    const {
        productImage,
        productName,
        productCategory,
    } = goldData;

    /****************************
	 * EVENT HANDLERS
	 ***************************/
    const handleMessages = (_evt) => {
        dispatch(clearMessages());
        setClientSideError('');

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };

    const handleGoldChange = (evt) => {
        setGoldData({
            ...goldData,
            [evt.target.name]: evt.target.value,
        });

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };

    const handleGoldImage = (evt) => {
        console.log(evt.target.files[0]);
        setGoldData({
            ...goldData,
            [evt.target.name]: evt.target.files[0],
        });

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };

    const handleGoldSubmit = (evt) => {
        evt.preventDefault();

        if (productImage === null) {
            setClientSideError("Seleccione Una Imagen Con .png");
        } else if (isEmpty(productName)) {
            setClientSideError("Todos Los Campos Son Obligatorios.");
        } else if (isEmpty(productCategory)) {
            setClientSideError("Por favor Seleccione Una Categoría.");
        } else {
            let formData = new FormData();

            formData.append('productImage', productImage);
            formData.append('productName', productName);
            formData.append('productCategory', productCategory);

            dispatch(createGold(formData));
            setGoldData({
                productImage: null,
                productName: '',
                productCategory: '',
            });
        }

        console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
    };

    console.log(localStorage.getItem("inputValue"),"****");

    /****************************
	 * RENDERER
	 ***************************/
    return (
        <div id="addGoldModal" className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
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
                        {clientSideError && 
                            showErrorMsg(clientSideError)}
                        {errorMsg && showErrorMsg(errorMsg)}
                        {successMsg && showSuccessMsg(successMsg)}

                        {loading ? (
                            <div className="text-center">
                                {showLoading()}
                            </div>
                        ) : (
                            <Fragment>
                                <div className="container">
                                <div class="panel panel-default">
                                        <div className="panel-heading">
                                            <i class='fas fa-camera-retro'></i> IMPORTANTE *:
                                        </div>
                                        <div className="panel-body">
                                            <fieldset className="col-12 mb-2 border border-secondary">    	
                                                <legend>POR FAVOR TIENES QUE PONER ASI <span><b><code>".png"</code></b></span> Sin Mayuscula.</legend>
                                                
                                                <div className="panel panel-default">
                                                    <div className="panel-body">
                                                        <p>
                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label 
                                                                        htmlFor="addFile" 
                                                                        className="text-secondary">
                                                                            <i className="fas fa-upload"></i> Foto C. De Oro. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input 
                                                                            type="file"
                                                                            ref={data}
                                                                            name='productImage'
                                                                            onChange={handleGoldImage} 
                                                                            className="custom-file-input" 
                                                                            id="customFileLang" 
                                                                            aria-describedby="customFileLang" 
                                                                            data-browse="Elegir" 
                                                                            lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto C. De Oro. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </p>
                                                    </div>
                                                </div>
                                                
                                            </fieldset>				
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addGold" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Nombre Color De Oro. *:
                                            </label>
                                            <input 
                                                type="text"
                                                ref={data}
                                                name='productName'
                                                value={productName} 
                                                onChange={handleGoldChange} 
                                                className="form-control"
                                                placeholder="Nombre Color De Oro."
                                            />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                        <label 
                                            htmlFor="addCategory" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Selecciónar Categorías. *:
                                        </label>
                                        <select 
                                        ref={data}
                                        name='productCategory'
                                        onChange={handleGoldChange}
                                        className="custom-select mr-sm-2" 
                                        aria-label="Selecciónar Categorías.">
                                            <option value="" selected>--- Abrir Este Menú De Selecciónar Categorías ---</option>
                                            {categories &&
												categories.map((c) => (
                                                <option
                                                key={c._id} 
                                                value={c._id}>
                                                    {c.category}
                                                </option> 
                                            ))}
                                        </select>
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