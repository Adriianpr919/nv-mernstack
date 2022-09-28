import React from 'react';
//Redux **************************************************************************
import '../redux/actions/stoneActions';

const AdminStoneViewModal = ({ r }) => {
    return (
        <div className="card-deck">
            <div className="card">
                <div className="card-body">
                    <h5>
                        {r.rock}
                    </h5>
                </div>
                <div className="card-footer">
                    <small className="text-muted">
                        <button
                        type='button'
                        className='btn btn-outline-danger btn-sm'>
                            <i className='far fa-trash-alt pr-1' style={{fontSize:"20px", color:"red"}} alt="Eliminar" title="Eliminar"></i>
                        </button>
                    </small>
                </div>
            </div>
        </div>
    );
};

export default AdminStoneViewModal;