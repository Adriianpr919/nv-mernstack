import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import usaStates from '../data/usaStates';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../redux/actions/orderActions';

const Shipping = () => {
    const navigate = useNavigate();
	const dispatch = useDispatch();
	const { shippingAddress } = useSelector(state => state.order);

    const [address, setAddress] = useState('');
	const [address2, setAddress2] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [zip, setZip] = useState('');

    useEffect(() => {
		shippingAddress.address
			? setAddress(shippingAddress.address)
			: setAddress('');
		shippingAddress.address2
			? setAddress2(shippingAddress.address2)
			: setAddress2('');
		shippingAddress.city ? setCity(shippingAddress.city) : setCity('');
		shippingAddress.state ? setState(shippingAddress.state) : setState('');
		shippingAddress.zip ? setZip(shippingAddress.zip) : setZip('');
	}, [shippingAddress]);

    const handleSubmit = evt => {
		evt.preventDefault();

		const shippingData = {
			address,
			address2,
			city,
			state,
			zip,
		};

		dispatch(saveShippingAddress(shippingData));
		navigate('/payment');
	};

    return (
        <section className='m-4'>
            <div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 />
				</h5>
			</div>
            <div className='container border border-secondary py-4'>
                <div className='row justify-content-center'>
                    <div className='col-md-8'>
                        <h6 className='font-weight-bold mb-4'>
                            Detalles De Envío.
						</h6>

                        <form onSubmit={handleSubmit}>
                            <div className='form-group'>
                                <label htmlFor="inputAddress">Dirección 1 *: <span class="text-muted">(Opcional 1.)</span></label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={address}
                                onChange={evt =>
                                    setAddress(evt.target.value)
                                }
                                placeholder="Dirección 1." />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="inputAddress2">Dirección 2 *: <span class="text-muted">(Opcional 2.)</span></label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={address2}
                                onChange={evt =>
                                    setAddress2(evt.target.value)
                                }
                                placeholder="Número De Apartamento, Suite, Casa, Unidad, etc." />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="inputCity">Ciudad *: <span class="text-muted">(Ciudad.)</span></label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={city}
                                onChange={evt =>
                                    setCity(evt.target.value)
                                }
                                placeholder="Ciudad." />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="inputState">Estado *: <span class="text-muted">(Estado.)</span></label>
                                <select 
                                className="form-control" 
                                value={state}
                                onChange={evt =>
                                    setState(evt.target.value)
                                }>
                                    <option value="" selected>--- Selecciónar Estado. ---</option>
                                    {usaStates.map(s => (
                                    <option
                                        key={s.abbreviation}
                                        value={s.abbreviation}
                                    >
                                        {s.name}
                                    </option>
                                    ))}
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="inputZip">Código Postal *: <span class="text-muted">(Código Postal.)</span></label>
                                <input 
                                type="text" 
                                className="form-control" 
                                value={zip}
                                onChange={evt =>
                                    setZip(evt.target.value)
                                }
                                placeholder="Código Postal." />
                            </div>

                            <button type='submit' className='btn btn-outline-primary'>
                                <i class="fa fa-angle-right"></i> Continuar. 
							</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Shipping;
