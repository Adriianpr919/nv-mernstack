import React from 'react';

const AdminDashboard = () => {
    /********************************************** 
     * VIEWS
    **********************************************/
    const showHeader = () => (
        <div className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>
                            <i class="fa-solid fa-grid-horizontal"> Panel De Administrador.</i>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );

    const showActionBtns = () => (
        <div className="bg-light my-2">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-dark btn-block">
                            <i class="fa-solid fa-circle-plus"> Añadir Categoría.</i>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-info btn-block">
                            <i class="fa-solid fa-circle-plus"> Añadir Categoría Talla.</i>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-warning btn-block">
                            <i class="fa-solid fa-circle-plus"> Añadir Categoría Color De Oro.</i>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-secondary btn-block">
                            <i class="fa-solid fa-circle-plus"> Añadir Categoría Color De Piedra.</i>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-primary btn-block">
                            <i class="fa-solid fa-circle-plus"> Añadir Productos.</i>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-success btn-block">
                            <i class="fa-solid fa-eye"> 
                                {' '}
                                Ver Pedidos.
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    /********************************************** 
     * RENDERING
    **********************************************/
    return (
        <section>
            { showHeader() }
            { showActionBtns() }
        </section>
    );
};

export default AdminDashboard;
