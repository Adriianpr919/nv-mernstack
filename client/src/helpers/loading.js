import React, { Fragment } from 'react';

export const showLoading = () => (
    <Fragment>
        <div className="spinner-border m-5 text-dark" style={{width: "3rem", height: "3rem"}} role="status">
            <span className="sr-only">Cargando...</span>
        </div>
    </Fragment>
);