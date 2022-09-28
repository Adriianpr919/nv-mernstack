import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Products = () => {
    const navigate = useNavigate();
	const { productId } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(productId));
	}, [dispatch, productId]);

	const { product } = useSelector(state => state.products);

    const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

    const handleGoBackBtn = () => {
		navigate(-1);
	};

    return (
        <section className='product-page m-4'>
            <button
				to='/shop'
				className='btn btn-outline-primary mb-4'
				onClick={handleGoBackBtn}
			>
				<i className='fas fa-arrow-circle-left'></i> Regresa
			</button>
            {product && (
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4'
                            src={`/uploads/${product.fileName}`}
                            style={{maxWidth: "450px"}}
                            alt='Productos.'
                            title='Productos.'
                        />
                    </div>
                    <div className='col-md-5'>
                        <h3 className='mb-4'>{product.productName}</h3>
                        <p className='text-muted border-top py-2'>
                            Precio *: &#36;{' '}
                            {product.productPrice.toLocaleString('es-ES', {
                                style: 'currency',
                                currency: 'COP',
                            })}
                        </p>
                        <p className='text-muted border-top py-2'>
                            Estado *:{' '}
                            {product.productQty <= 0
                                ? 'Agotado.'
                                : 'En Stock.'}
                        </p>
                        <p className='text-muted border-top py-2'>
                            Talla *: <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect01">Talla *:</label>
                                        </div>
                                        <select class="custom-select" id="inputGroupSelect01">
                                            <option value="" selected>--- Selecciónar Talla ---</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>

                        </p>
                        <p className='text-muted border-top py-2'>
                            Color De Oro *: <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect02">Color De Oro *:</label>
                                        </div>
                                        <select class="custom-select" id="inputGroupSelect02">
                                            <option value="" selected>--- Selecciónar Color De Oro ---</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                        </p>
                        <p className='text-muted border-top py-2'>
                            Color De Piedra *: <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                            <label class="input-group-text" for="inputGroupSelect03">Color De Piedra *:</label>
                                        </div>
                                        <select class="custom-select" id="inputGroupSelect03">
                                            <option value="" selected>--- Selecciónar Color De Piedra ---</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                        </select>
                                    </div>
                        </p>
                        <p className='text-muted border-top py-2'>
                            Descripción *: {product.productDesc}
                        </p>
                        <button
                            className='btn btn-outline-dark btn-large btn-block mb-5 py-2'
                            disabled={product.productQty <= 0}
                            onClick={handleAddToCart}
                        >
                            <i className="fas fa-cart-plus"></i> Añadir Al Carrito.
                        </button>
                    </div>
                </div>
            )}
        </section>    
    );
};

export default Products;