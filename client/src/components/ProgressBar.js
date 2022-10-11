import React from 'react';
import { Link } from 'react-router-dom';

const ProgressBar = ({ step1, step2, step3 }) => {
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    {step1 ? (
                        <li
                            className='breadcrumb-item active'
                            aria-current='page'
                        >
                            <Link to='/shipping' className="btn btn-outline-primary">Envios.</Link>
                        </li>
                    ) : (
                        <li className='breadcrumb-item' aria-current='page'>
                            <Link
                                to='/#'
                                onClick={evt => evt.preventDefault()}
                                style={{
                                    textDecoration: 'none',
                                    cursor: 'not-allowed',
                                }}
                                className='text-muted'
                            >
                                Envios.
                            </Link>
                        </li>
                    )}
                    {step2 ? (
                        <li
                            className='breadcrumb-item active'
                            aria-current='page'
                        >
                            <Link to='/payment' className="btn btn-outline-primary">Pagos.</Link>
                        </li>
                    ) : (
                        <li className='breadcrumb-item' aria-current='page'>
                            <Link
                                to='/#'
                                onClick={evt => evt.preventDefault()}
                                style={{
                                    textDecoration: 'none',
                                    cursor: 'not-allowed',
                                }}
                                className='text-muted'
                            >
                                Pagos.
                            </Link>
                        </li>
                    )}
                    {step3 ? (
                        <li
                            className='breadcrumb-item active'
                            aria-current='page'
                        >
                            <Link to='/placeorder' className="btn btn-outline-primary">Realizar Pedidos.</Link>
                        </li>
                    ) : (
                        <li className='breadcrumb-item' aria-current='page'>
                            <Link
                                to='/#'
                                onClick={evt => evt.preventDefault()}
                                style={{
                                    textDecoration: 'none',
                                    cursor: 'not-allowed',
                                }}
                                className='text-muted'
                            >
                                Realizar Pedidos.
                            </Link>
                        </li>
                    )}
                </ol>
            </nav>
        </>
    );
};

export default ProgressBar;
