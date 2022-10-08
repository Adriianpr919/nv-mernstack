import React from 'react';

const AdminOrdersViewModal = () => {
    return (
        <>
            <div className="card-deck">
                <div className="card">
                    <div className="card-body">
                        <div className="table-responsive-xl">
                            <table className="table">
                                <thead className="thead-dark">
                                    <tr>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <h4 className="text-light">
                                                    FOTO.
                                                </h4>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <h4 className="text-light">
                                                    PRODUCTOS.
                                                </h4>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <h4 className="text-light">
                                                    TALLA.
                                                </h4>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <h4 className="text-light">
                                                    ORO.
                                                </h4>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <h4 className="text-light">
                                                    PIEDRA.
                                                </h4>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <h4 className="text-light">
                                                    PRECIO.
                                                </h4>
                                            </div>
                                        </th>
                                        <th scope="col">
                                            <div className="col-md-12 my-1">
                                                <h4 className="text-light">
                                                    CANTIDAD.
                                                </h4>
                                            </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <div className="col-md-12 my-1">
                                                <h5 className="text-dark">
                                                    FOTO.
                                                </h5>
                                            </div>
                                        </th>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <h5 className="text-primary">
                                                    PRODUCTOS.
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <h5 className="text-dark">
                                                    TALLA.
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <h5 className="text-dark">
                                                    ORO.
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <h5 className="text-dark">
                                                    PIEDRA.
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <h5 className="text-success">
                                                    &#36;
                                                </h5>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="col-md-12 my-1">
                                                <h5 className="text-dark">
                                                    CANTIDAD.
                                                </h5>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminOrdersViewModal;
