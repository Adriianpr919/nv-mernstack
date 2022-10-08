import React from 'react';
import './AdminActionBtns.css';

const AdminActionBtns = () => (
    <>
        <section className='cart-page m-4'>
            <div className='jumbotron'>
                <h1 className='display-4'>
                    MENU.
                </h1>
            </div>
            <div className="bg-light my-2">
                <div className="container">
                    <div className="row pb-3">
                        <div className="table-responsive-xl">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-dark btn-block" data-toggle="modal" data-target="#addCategoryModal">
                                                    <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Categoría.</h5>
                                                </button>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addSizeModal">
                                                    <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Talla.</h5>
                                                </button>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-warning btn-block" data-toggle="modal" data-target="#addGoldModal">
                                                    <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Oro.</h5>
                                                </button>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-secondary btn-block" data-toggle="modal" data-target="#addStoneModal">
                                                    <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Piedra.</h5>
                                                </button>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-primary btn-block" data-toggle="modal" data-target="#addProductsModal">
                                                    <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Productos.</h5>
                                                </button>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-dark btn-block" data-toggle="modal" data-target="#viewCategoryModal">
                                                    <i className="fas fa-eye"></i><h5 className="fontFamilyH6">Ver Categoría.</h5>
                                                </button>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#viewSizeModal">
                                                    <i className="fas fa-eye"></i><h5 className="fontFamilyH6">Ver Talla.</h5>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-warning btn-block" data-toggle="modal" data-target="#viewGoldModal">
                                                    <i className="fas fa-eye"></i><h5 className="fontFamilyH6">Ver Oro.</h5>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-secondary btn-block" data-toggle="modal" data-target="#viewStoneModal">
                                                    <i className="fas fa-eye"></i><h5 className="fontFamilyH6">Ver Piedra.</h5>
                                                </button>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <button className="btn btn-outline-success btn-block" data-toggle="modal" data-target="#viewOrdersModal">
                                                    <i className="fas fa-eye"> 
                                                        {' '}
                                                        <h5 className="fontFamilyH6">Ver Pedidos.</h5> 
                                                    </i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default AdminActionBtns;