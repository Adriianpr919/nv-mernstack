import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createProduct } from '../redux/actions/productActions';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const AdminProductModal = () => {
    /****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
    const { loading } = useSelector(state => state.loading);
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { categories } = useSelector(state => state.categories);
    const { categoriesSize } = useSelector(state => state.categoriesSize);
    const { categoriesGold } = useSelector(state => state.categoriesGold);
    const { categoriesStone } = useSelector(state => state.categoriesStone);

    const animatedComponents = makeAnimated();
    const SizeOptions = [
        { value: "producto 01", label: "Producto 01" },
        { value: "producto 02", label: "Producto 02" },
        { value: "producto 03", label: "Producto 03" },
    ];
    const GoldOptions = [
        { value: "producto 01", label: "Producto 01" },
        { value: "producto 02", label: "Producto 02" },
        { value: "producto 03", label: "Producto 03" },
    ];
    const StoneOptions = [
        { value: "producto 01", label: "Producto 01" },
        { value: "producto 02", label: "Producto 02" },
        { value: "producto 03", label: "Producto 03" },
    ];

    const dispatch = useDispatch();
    /****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
    const [clientSideError, setClientSideError] = useState('');
    const [productData, setProductData] = useState({
        productName: '',
        productCategory: '',
        productSize: '',
        productGold: '',
        productStone: '',
        productPreviousPrice: '',
        productActualPrice: '',
        productQty: '',
        productDesc: '',
        productImage1: null,
        productImage2: null,
        productImage3: null,
        productImage4: null,
        productImage5: null,
        productImage6: null,
        productImage7: null,
        productImage8: null,
    });
    const {
        productName,
        productCategory,
        productSize,
        productGold,
        productStone,
        productPreviousPrice,
        productActualPrice,
        productQty,
        productDesc,
        productImage1,
        productImage2,
        productImage3,
        productImage4,
        productImage5,
        productImage6,
        productImage7,
        productImage8,
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

    const handleProductImage = (evt, valor) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        if (
            productImage1 === null || 
            productImage2 === null ||
            productImage3 === null ||
            productImage4 === null || 
            productImage5 === null || 
            productImage6 === null || 
            productImage7 === null || 
            productImage8 === null) {
                setClientSideError("Seleccione Una Imagen.");
        } else if (
            isEmpty(productName) || 
            isEmpty(productPreviousPrice) ||
            isEmpty(productActualPrice) ||
            isEmpty(productDesc)
        ) {
            setClientSideError("Todos Los Campos Son Obligatorios.");
        } else if (isEmpty(productCategory)) {
            setClientSideError("Por favor Seleccione Una Categoría.");
        } else if (isEmpty(productSize)) {
            setClientSideError("Por favor Escriba El Talla.");
        } else if (isEmpty(productGold)) {
            setClientSideError("Por favor Escriba Color De Oro.");
        } else if (isEmpty(productStone)) {
            setClientSideError("Por favor Escriba Color De Piedra.");
        } else if (isEmpty(productQty)) {
            setClientSideError("Seleccione Una Cantidad.");
        } else {
            let formData = new FormData();

            formData.append('productName', productName);
            formData.append('productCategory', productCategory);
            formData.append('productSize', productSize);
            formData.append('productGold', productGold);
            formData.append('productStone', productStone);
            formData.append('productPreviousPrice', productPreviousPrice);
            formData.append('productActualPrice', productActualPrice);
            formData.append('productQty', productQty);
            formData.append('productDesc', productDesc);
            formData.append('productImage1', productImage1);
            formData.append('productImage2', productImage2);
            formData.append('productImage3', productImage3);
            formData.append('productImage4', productImage4);
            formData.append('productImage5', productImage5);
            formData.append('productImage6', productImage6);
            formData.append('productImage7', productImage7);
            formData.append('productImage8', productImage8);

            dispatch(createProduct(formData));
            setProductData({
                productName: '',
                productCategory: '',
                productSize: '',
                productGold: '',
                productStone: '',
                productPreviousPrice: '',
                productActualPrice: '',
                productQty: '',
                productDesc: '',
                productImage1: null,
                productImage2: null,
                productImage3: null,
                productImage4: null,
                productImage5: null,
                productImage6: null,
                productImage7: null,
                productImage8: null,
            });
        }
    };

    /****************************
	 * RENDERER
	 ***************************/
    return (
        <div id="addProductsModal" className="modal" onClick={handleMessages}>
        <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
                <form onSubmit={handleProductSubmit}>
                    <div className="modal-header bg-primary text-white">
                        <h5 className="modal-title">
                            <i className="fas fa-plus-circle"></i> Añadir Productos.
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
                                            htmlFor="addCategory" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Selecciónar Categorías. *:
                                        </label>
                                        <select 
                                        name='productCategory'
                                        onChange={handleProductChange}
                                        className="custom-select mr-sm-2" 
                                        aria-label="Selecciónar Categorías.">
                                            <option value="" selected>--- Abrir Este Menú De Selecciónar Categorías ---</option>
                                            {
                                                categories?.map((c) => (
                                                <option
                                                key={c._id} 
                                                value={c._id}>
                                                    {c.category}
                                                </option>
                                            ))}
                                        </select>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="id_label_multiple" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Escribe Algo De Talla. *:
                                            </label>
                                            <div className="tags-input-container">
                                                {
                                                    categoriesSize?.map((c) => (
                                                    <Select
                                                    className="SizeSelect"
                                                    name='productSize'
                                                    onChange={handleProductChange}
                                                    isClearable={true}
                                                    isSearchable={true}
                                                    isDisabled={false}
                                                    isLoading={false}
                                                    isRtl={false}
                                                    closeMenuOnSelect={false}
                                                    components={animatedComponents}
                                                    isMulti
                                                    options={SizeOptions}
                                                    key={c._id} 
                                                    value={c._id}
                                                    placeholder="Escribe Algo."
                                                    />//{c.size}*********falta mostrar los datos*************
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addGold" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Escribe Algo De Color De Oro. *:
                                            </label>
                                            <div className="tags-input-container">
                                            {
                                                categoriesGold?.map((c) => (
                                                <Select
                                                className="GoldSelect"
                                                name='productGold'
                                                onChange={handleProductChange}
                                                isClearable={true}
                                                isSearchable={true}
                                                isDisabled={false}
                                                isLoading={false}
                                                isRtl={false}
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                isMulti
                                                options={GoldOptions}
                                                key={c._id} 
                                                value={c._id}
                                                placeholder="Escribe Algo."
                                                />//{c.gold}*********falta mostrar los datos*************
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addStone" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Escribe Algo De Color De Piedra. *:
                                            </label>
                                            <div className="tags-input-container">
                                            {
                                                categoriesStone?.map((c) => (
                                                <Select
                                                className="StoneSelect"
                                                name='productStone'
                                                onChange={handleProductChange}
                                                isClearable={true}
                                                isSearchable={true}
                                                isDisabled={false}
                                                isLoading={false}
                                                isRtl={false}
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                isMulti
                                                options={StoneOptions}
                                                key={c._id} 
                                                value={c._id}
                                                placeholder="Escribe Algo."
                                                />//{c.stone}*********falta mostrar los datos*************
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                        <label 
                                            htmlFor="addPreviousPrice" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Precio Anterior. *:
                                        </label>
                                        <input 
                                            type="text"
                                            name='productPreviousPrice'
                                            value={productPreviousPrice} 
                                            onChange={handleProductChange}
                                            className="form-control"
                                            placeholder="Precio Anterior."
                                        />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                        <label 
                                            htmlFor="addActualPrice" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Precio Actual. *:
                                        </label>
                                        <input 
                                            type="text"
                                            name='productActualPrice'
                                            value={productActualPrice} 
                                            onChange={handleProductChange}
                                            className="form-control"
                                            placeholder="Precio Actual."
                                        />
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
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                        <label 
                                            htmlFor="addDescription" 
                                            className="text-secondary">
                                                <i className="fas fa-info-circle"></i> Descripción. *:
                                        </label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="fas fa-info-circle"></i> Descripción. *:
                                                </span>
                                            </div>
                                            <textarea 
                                            name='productDesc'
                                            value={productDesc}
                                            onChange={handleProductChange}
                                            className="form-control"
                                            rows="10" cols="80" 
                                            aria-label="Descripción." 
                                            placeholder="Descripción." />
                                        </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 1. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file"
                                                    name='productImage1'
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 1. *:
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 2. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file" 
                                                    name='productImage2'
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 2. *:
                                                    </label>
                                                </div>
                                            </div>            
                                        </div>
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 3. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file" 
                                                    name='productImage3'
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 3. *:
                                                    </label>
                                                </div>
                                            </div>            
                                        </div>
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 4. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file" 
                                                    name='productImage4'
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 4. *:
                                                    </label>
                                                </div>
                                            </div>            
                                        </div>
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 5. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file" 
                                                    name='productImage5'
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 5. *:
                                                    </label>
                                                </div>
                                            </div>            
                                        </div>
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 6. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file" 
                                                    name='productImage6'
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 6. *:
                                                    </label>
                                                </div>
                                            </div>            
                                        </div>
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 7. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file" 
                                                    name='productImage7'
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 7. *:
                                                    </label>
                                                </div>
                                            </div>            
                                        </div>
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addFile" 
                                                className="text-secondary">
                                                    <i className="fas fa-upload"></i> Fotos 8. *:
                                            </label>
                                            <div className="input-group mb-3">
                                                <div className="input-group-prepend">
                                                    <span className="input-group-text" id="customFileLang">Subir.</span>
                                                </div>
                                                <div className="custom-file">
                                                    <input 
                                                    type="file"
                                                    name='productImage8' 
                                                    onChange={handleProductImage} 
                                                    className="custom-file-input" 
                                                    id="customFileLang" 
                                                    aria-describedby="customFileLang" 
                                                    data-browse="Elegir" 
                                                    lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang" data-browse="Elegir">
                                                        <i className="fas fa-upload"></i> Fotos 8. *:
                                                    </label>
                                                </div>
                                            </div>            
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