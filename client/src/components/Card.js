import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/actions/productActions';

const Card = ({ product }) => {
    const dispatch = useDispatch();
    return (
        <div className="col-md-4 my-3"> 
            <div className="card h-100 border border-dark">
                <a href='#!'>
                    <img 
                    src={`/uploads/${product.fileName}`}
                    className="card-img-top w-100 border border-dark img-rounded mx-auto d-block img-thumbnail" 
                    alt="Productos"
                    title="Productos" />
                </a>
                <div className="card-body text-center">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">
                    <h6 className='mb-3'>
                        <span className='text-secondary mr-2'>
                            {product.productPrice.toLocaleString('es-ES', {
                                style: 'currency',
                                currency: 'COP',
                            })}
                        </span>
                    </h6>
                    <p className="productDescription">
                        {product.productDesc.length > 60
                            ? product.productDesc.substring(0, 60) + '...'
                            : product.productDesc.substring(0, 60)}
                    </p>
                </p>
                </div>
                <div className="card-footer">
                <small className="text-muted">
                    <Link
                        to=""
                        type='button'
                        className='btn btn-outline-dark btn-sm mr-1 my-1'
                    >
                        <i className='far fa-edit pr-1'></i>
                        Editar.
                    </Link>
                    <button
                        type='button'
                        className='btn btn-outline-danger btn-sm'
                        onClick={() =>
                            dispatch(deleteProduct(product._id))
                        }
                    >
                        <i className='far fa-trash-alt pr-1'></i>
                        Borrar.
                    </button>
                </small>
                </div>
            </div>
        </div>
    );
};

export default Card;
