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
                            <Link to='/shipping' className="btn btn-outline-primary">Envío</Link>
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
                                Envío.
                            </Link>
                        </li>
                    )}
                    {step2 ? (
                        <li
                            className='breadcrumb-item active'
                            aria-current='page'
                        >
                            <Link to='/payment' className="btn btn-outline-primary">Pago.</Link>
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
                                Pago.
                            </Link>
                        </li>
                    )}
                    {step3 ? (
                        <li
                            className='breadcrumb-item active'
                            aria-current='page'
                        >
                            <Link to='/placeorder' className="btn btn-outline-primary">Realizar Pedido.</Link>
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
                                Realizar Pedido.
                            </Link>
                        </li>
                    )}
                </ol>
            </nav>
        </>
    );
};

export default ProgressBar;
