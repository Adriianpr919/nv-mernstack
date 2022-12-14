import React from 'react';
import AdminOrdersViewModal from './AdminOrdersViewModal';

const AdminBodyOrders = () => {
    return (
        <>
            <div id="viewOrdersModal" className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-success text-light">
                            <h5 className="modal-title">
                                <i className="fas fa-eye"></i> Ver Pedidos.
                            </h5>
                            <button className="btn btn-danger" data-dismiss="modal" aria-label="Cerrar.">
                                <span>
                                    <i className="fas fa-window-close"></i> Cerrar.
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <AdminOrdersViewModal />
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-outline-danger" data-dismiss="modal">
                                <i className="fas fa-window-close"></i> Cerrar.
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminBodyOrders;
