import React, { Fragment, useState, useEffect } from 'react';
import { createCategory, getCategories } from '../api/category';
import { createProduct } from '../api/category4';
import { createSize } from '../api/category1';
import { createGold } from '../api/category2';
import { createStone } from '../api/category3';
import isEmpty from 'validator/lib/isEmpty';
import { showErrorMsg, showSuccessMsg } from '../helpers/message';
import { showLoading } from '../helpers/loading';
import './AdminStyle.css';

const AdminDashboard = () => {
    const [categories, setCategories] = useState(null);
    const [category, setCategory] = useState('');
    const [size, setSize] = useState('');
    const [gold, setGold] = useState('');
    const [stone, setStone] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [loading, setLoading] = useState(false);
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
    /********************************************** 
     * LIFECYCLE METHODS ****************
    **********************************************/
    useEffect(() => {
        loadCategories();
    }, [loading]);

    const loadCategories = async () => {
        await getCategories()
            .then((response) => {
                setCategories(response.data.categories);
            })
            .catch((err) => {
                console.log(err);
            });
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
    /********************************************** 
     * EVENT HANDLERS
    **********************************************/
    const handleMessages = (_evt) => {
        setErrorMsg('');
        setSuccessMsg('');
    };

    const handleCategoryChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setCategory(evt.target.value);
    };
    const handleSizeChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setSize(evt.target.value);
    };
    const handleGoldChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setGold(evt.target.value);
    };
    const handleStoneChange = (evt) => {
        setErrorMsg('');
        setSuccessMsg('');
        setStone(evt.target.value);
    };

    const handleCategorySubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(category)) {
            setErrorMsg('Por favor Ingrese Una Categoría.'); 
        } else {
            const data = { category };

            setLoading(true);
            createCategory(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setCategory('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
    };
    const handleSizeSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(size)) {
            setErrorMsg('Por favor Ingrese Una Talla.'); 
        } else {
            const data = { size };

            setLoading(true);
            createSize(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setSize('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
    };
    const handleGoldSubmit = (evt) => {
        evt.preventDefault();

        if (isEmpty(gold)) {
            setErrorMsg('Por favor Ingrese El Color De Oro.'); 
        } else {
            const data = { gold };

            setLoading(true);
            createGold(data)
                .then((response) => {
                    setLoading(false);
                    setSuccessMsg(response.data.successMessage);
                    setGold('');
                })
                .catch((err) => {
                    setLoading(false);
                    setErrorMsg(err.response.data.errorMessage);
                });
        }
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
                setErrorMsg("Seleccione Una Imagen.");
        } else if (
            isEmpty(productName) || 
            isEmpty(productPreviousPrice) ||
            isEmpty(productActualPrice) ||
            isEmpty(productDesc)
        ) {
            setErrorMsg("Todos Los Campos Son Obligatorios.");
        } else if (isEmpty(productCategory)) {
            setErrorMsg("Por favor Seleccione Una Categoría.");
        } else if (isEmpty(productSize)) {
            setErrorMsg("Por favor Escriba El Talla.");
        } else if (isEmpty(productGold)) {
            setErrorMsg("Por favor Escriba Color De Oro.");
        } else if (isEmpty(productStone)) {
            setErrorMsg("Por favor Escriba Color De Piedra.");
        } else if (isEmpty(productQty)) {
            setErrorMsg("Seleccione Una Cantidad.");
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

            createProduct(formData)

            .then((response) => {
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
                })
                setSuccessMsg(response.data.successMessage)
            })
            .catch((err) => {
                console.log(err);
                setErrorMsg(err.response.data.errorMessage)
            });
        }
    };
    /********************************************** 
     * VIEWS
    **********************************************/
    const showHeader = () => (
        <div className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="fontFamilyH6">
                            <i className="fas fa-user-tie"></i> Panel De Administrador.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );

    const showActionBtns = () => (
        <div className="bg-light my-2">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-dark btn-block" data-toggle="modal" data-target="#addCategoryModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Categoría.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addSizeModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Talla.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-warning btn-block" data-toggle="modal" data-target="#addGoldModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Color De Oro.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-secondary btn-block" data-toggle="modal" data-target="#addStoneModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Color De Piedra.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-primary btn-block" data-toggle="modal" data-target="#addProductsModal">
                            <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Productos.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-success btn-block">
                            <i className="fas fa-eye"> 
                                {' '}
                                <h5 className="fontFamilyH6">Ver Pedidos.</h5> 
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    /********************************************** 
     * MODAL PLUGIN DEFINITIONS
    **********************************************/
    const showCategoryModal = () => (
        <div id="addCategoryModal" className="modal" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
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
    const showSizeModal = () => (
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
    const showGoldModal = () => (
        <div id="addGoldModal" className="modal" onClick={handleMessages}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
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
                            {errorMsg && showErrorMsg(errorMsg)}
                            {successMsg && showSuccessMsg(successMsg)}

                            {loading ? (
                                    <div className="text-center">
                                        {showLoading()}
                                    </div>
                                ) : (
                                    <Fragment>
                                        <label 
                                            htmlFor="addGold" 
                                            className="text-secondary">
                                                <i className="fas fa-plus-circle"></i> Añadir Color De Oro. *:
                                        </label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name='gold'
                                            value={gold}
                                            onChange={handleGoldChange} 
                                            placeholder="Añadir Color De Oro."
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
    const showStoneModal = () => (
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
    const showProductsModal = () => (
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
    /********************************************** 
     * RENDERING
    **********************************************/
    return (
        <section>
            {showHeader()}
            {showActionBtns()}
            {showCategoryModal()}
            {showSizeModal()}
            {showGoldModal()}
            {showStoneModal()}
            {showProductsModal()}
        </section>
    );
};

export default AdminDashboard;
