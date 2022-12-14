import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createProduct } from '../redux/actions/productActions';
import './AdminProductModal.css';

import Select from "react-select";
import makeAnimated from "react-select/animated";

const AdminProductModal = () => {
    /****************************
     * REDUX GLOBAL STATE PROPERTIES
     ***************************/
    const { loading } = useSelector(state => state.loading);
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { categories } = useSelector(state => state.categories);

    const animatedComponents = makeAnimated();
    const options1 = [
        { value: "produto 01", label: "Produto 01" },
        { value: "produto 02", label: "Produto 02" },
        { value: "produto 03", label: "Produto 03" },
        { value: "produto 04", label: "Produto 04" },
        { value: "produto 05", label: "Produto 05" },
        { value: "produto 06", label: "Produto 06" },
        { value: "produto 07", label: "Produto 07" },
        { value: "produto 08", label: "Produto 08" },
    ];

    const options2 = [
        { value: "produto 01", label: "Produto 01" },
        { value: "produto 02", label: "Produto 02" },
        { value: "produto 03", label: "Produto 03" },
        { value: "produto 04", label: "Produto 04" },
        { value: "produto 05", label: "Produto 05" },
        { value: "produto 06", label: "Produto 06" },
        { value: "produto 07", label: "Produto 07" },
        { value: "produto 08", label: "Produto 08" },
    ];

    const options3 = [
        { value: "produto 01", label: "Produto 01" },
        { value: "produto 02", label: "Produto 02" },
        { value: "produto 03", label: "Produto 03" },
        { value: "produto 04", label: "Produto 04" },
        { value: "produto 05", label: "Produto 05" },
        { value: "produto 06", label: "Produto 06" },
        { value: "produto 07", label: "Produto 07" },
        { value: "produto 08", label: "Produto 08" },
    ];

    const dispatch = useDispatch();
    /****************************
     * COMPONENT STATE PROPERTIES
     ***************************/
    const [clientSideError, setClientSideError] = useState('');
    const [productData, setProductData] = useState({
        productImage: null,
        productName: '',
        productDesc: '',
        productPrice: '',
        productCategory: '',
        productQty: '',
    });
    const {
        productImage,
        productName,
        productDesc,
        productPrice,
        productCategory,
        productQty,
    } = productData;
    /****************************
     * EVENT HANDLERS
     ***************************/
    const handleMessages = (_evt) => {
        dispatch(clearMessages());
        setClientSideError('');
    };

    const handleProductChange = (evt) => {
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.value,
        });
    };

    const handleProductImage = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        if (productImage === null) {
            setClientSideError("Seleccionar Una Imagen Con .png");
        } else if (
            isEmpty(productName) ||
            isEmpty(productDesc) ||
            isEmpty(productPrice)
        ) {
            setClientSideError("Todos Los Campos Son Obligatorios.");
        } else if (isEmpty(productCategory)) {
            setClientSideError("Por favor Seleccionar Una Categor??a.");
        } else if (isEmpty(productQty)) {
            setClientSideError("Seleccionar Una Cantidad.");
        } else {
            let formData = new FormData();

            formData.append('productImage', productImage);
            formData.append('productName', productName);
            formData.append('productDesc', productDesc);
            formData.append('productPrice', productPrice);
            formData.append('productCategory', productCategory);
            formData.append('productQty', productQty);

            dispatch(createProduct(formData));
            setProductData({
                productImage: null,
                productName: '',
                productDesc: '',
                productPrice: '',
                productCategory: '',
                productQty: '',
            });
        }
    };
    /****************************
     * RENDERER
     ***************************/
    return (
        <div id="addProductsModal" className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    <form onSubmit={handleProductSubmit}>
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">
                                <i className="fas fa-plus-circle"></i> A??adir Productos.
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
                                        <div className="panel panel-default">
                                            <div className="panel-heading">
                                                <i className='fas fa-camera-retro'></i> IMPORTANTE *:
                                            </div>
                                            <div className="panel-body">
                                                <fieldset className="col-12 mb-2 border border-secondary">
                                                    <legend>POR FAVOR TIENES QUE PONER ASI <span><b><code>".png"</code></b></span> Sin Mayuscula.</legend>

                                                    <div className="panel panel-default">
                                                        <div className="panel-body">
                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                name='productImage'
                                                                                onChange={handleProductImage}
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile2"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto 2. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto 2. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile3"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto 3. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto 3. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile4"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto 4. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto 4. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile5"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto 5. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto 5. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile6"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto 6. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto 6. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile7"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto 7. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto 7. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="row">
                                                                <div className="col-12 mb-2">
                                                                    <label
                                                                        htmlFor="addFile8"
                                                                        className="text-secondary">
                                                                        <i className="fas fa-upload"></i> Foto 8. *:
                                                                    </label>
                                                                    <div className="input-group mb-3">
                                                                        <div className="input-group-prepend">
                                                                            <span className="input-group-text" id="customFileLang">Subir.</span>
                                                                        </div>
                                                                        <div className="custom-file">
                                                                            <input
                                                                                type="file"
                                                                                className="custom-file-input"
                                                                                id="customFileLang"
                                                                                aria-describedby="customFileLang"
                                                                                data-browse="Elegir"
                                                                                lang="es" />
                                                                            <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                                                <i className="fas fa-upload"></i> Foto 8. *:
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>

                                                </fieldset>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <label
                                                    htmlFor="addProducts"
                                                    className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Nombre Del Producto. *:
                                                </label>
                                                <input
                                                    type="text"
                                                    name='productName'
                                                    value={productName}
                                                    onChange={handleProductChange}
                                                    className="form-control"
                                                    placeholder="Nombre Del Producto."
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <label
                                                    htmlFor="addDescription"
                                                    className="text-secondary">
                                                    <i className="fas fa-info-circle"></i> Descripci??n. *:
                                                </label>
                                                <div className="input-group">
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fas fa-info-circle"></i> Descripci??n. *:
                                                        </span>
                                                    </div>
                                                    <textarea
                                                        name='productDesc'
                                                        value={productDesc}
                                                        onChange={handleProductChange}
                                                        className="form-control"
                                                        rows="10" cols="80"
                                                        aria-label="Descripci??n."
                                                        placeholder="Descripci??n."></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <label
                                                    htmlFor="addPrice"
                                                    className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Precio. *:
                                                </label>
                                                <input
                                                    type="text"
                                                    name='productPrice'
                                                    value={productPrice}
                                                    onChange={handleProductChange}
                                                    className="form-control"
                                                    placeholder="Precio."
                                                />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <label
                                                    htmlFor="addCategory"
                                                    className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Selecci??nar Categor??as. *:
                                                </label>
                                                <select
                                                    name='productCategory'
                                                    onChange={handleProductChange}
                                                    className="custom-select mr-sm-2"
                                                    aria-label="Selecci??nar Categor??as.">
                                                    <option value="" selected>--- Abrir Este Men?? De Selecci??nar Categor??as ---</option>
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
                                        <div className='row'>
                                            <div className='col-12 mb-2'>
                                                <fieldset className='border border-secondary'>
                                                    <legend>
                                                        <i className='fas fa-edit'></i> Opci&oacute;n 1. *:
                                                    </legend>
                                                    <div className="form-row align-items-center">
                                                        <div className="col-12 mb-2">
                                                            {/* TALLA */}
                                                            TALLA TAGS. *:
                                                            <Select
                                                                defaultValue={[options1[0], options1[2]]}
                                                                components={animatedComponents}
                                                                isMulti
                                                                options={options1}
                                                                className="select"
                                                                isClearable={true}
                                                                isSearchable={true}
                                                                isDisabled={false}
                                                                isLoading={false}
                                                                isRtl={false}
                                                                closeMenuOnSelect={false}
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-2">
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="" />
                                                                <label className="form-check-label" htmlFor="gridRadios1">
                                                                    <i className='far fa-eye-slash' style={{ color: "red" }}></i> DesActivar.
                                                                </label>
                                                            </div>
                                                            <div className="form-check">
                                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="" />
                                                                <label className="form-check-label" htmlFor="gridRadios2">
                                                                    <i className='far fa-eye' style={{ color: "green" }}></i> Activar.
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-12 mb-2'>
                                                <fieldset className='border border-secondary'>
                                                    <legend>
                                                        <i className='fas fa-edit'></i> Opci&oacute;n 2. *:
                                                    </legend>
                                                    <div className="form-row align-items-center">
                                                        <div className="col-12 mb-2">
                                                            {/* ORO */}
                                                            ORO TAGS. *:
                                                            <Select
                                                                defaultValue={[options2[0], options2[2]]}
                                                                components={animatedComponents}
                                                                isMulti
                                                                options={options2}
                                                                className="select"
                                                                isClearable={true}
                                                                isSearchable={true}
                                                                isDisabled={false}
                                                                isLoading={false}
                                                                isRtl={false}
                                                                closeMenuOnSelect={false}
                                                            />
                                                        </div>
                                                        <div className="col-12 mb-2">
                                                            {/* PIEDRA */}
                                                            PIEDRA TAGS. *:
                                                            <Select
                                                                defaultValue={[options3[0], options3[2]]}
                                                                components={animatedComponents}
                                                                isMulti
                                                                options={options3}
                                                                className="select"
                                                                isClearable={true}
                                                                isSearchable={true}
                                                                isDisabled={false}
                                                                isLoading={false}
                                                                isRtl={false}
                                                                closeMenuOnSelect={false}
                                                            />
                                                        </div>
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 mb-2">
                                                <label
                                                    htmlFor="addQuantity"
                                                    className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Cantidad. *:
                                                </label>
                                                <input
                                                    type="number"
                                                    name='productQty'
                                                    value={productQty}
                                                    onChange={handleProductChange}
                                                    min="0"
                                                    max="9000"
                                                    className="form-control"
                                                    placeholder="Cantidad."
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

export default AdminProductModal;