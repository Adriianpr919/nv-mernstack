import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ADD_TO_CART } from '../redux/constants/cartConstants';
import { deleteFromCart } from '../redux/actions/cartActions';
import { isAuthenticated } from '../helpers/auth';

const Cart = () => {
    let navigate = useNavigate();
    const { cart } = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const handleGoBackBtn = () => {
		navigate(-1);
	};

    const handleQtyChange = (e, product) => {
		const cart = localStorage.getItem('cart')
			? JSON.parse(localStorage.getItem('cart'))
			: [];

		cart.forEach(cartItem => {
			if (cartItem._id === product._id) {
				cartItem.count = e.target.value;
			}
		});

		localStorage.setItem('cart', JSON.stringify(cart));

		dispatch({
			type: ADD_TO_CART,
			payload: cart,
		});
	};
    
    return (
        <section className='cart-page m-4'>
            {cart.length <= 0 ? (
                <div className='jumbotron'>
                    <h1 className='display-4'>
                        Tu Carrito Esta Vacío.{' '}
                        <button
                            className='btn btn-outline-light text-primary ml-4'
                            onClick={handleGoBackBtn}
                        >
                            <i className='fas fa-arrow-circle-left'></i> Regresa
                        </button>
                    </h1>
                </div>
            ) : (
                <>
                    <div className='jumbotron'>
						<h1 className='display-4'>Carrito</h1>
					</div>
                    <div className='row'>
                        <div className='col-md-8'>
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">FOTO.</th>
                                        <th scope="col">NOMBRE DE PRODUCTOS.</th>
                                        <th scope="col">TALLA.</th>
                                        <th scope="col">C.DE ORO.</th>
                                        <th scope="col">C.DE PIEDRA.</th>
                                        <th scope="col">PRECIO.</th>
                                        <th scope="col">CANTIDAD.</th>
                                        <th scope="col">ACCIÓN.</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map(product => (
                                        <tr>
                                            <th scope="row">
                                                {' '}
                                                <img
                                                    className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4'
                                                    src={`/uploads/${product.fileName}`}
                                                    style={{maxWidth: "100px"}}
                                                    alt='Productos.'
                                                    title='Productos.'
                                                />
                                            </th>
                                            <td>
                                                {' '}
												<Link
													to={`/product/${product._id}`}
                                                    className='btn btn-outline-primary btn-sm mr-1 my-1'
												>
													{product.productName}
												</Link>
                                            </td>
                                            <td>6.5</td>
                                            <td>Amarillo</td>
                                            <td>Azul</td>
                                            <td>
                                                {' '}
												&#36; {product.productPrice.toLocaleString(
													'es-ES',
													{
														style: 'currency',
														currency: 'COP',
													}
												)}
                                            </td>
                                            <td>
                                                <input
													type='number'
													min='1'
													max={product.productQty}
													value={product.count}
													onChange={e =>
														handleQtyChange(
															e,
															product
														)
													}
												/>
                                            </td>
                                            <td>
                                                {' '}
												<button
													type='button'
													className='btn btn-outline-danger btn-sm'
													onClick={() =>
														dispatch(
															deleteFromCart(
																product
															)
														)
													}
												>
													<i className='far fa-trash-alt pr-1' style={{fontSize:"20px", color:"red"}} alt="Eliminar" title="Eliminar"></i>
												</button>
                                            </td>
                                        </tr>
                                    ))}    
                                </tbody>
                            </table>
                        </div>
                        <div className='col-md-4 border-left pl-4'>
                            <h2>Resumen De La Compra.</h2>
                        </div>
                    </div>
                </>
            )}
        </section>
    );
};

export default Cart;
