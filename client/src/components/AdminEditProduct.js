import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { getCategories } from '../redux/actions/categoryActions';

const AdminEditProduct = () => {
    /****************************
	 * PARAMS
	 ***************************/
	const { productId } = useParams();
	let navigate = useNavigate();

	/****************************
	 * REDUX GLOBAL STATE PROPERTIES
	 ***************************/
	const dispatch = useDispatch();
	const { product } = useSelector(state => state.products);
	const { categories } = useSelector(state => state.categories);

	/****************************
	 * COMPONENT STATE PROPERTIES
	 ***************************/
	const [productImage, setProductImage] = useState(null);
	const [productName, setProductName] = useState('');
	const [productDesc, setProductDesc] = useState('');
	const [productPrice, setProductPrice] = useState('');
	const [productCategory, setProductCategory] = useState('');
	const [productQty, setProductQty] = useState('');

	/****************************
	 * LIFECYCLE METHODS
	 ***************************/
	useEffect(() => {
		if (!product) {
			dispatch(getProduct(productId));
			dispatch(getCategories());
		} else {
			setProductImage(product.fileName);
			setProductName(product.productName);
			setProductDesc(product.productDesc);
			setProductPrice(product.productPrice);
			setProductCategory(product.productCategory);
			setProductQty(product.productQty);
		}
	}, [dispatch, productId, product]);

	/****************************
	 * EVENT HANDLERS
	 ***************************/
	const handleImageUpload = e => {
		const image = e.target.files[0];
		setProductImage(image);
	};

	const handleProductSubmit = async e => {
		e.preventDefault();

		const formData = new FormData();
		formData.append('productImage', productImage);
		formData.append('productName', productName);
		formData.append('productDesc', productDesc);
		formData.append('productPrice', productPrice);
		formData.append('productCategory', productCategory);
		formData.append('productQty', productQty);

		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};

		await axios
			.put(`/api/product/${productId}`, formData, config)
			.then(res => {
				navigate('/admin/dashboard');
			})
			.catch(err => {
				console.log(err);
			});
	};

	/****************************
	 * RENDERER
	 ***************************/
    return (
        <Fragment>
			<AdminHeader />
			<div className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<Link to='/admin/dashboard'>
							<span className='fas fa-arrow-circle-left'> Regresa</span>
						</Link>
						<div>
							<br />
							<div className='modal-content'>
								<form onSubmit={handleProductSubmit}>
									<div className='modal-header bg-primary text-white'>
										<h5 className='modal-title'>
                                            <i className='far fa-edit pr-1' style={{fontSize:"20px", color:"white"}} alt="Editar" title="Editar"></i> Editar Productos.
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>
											<label className='btn btn-dark mr-4'>
                                                <i className="fas fa-upload"></i> Cambiar Foto. *:
												<input
													type='file'
													name='productImage'
													accept='images/*'
													hidden
													onChange={handleImageUpload}
												/>
											</label>
											{productImage &&
											productImage.name ? (
												<span className='badge badge-secondary'>
													{productImage.name}
												</span>
											) : productImage ? (
												<img
													className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail'
													style={{
														maxWidth: '150px'
													}}
													src={`/uploads/${productImage}`}
													alt='Productos.'
                                                    title='Productos.'
												/>
											) : null}

											<div className='form-group'>
												<label className='text-secondary'>
                                                    <i className="far fa-edit pr-1"></i> Nombre Del Producto. *:
												</label>
												<input
													type='text'
													className='form-control'
													name='productName'
													value={productName}
													onChange={e =>
														setProductName(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
                                                    <i className="far fa-edit pr-1"></i> Descripción. *:
												</label>
												<textarea
													className='form-control'
													rows="10" cols="80"
													name='productDesc'
													value={productDesc}
													onChange={e =>
														setProductDesc(
															e.target.value
														)
													}
												></textarea>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
                                                    <i className="far fa-edit pr-1"></i> Precio. *:
												</label>
												<input
													type='text'
													className='form-control'
													name='productPrice'
													value={productPrice}
													onChange={e =>
														setProductPrice(
															e.target.value
														)
													}
												/>
											</div>
											<div className='form-row'>
												<div className='form-group col-md-6'>
													<label className='text-secondary'>
                                                        <i className="far fa-edit pr-1"></i> Cambiar Categorías. *:
													</label>
													<select
														className='custom-select mr-sm-2'
														name='productCategory'
														value={productCategory}
														onChange={e =>
															setProductCategory(
																e.target.value
															)
														}
													>
														<option value='' selected>
                                                            --- Abrir Este Menú De Selecciónar Categorías ---
														</option>
														{categories &&
															categories.map(
																c => (
																	<option
																		key={
																			c._id
																		}
																		value={
																			c._id
																		}
																	>
																		{
																			c.category
																		}
																	</option>
																)
															)}
													</select>
												</div>

												<div className='form-group col-md-6'>
													<label className='text-secondary'>
                                                        <i className="far fa-edit pr-1"></i> Cantidad. *:
													</label>
													<input
														type='number'
														className='form-control'
														min='0'
														max='9000'
														name='productQty'
														value={productQty}
														onChange={e =>
															setProductQty(
																e.target.value
															)
														}
													/>
												</div>
											</div>
										</Fragment>
									</div>
									<div className='modal-footer'>
										<button
											type='submit'
											className='btn btn-outline-success'
										>
											<i className="far fa-check-circle"></i> Actualizar Cambios
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
    );
};

export default AdminEditProduct;
