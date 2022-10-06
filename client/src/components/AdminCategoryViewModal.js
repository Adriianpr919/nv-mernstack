import React, { useRef } from 'react';
//Redux **************************************************************************
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../redux/actions/categoryActions';

const AdminCategoryViewModal = ({ c }) => {
    //const { dispatch } = createCategory(); **
    const dispatch = useDispatch();

    const data=useRef();

    console.log(localStorage.getItem("inputValue"),"****");
    return (
        <>
            
            <div className="container padding-bottom-3x mb-1">
                <div className="table-responsive shopping-cart">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Categorías.</th>
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
                                                        {c.category}
                                                    </h2>
                                                </b>
                                            </a>
                                            <span>
                                                <em>
                                                        <>
                                                            <button
                                                                type='button'
                                                                ref={data}
                                                                onClick={() =>
                                                                    dispatch(deleteCategory(c._id))
                                                                }
                                                                className='btn btn-outline-danger btn-sm'
                                                            >
                                                                <i className='far fa-trash-alt pr-1' style={{fontSize:"20px", color:"red"}} alt="Eliminar" title="Eliminar"></i>
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

export default AdminCategoryViewModal;