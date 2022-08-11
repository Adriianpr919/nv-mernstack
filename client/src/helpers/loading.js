import React, { Fragment } from 'react';

export const showLoading = () => (
    <Fragment>
        <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Cargando...</span>
        </div>
        <div className="spinner-border text-secondary" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
        <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
        <div className="spinner-border text-danger" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
        <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
        <div className="spinner-border text-info" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
        <div className="spinner-border text-light" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
        <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Cargando...</span>
        </div>
    </Fragment>
);