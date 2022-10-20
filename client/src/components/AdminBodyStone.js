import React from 'react';
import AdminStoneViewModal from './AdminStoneViewModal';
//Redux **************************************************************************
import { useSelector } from 'react-redux';

const AdminBodyStone = () => {
    const { rocks } = useSelector(state => state.rocks);
    return (
        <>
            <div id="viewStoneModal" className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                    <div className="modal-content">
                        <div className="modal-header bg-secondary text-white">
                            <h5 className="modal-title">
                                <i className="fas fa-eye"></i> Ver Color De Piedra.
                            </h5>
                            <button className="btn btn-danger" data-dismiss="modal" aria-label="Cerrar.">
                                <span>
                                    <i className="fas fa-window-close"></i> Cerrar.
                                </span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {rocks &&
                                rocks.map((rock) => (
                                    <AdminStoneViewModal
                                        key={rock._id}
                                        rock={rock}
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

export default AdminBodyStone;
