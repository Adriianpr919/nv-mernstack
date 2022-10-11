import React, { useState, useEffect } from 'react';
import ProgressBar from './ProgressBar';
import './Payment.css';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../redux/actions/orderActions';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
	const navigate = useNavigate();

	const dispatch = useDispatch();

	const { paymentMethod } = useSelector(state => state.order);
	const [paymentType, setPaymentType] = useState('stripe');

	useEffect(() => {
		if (paymentMethod) {
			setPaymentType(paymentMethod);
		}
	}, [paymentMethod, setPaymentType]);

	const handleChange = e => {
		setPaymentType(e.target.value);
		dispatch(savePaymentMethod(e.target.value));
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentType));

		navigate('/placeorder');
	};

	return (
		<section className='m-4'>
			<div className='jumbotron p-1'>
				<h5>
					<ProgressBar step1 step2 />
				</h5>
			</div>

			<div className='container border border-secondary py-4'>
				<div className='row justify-content-center'>
					<div className='col-md-8'>
						<h6 className='font-weight-bold mb-4'>Seleccionar De Pagos.</h6>

						<form onSubmit={handleSubmit}>
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='paymentMethod'
									value='paypal'
									onChange={handleChange}
									checked={paymentType === 'paypal'}
								/>
								<label className='form-check-label'>
									<i className="fab fa-cc-paypal" style={{fontSize:"25px", color: "#2e86de"}}></i> Paypal.
								</label>
							</div>
							<hr className="divider" />
							<div className='form-check'>
								<input
									className='form-check-input'
									type='radio'
									name='paymentMethod'
									value='stripe'
									onChange={handleChange}
									checked={paymentType === 'stripe'}
								/>
								<label className='form-check-label'>
									<i className="fab fa-cc-stripe" style={{fontSize:"25px", color: "#6c5ce7"}}></i> Stripe.
								</label>
							</div>
							<hr className="divider" />
							<button className='btn btn-outline-primary mt-3'>
								<i className="fa fa-angle-right"></i> Continuar.
							</button>
						</form>
						<hr className="divider" />
						<article>
							<a
								href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E"
								target="_blank"
								rel="noopener noreferrer"
								className="linkEnlace btn btn-outline-secondary">
									<i className="fab fa-whatsapp" style={{fontSize:"25px"}}></i> Comprar Por WhatsAPP.
							</a>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Payment;