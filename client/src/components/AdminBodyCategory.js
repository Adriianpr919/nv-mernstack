import React from 'react';
import AdminCategoryViewModal from './AdminCategoryViewModal';
//Redux **************************************************************************
import { useSelector } from 'react-redux';

const AdminBodyCategory = () => {
    const { categories } = useSelector(state => state.categories);
    return (
        <div id="viewCategoryModal" className="modal fade bd-example-modal-xl" tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
                <div className="modal-content">
                    <div className="modal-header bg-dark text-white">
                        <h5 className="modal-title">
                            <i className="fas fa-eye"></i> Ver Categoría.
                        </h5>
                        <button className="btn btn-danger" data-dismiss="modal" aria-label="Cerrar.">
                            <span>
                                <i className="fas fa-window-close"></i> Cerrar.
                            </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {categories &&
                            categories.map((c) => (
                            <AdminCategoryViewModal
                                key={c._id}
                                c={c}
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
    );
};

export default AdminBodyCategory;
