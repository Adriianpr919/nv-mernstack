import React, { useState, useEffect, Fragment, useRef } from 'react';
import axios from 'axios';
import AdminHeader from './AdminHeader';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { getCategories } from '../redux/actions/categoryActions';
import './AdminEditProduct.css';

const AdminEditProduct = () => {
    /****************************
	 * PARAMS
	 ***************************/
	const { productId } = useParams();
	let navigate = useNavigate();

	const data=useRef();

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

		console.log(data.current.value,"initial value");
        localStorage.setItem("inputValue",data.current.value);
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
		
		console.log(data.current.value,"initial value");
		localStorage.setItem("inputValue",data.current.value);
	};

	console.log(localStorage.getItem("inputValue"),"****");

	/****************************
	 * RENDERER
	 ***************************/
    return (
        <Fragment>
			<AdminHeader />
			<div className='container my-3'>
				<div className='row'>
					<div className='col-md-8 mx-auto'>
						<div className='jumbotron'>
							<Link to='/admin/dashboard' className='btn btn-outline-primary mb-4'>
								<span className='fas fa-arrow-circle-left'> Regresa</span>
							</Link>
						</div>
						<div>
							<div className='modal-content'>
								<form onSubmit={handleProductSubmit}>
									<div className='modal-header bg-primary text-white'>
										<h5 className='modal-title'>
                                            <i className='far fa-edit pr-1' style={{fontSize:"20px", color:"white"}} alt="Editar" title="Editar"></i> Editar Productos.
										</h5>
									</div>
									<div className='modal-body my-2'>
										<Fragment>
											<div className="panel panel-default">
        
												<div className="panel-heading">
													<i class='fas fa-camera-retro'></i> IMPORTANTE *:
												</div>
												<div className="panel-body">
													<fieldset className="col-12 mb-2 border border-secondary"> 
														
														<legend>
															POR FAVOR TIENES QUE PONER ASI <span><b><code>".png"</code></b></span> Sin Mayuscula.
														</legend>
														
														<div className="panel panel-default">
															<div className="panel-body">
																<p>
																	<div className="col-12 mb-2">
																		{/* FOTO */}
																		<label className='btn btn-dark mr-4'>
																			<i className="fas fa-upload"></i> Cambiar Foto. *:
																			<input
																				type='file'
																				ref={data}
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
																					maxWidth: '100px'
																				}}
																				src={`/uploads/${productImage}`}
																				alt='Productos.'
																				title='Productos.'
																			/>
																		) : null}
																	</div>
																	
																	<div className="col-12 mb-2">
																		{/* FOTO 2 */}
																		FOTO 2
																	</div>
																	
																	
																	<div className="col-12 mb-2">
																		{/* FOTO 3 */}
																		FOTO 3 
																	</div>
																	
																	
																	<div className="col-12 mb-2">
																		{/* FOTO 4 */}
																		FOTO 4
																	</div>
																	
																	
																	<div className="col-12 mb-2">
																		{/* FOTO 5 */}
																		FOTO 5
																	</div>
																	
																	
																	<div className="col-12 mb-2">
																		{/* FOTO 6 */}
																		FOTO 6
																	</div>
																	
																	
																	<div className="col-12 mb-2">
																		{/* FOTO 7 */}
																		FOTO 7
																	</div>
																	
																	
																	<div className="col-12 mb-2">
																		{/* FOTO 8 */}
																		FOTO 8
																	</div>
																	
																</p>
															</div>
														</div>
														
													</fieldset>             
												</div>
															
											</div>

											<div className='form-group'>
												<label className='text-secondary'>
                                                    <i className="far fa-edit pr-1"></i> Cambiar Nombre Del Producto. *:
												</label>
												<input
													type='text'
													ref={data}
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
                                                    <i className="far fa-edit pr-1"></i> Cambiar Descripción. *:
												</label>
												<textarea
													ref={data}
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
                                                    <i className="far fa-edit pr-1"></i> Cambiar Precio. *:
												</label>
												<input
													type='text'
													ref={data}
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
											<div className='form-group'>
												<label className='text-secondary'>
													<i className="far fa-edit pr-1"></i> Cambiar Categorías. *:
												</label>
												<select
													ref={data}
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
											<div className='form-group'>
												<fieldset className='border border-secondary'>
													<legend>
														<i class='fas fa-edit'></i> Cambiar Opciones. *:
													</legend>
													<div className="form-row align-items-center">
														<div className="col-12 mb-2">
															{/* TALLA */}
															TALLA TAGS
														</div>

														<div className="col-12 mb-2">
															{/* ORO */}
															ORO TAGS
														</div>

														<div className="col-12 mb-2">
															{/* PIEDRA */}
															PIEDRA TAGS
														</div>

														<div className="col-12 mb-2">
															<div className="form-check">
																<input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="" />
																<label className="form-check-label" htmlFor="gridRadios1">
																	<i class='far fa-eye-slash' style={{color: "red"}}></i> DesActivar.
																</label>
															</div>
															<div className="form-check">
																<input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="" />
																<label className="form-check-label" htmlFor="gridRadios2">
																	<i class='far fa-eye' style={{color: "green"}}></i> Activar.
																</label>
															</div>
														</div>
													</div>
												</fieldset>
											</div>
											<div className='form-group'>
												<label className='text-secondary'>
													<i className="far fa-edit pr-1"></i> Cambiar Cantidad. *:
												</label>
												<input
													type='number'
													ref={data}
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
