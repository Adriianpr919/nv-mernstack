import React from 'react';
import './Card.css';
import './Card1.css';
import { Link } from 'react-router-dom';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Card = ({ product, adminPage = false, homePage = false }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

    return (
        <>
            <div className="container padding-bottom-3x mb-1">
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td className='border border-light bg-light'>
                                    <div className="product-item">
                                        <a className="product-thumb" href="#!">
                                            <img
                                                className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail'
                                                src={`/uploads/${product.fileName}`}
                                                style={{maxWidth: "100px"}}
                                                alt="Productos"
                                                title="Productos"
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a href="#!">
                                                <b>
                                                    <h4 className="product-title btn btn-outline-primary btn-sm mr-1 my-1">
                                                        {product.productName}
                                                    </h4>
                                                </b>
                                            </a>
                                            <span>
                                                <em>
                                                    <h4 className='text-success'>
                                                        <b>
                                                            &#36; {product.productPrice.toLocaleString('es-ES', {
                                                                style: 'currency',
                                                                currency: 'COP',
                                                            })}
                                                        </b>
                                                    </h4>
                                                </em>
                                            </span>
                                            <span>
                                                <em>
                                                    <h5>
                                                        <b>
                                                            {product.productQty <= 0 ? 'Agotado.' : 'En Stock.'}
                                                        </b>
                                                    </h5>
                                                </em>
                                            </span>
                                            <span>
                                                <em>
                                                    <p style={{textAlign: "justify"}}>
                                                        {product.productDesc.length > 60
                                                            ? product.productDesc.substring(0, 60) + '...'
                                                            : product.productDesc.substring(0, 60)}
                                                    </p>
                                                </em>
                                            </span>
                                            <span>
                                                <em>
                                                    {adminPage && (
                                                        <>
                                                            <Link
                                                                to={`/admin/edit/product/${product._id}`}
                                                                type='button'
                                                                className='btn btn-outline-success btn-sm mr-1 my-1'
                                                            >
                                                                <i className='far fa-edit pr-1' style={{fontSize:"20px", color:"green"}} alt="Editar" title="Editar"></i>
                                                                Editar.
                                                            </Link>
                                                            <button
                                                                type='button'
                                                                className='btn btn-outline-danger btn-sm'
                                                                onClick={() =>
                                                                    dispatch(deleteProduct(product._id))
                                                                }
                                                            >
                                                                <i className='far fa-trash-alt pr-1' style={{fontSize:"20px", color:"red"}} alt="Eliminar" title="Eliminar"></i>
                                                                Borrar.
                                                            </button>
                                                        </>
                                                    )}
                                                </em>
                                            </span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-center border border-light bg-light">
                                    {homePage && (
                                        <>
                                            <Link
                                                to={`/product/${product._id}`}
                                                type='button'
                                                className='btn btn-outline-primary btn-sm mr-1 my-1'
                                            >
                                                <i className="fas fa-eye"></i> Ver Detalles.
                                            </Link>
                                            <button
                                                type='button'
                                                className='btn btn-outline-warning btn-sm'
                                                disabled={product.productQty <= 0}
                                                onClick={handleAddToCart}
                                            >
                                                <i className="fas fa-cart-plus"></i> Añadir Al Carrito.
                                            </button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Card;
