import React from 'react';
import AdminSizeViewModal from './AdminSizeViewModal';
//Redux **************************************************************************
import { useSelector } from 'react-redux';

const AdminBodySize = () => {
    const { sizes } = useSelector(state => state.sizes);
    return (
        <div id="viewSizeModal" className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                <div className="modal-header bg-info">
                    <h5 className="modal-title">
                        <i className="fas fa-eye"></i> Ver Talla.
                    </h5>
                    <button className="btn btn-danger" data-dismiss="modal" aria-label="Cerrar.">
                        <span>
                            <i className="fas fa-window-close"></i> Cerrar.
                        </span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>
                        {sizes?.map(s => (
                            <AdminSizeViewModal 
                                key={s._id}
                                s={s}
                            />
                        ))}
                    </p>
                </div>
                <div className="modal-footer">
                    <button className="btn btn-outline-danger" data-dismiss="modal">
                        <i className="fas fa-window-close"></i> Cerrar.
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AdminBodySize;
