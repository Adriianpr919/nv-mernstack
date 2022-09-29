import React from 'react';
import './Card.css';
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
        <div className='col-md-6 my-3'>
            <div className='card h-100 border border-dark'>
                <a href='#!'>
                    <img
                        className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail'
                        src={`/uploads/${product.fileName}`}
                        style={{maxWidth: "150px"}}
                        alt="Productos"
                        title="Productos"
                    />
                </a>

                <div className='card-body text-center'>
                    <h5>{product.productName}</h5>
                    <hr />
                    <h6 className='mb-3 text-success'>
                        <span className='mr-2'>
                            <b>
                                &#36; {product.productPrice.toLocaleString('es-ES', {
                                    style: 'currency',
                                    currency: 'COP',
                                })}
                            </b>
                        </span>
                    </h6>
                    <p className='text-muted'>
						{product.productQty <= 0 ? 'Agotado.' : 'En Stock.'}
					</p>
                    <p style={{textAlign: "justify"}}>
                        {product.productDesc.length > 60
                            ? product.productDesc.substring(0, 60) + '...'
                            : product.productDesc.substring(0, 60)}
                    </p>
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
                </div>
            </div>
        </div>
    );
};

export default Card;
