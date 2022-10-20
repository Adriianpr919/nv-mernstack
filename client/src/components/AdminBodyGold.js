import React from 'react';
import AdminGoldViewModal from './AdminGoldViewModal';
//Redux **************************************************************************
import { useSelector } from 'react-redux';

const AdminBodyGold = () => {
    const { goldens } = useSelector(state => state.goldens);
    return (
        <>
            <div id="viewGoldModal" className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-warning">
                            <h5 className="modal-title">
                                <i className="fas fa-eye"></i> Ver Color De Oro.
                            </h5>
                            <button className="btn btn-danger" data-dismiss="modal" aria-label="Cerrar.">
                                <span>
                                    <i className="fas fa-window-close"></i> Cerrar.
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {goldens &&
                                goldens.map((golden) => (
                                    <AdminGoldViewModal
                                        key={golden._id}
                                        golden={golden}
                                    />
                            ))}
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

export default AdminBodyGold;
