import React from 'react';
import './AdminSizeView.css';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteSized } from '../redux/actions/sizedActions';

const AdminSizeViewModal = ({ s, adminPage = false }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="container padding-bottom-3x mb-1">
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Talla.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-light bg-light'>
                                    <div className="product-item">
                                        <a className="product-thumb" href="#!">
                                            <img
                                                className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail'
                                                src={`/uploadsSized/${s.fileName}`}
                                                style={{maxWidth: "100px"}}
                                                alt="Talla."
                                                title="Talla."
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a href="#!">
                                                <b>
                                                    <h2 className="product-title btn btn-outline-primary btn-sm mr-1 my-1">
                                                        {s.productName}
                                                    </h2>
                                                </b>
                                            </a>
                                            <span>
                                                <em>
                                                    <h4 className='text-secondary'>
                                                        <b>
                                                            {s.productCategory}
                                                        </b>
                                                    </h4>
                                                </em>
                                            </span>
                                            <span>
                                                <em>
                                                    {adminPage && (
                                                        <>
                                                            <button
                                                                type='button'
                                                                className='btn btn-outline-danger btn-sm'
                                                                onClick={() =>
                                                                    dispatch(deleteSized(s._id))
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
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminSizeViewModal;