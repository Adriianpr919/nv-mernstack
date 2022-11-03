import React from 'react';
import './AdminGoldView.css';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteGolden } from '../redux/actions/goldenActions';

const AdminGoldViewModal = ({ golden }) => {
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
                                        <div className="product-info">
                                            <a href="#!">
                                                <b>
                                                    <h2 className="product-title btn btn-outline-primary btn-sm mr-1 my-1">
                                                        {golden.golden}
                                                    </h2>
                                                </b>
                                            </a>
                                            <span>
                                                <em>
                                                    <>
                                                        <button
                                                            type='button'
                                                            className='btn btn-outline-danger btn-sm'
                                                            onClick={() =>
                                                                dispatch(deleteGolden(golden._id))
                                                            }
                                                        >
                                                            <i className='far fa-trash-alt pr-1' style={{ fontSize: "20px", color: "red" }} alt="Eliminada" title="Eliminada"></i>
                                                            Borrar.
                                                        </button>
                                                    </>
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