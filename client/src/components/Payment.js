import React from 'react';
import ProgressBar from './ProgressBar';

const Payment = () => {
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
						<h6 className='font-weight-bold mb-4'>Pago.</h6>

						<form>
                            <div className='form-check'>
                                <label className='form-check-label'>
                                    <i class="fas fa-angle-down" style={{fontSize:"25px"}}></i> Comprar Por WhatsAPP.
                                </label>
								<br />
                                <a 
								href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="linkEnlace btn btn-outline-secondary">
                                    <i className="fab fa-whatsapp" style={{fontSize:"25px"}}></i> Comprar Por WhatsAPP.
                                </a>
							</div>
							<button className='btn btn-outline-primary mt-3'>
                                <i class="fa fa-angle-right"></i> Continuar.
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
    );
};

export default Payment;