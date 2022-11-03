import React from 'react';
import './AdminStoneView.css';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteRock } from '../redux/actions/rockActions';

const AdminStoneViewModal = ({ rock }) => {
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
                                        <div className="product-info">
                                            <a href="#!">
                                                <b>
                                                    <h2 className="product-title btn btn-outline-primary btn-sm mr-1 my-1">
                                                        {rock.rock}
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
                                                                dispatch(deleteRock(rock._id))
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

export default AdminStoneViewModal;