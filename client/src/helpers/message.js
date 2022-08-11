import React from 'react';

export const showErrorMsg = (msg) => {
    <div className="alert alert-danger" role="alert">
        <i class="fa-solid fa-diamond-exclamation"></i> Una Simple Alerta De Peligro: ¡{msg}! <i class="fa-solid fa-diamond-exclamation"></i>
    </div>
};

export const showSuccessMsg = (msg) => {
    <div className="alert alert-success" role="alert">
        <i class="fa-solid fa-badge-check"></i> Una Simple Alerta De Éxito: ¡{msg}! <i class="fa-solid fa-badge-check"></i>
    </div>
};