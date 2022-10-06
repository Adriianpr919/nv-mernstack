import React, { useRef } from 'react';
import './AdminSizeView.css';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteSized } from '../redux/actions/sizedActions';

const AdminSizeViewModal = ({ sized, adminPage = false }) => {
    const data=useRef();

    const dispatch = useDispatch();

    console.log(localStorage.getItem("inputValue"),"****");
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
                                                src={`/uploadsSized/${sized.fileName}`}
                                                style={{maxWidth: "100px"}}
                                                alt="Talla."
                                                title="Talla."
                                            />
                                        </a>
                                        <div className="product-info">
                                            <a href="#!">
                                                <b>
                                                    <h2 className="product-title btn btn-outline-primary btn-sm mr-1 my-1">
                                                        {sized.productName}
                                                    </h2>
                                                </b>
                                            </a>
                                            <span>
                                                <em>
                                                    <h4 className='text-secondary'>
                                                        <b>
                                                            {sized.productCategory}
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
                                                                ref={data}
                                                                className='btn btn-outline-danger btn-sm'
                                                                onClick={() =>
                                                                    dispatch(deleteSized(sized._id))
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