import React from 'react';

const UserOrders = () => {
    return (
        <>
            <section className='cart-page m-4'>
                <div className="bg-light my-2">
                    <div className="container">
                        <div className="row pb-3">
                            <div class="table-responsive-xl">
                                <table class="table">
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
                                                    <h4 className="text-dark">
                                                        FOTO.
                                                    </h4>
                                                </div>
                                            </th>
                                            <td>
                                                <div className="col-md-12 my-1">
                                                    <h4 className="text-primary">
                                                        PRODUCTOS.
                                                    </h4>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-md-12 my-1">
                                                    <h4 className="text-dark">
                                                        TALLA.
                                                    </h4>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-md-12 my-1">
                                                    <h4 className="text-dark">
                                                        ORO.
                                                    </h4>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-md-12 my-1">
                                                    <h4 className="text-dark">
                                                        PIEDRA.
                                                    </h4>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-md-12 my-1">
                                                    <h4 className="text-success">
                                                        &#36;
                                                    </h4>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="col-md-12 my-1">
                                                    <h4 className="text-dark">
                                                        CANTIDAD.
                                                    </h4>
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
};

export default UserOrders;
