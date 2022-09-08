import React, { Fragment, useState } from 'react';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
//Redux ***************************************************************
import { useSelector, useDispatch } from 'react-redux';
import { clearMessages } from '../redux/actions/messageActions';
import { createProduct } from '../redux/actions/productActions';

const AdminProductModal = () => {
    const { loading } = useSelector(state => state.loading);
    const { successMsg, errorMsg } = useSelector(state => state.messages);
    const { categories } = useSelector(state => state.categories);

    const dispatch = useDispatch();

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

    const handleProductImage1 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductImage2 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductImage3 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductImage4 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductImage5 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductImage6 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductImage7 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductImage8 = (evt) => {
        console.log(evt.target.files[0]);
        setProductData({
            ...productData,
            [evt.target.name]: evt.target.files[0],
        });
    };

    const handleProductSubmit = (evt) => {
        evt.preventDefault();

        if (
            productImage1, 
            productImage2, 
            productImage3, 
            productImage4, 
            productImage5, 
            productImage6, 
            productImage7, 
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

    /********************************************** 
     * TAGS 
    **********************************************/
    const [tags, setTags] = useState([])

    function handleKeyDown(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags([...tags, value])
        e.target.value = ''
    }

    function removeTag(index){
        setTags(tags.filter((el, i) => i !== index))
    }

    const [tags2, setTags2] = useState([])

    function handleKeyDown2(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags2([...tags2, value])
        e.target.value = ''
    }

    function removeTag2(index2){
        setTags2(tags2.filter((el, i) => i !== index2))
    }

    const [tags3, setTags3] = useState([])

    function handleKeyDown3(e){
        if(e.key !== 'Enter') return
        const value = e.target.value
        if(!value.trim()) return
        setTags3([...tags3, value])
        e.target.value = ''
    }

    function removeTag3(index3){
        setTags3(tags3.filter((el, i) => i !== index3))
    }

    return(
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
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addSize" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Selecciónar Talla. *:
                                            </label>
                                            <div className="tags-input-container">
                                                { tags.map((tag, index) => (
                                                    <div className="tag-item" key={index}>
                                                        <span className="text">{tag}</span>
                                                        <span className="close" onClick={() => removeTag(index)}>&times;</span>
                                                    </div>
                                                )) }
                                                <input 
                                                onKeyDown={handleKeyDown} 
                                                type="text" 
                                                name='productSize'
                                                value={productSize}
                                                onChange={handleProductChange}
                                                className="tags-input" 
                                                placeholder="Escribe Algo." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addGold" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Selecciónar Color De Oro. *:
                                            </label>
                                            <div className="tags-input-container">
                                                { tags2.map((tag2, index2) => (
                                                    <div className="tag-item" key={index2}>
                                                        <span className="text">{tag2}</span>
                                                        <span className="close" onClick={() => removeTag2(index2)}>&times;</span>
                                                    </div>
                                                )) }
                                                <input 
                                                onKeyDown={handleKeyDown2} 
                                                type="text" 
                                                name='productGold'
                                                value={productGold}
                                                onChange={handleProductChange}
                                                className="tags-input" 
                                                placeholder="Escribe Algo." />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12 mb-2">
                                            <label 
                                                htmlFor="addStone" 
                                                className="text-secondary">
                                                    <i className="fas fa-plus-circle"></i> Selecciónar Color De Piedra. *:
                                            </label>
                                            <div className="tags-input-container">
                                                { tags3.map((tag3, index3) => (
                                                    <div className="tag-item" key={index3}>
                                                        <span className="text">{tag3}</span>
                                                        <span className="close" onClick={() => removeTag3(index3)}>&times;</span>
                                                    </div>
                                                )) }
                                                <input 
                                                onKeyDown={handleKeyDown3} 
                                                type="text" 
                                                name='productStone'
                                                value={productStone}
                                                onChange={handleProductChange}
                                                className="tags-input" 
                                                placeholder="Escribe Algo." />
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
                                                    onChange={handleProductImage1} 
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
                                                    onChange={handleProductImage2} 
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
                                                    onChange={handleProductImage3} 
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
                                                    onChange={handleProductImage4} 
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
                                                    onChange={handleProductImage5} 
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
                                                    onChange={handleProductImage6} 
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
                                                    onChange={handleProductImage7} 
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
                                                    onChange={handleProductImage8} 
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