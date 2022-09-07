import React from 'react';

const AdminActionBtns = () => (
    <div className="bg-light my-2">
        <div className="container">
            <div className="row pb-3">
                <div className="col-md-4 my-1">
                    <button className="btn btn-outline-dark btn-block" data-toggle="modal" data-target="#addCategoryModal">
                        <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Categoría.</h5>
                    </button>
                </div>

                <div className="col-md-4 my-1">
                    <button className="btn btn-outline-info btn-block" data-toggle="modal" data-target="#addSizeModal">
                        <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Talla.</h5>
                    </button>
                </div>

                <div className="col-md-4 my-1">
                    <button className="btn btn-outline-warning btn-block" data-toggle="modal" data-target="#addGoldModal">
                        <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Color De Oro.</h5>
                    </button>
                </div>

                <div className="col-md-4 my-1">
                    <button className="btn btn-outline-secondary btn-block" data-toggle="modal" data-target="#addStoneModal">
                        <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Color De Piedra.</h5>
                    </button>
                </div>

                <div className="col-md-4 my-1">
                    <button className="btn btn-outline-primary btn-block" data-toggle="modal" data-target="#addProductsModal">
                        <i className="fas fa-plus-circle"></i><h5 className="fontFamilyH6">Añadir Productos.</h5>
                    </button>
                </div>

                <div className="col-md-4 my-1">
                    <button className="btn btn-outline-success btn-block">
                        <i className="fas fa-eye"> 
                            {' '}
                            <h5 className="fontFamilyH6">Ver Pedidos.</h5> 
                        </i>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

export default AdminActionBtns;