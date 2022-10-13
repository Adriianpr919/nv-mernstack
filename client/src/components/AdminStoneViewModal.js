import React from 'react';
import './AdminStoneView.css';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteRock } from '../redux/actions/rockActions';

const AdminStoneViewModal = ({ r, adminPage = false }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="container padding-bottom-3x mb-1">
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>C. De Piedra.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-light bg-light'>
                                    <div className="product-item">
                                        <a className="product-thumb" href="#!">
                                            <img
                                                className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail'
                                                src={`/uploadsRock/${r.fileName}`}
                                                style={{maxWidth: "100px"}}
                                                alt="C. De Piedra."
                                                title="C. De Piedra."
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a href="#!">
                                                <h2 className="product-title btn btn-outline-primary btn-sm mr-1 my-1">
                                                    {r.productName}
                                                </h2>
                                            </a>
                                            <span>
                                                <em className='text-success'>
                                                    {r.productCategory}
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
                                                                    dispatch(deleteRock(r._id))
                                                                }
                                                            >
                                                                <i className='far fa-trash-alt pr-1' style={{fontSize:"20px", color:"red"}} alt="Eliminada" title="Eliminada"></i>
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

export default AdminStoneViewModal;