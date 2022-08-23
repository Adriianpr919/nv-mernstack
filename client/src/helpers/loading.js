import React, { Fragment } from 'react';

export const showLoading = () => (
    <Fragment>
        <div className="spinner-border text-dark" role="status">
            <span className="sr-only">Cargando...</span>
        </div>
    </Fragment>
);