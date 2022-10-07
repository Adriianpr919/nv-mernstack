import React from 'react';
import './AdminGoldView.css';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteGolden } from '../redux/actions/goldenActions';

const AdminGoldViewModal = ({ g, adminPage = false }) => {
    const dispatch = useDispatch();
    return (
        <>
            <div className="container padding-bottom-3x mb-1">
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>C. De Oro.</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-light bg-light'>
                                    <div className="product-item">
                                        <a className="product-thumb" href="#!">
                                            <img
                                                className='img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail'
                                                src={`/uploadsGolden/${g.fileName}`}
                                                style={{maxWidth: "100px"}}
                                                alt="C. De Oro."
                                                title="C. De Oro."
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a href="#!">
                                                <b>
                                                    <h2 className="product-title btn btn-outline-primary btn-sm mr-1 my-1">
                                                        {g.productName}
                                                    </h2>
                                                </b>
                                            </a>
                                            <span>
                                                <em>
                                                    <h4 className='text-success'>
                                                        <b>
                                                            {g.productCategory}
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
                                                                    dispatch(deleteGolden(g._id))
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

export default AdminGoldViewModal;