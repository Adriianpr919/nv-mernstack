import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';

const Products = () => {
    const navigate = useNavigate();
	const { productId } = useParams();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProduct(productId));
	}, [dispatch, productId]);

	const { product } = useSelector(state => state.products);

    const handleAddToCart = () => {
		dispatch(addToCart(product));
	};

    const handleGoBackBtn = () => {
		navigate(-1);
	};

    return (
        <section className='product-page m-4'>
            <div className='jumbotron'>
                <button
                    to='/shop'
                    className='btn btn-outline-primary mb-4'
                    onClick={handleGoBackBtn}
                >
                    <i className='fas fa-arrow-circle-left'></i> Regresa
                </button>
            </div>
            {product && (
                <div className="container">
                    <div className="row">
                        <div className='col-md-6'>
                            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">{/* FOTO 0 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`}
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 1 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`}
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 2 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`}
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 3 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`}
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 4 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`}
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 5 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`}
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 6 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`}
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 7 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`} 
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                    <div className="carousel-item">{/* FOTO 8 */}
                                        <img 
                                        src={`/uploads/${product.fileName}`} 
                                        alt='Productos.'
                                        title='Productos.'
                                        className="img-fluid w-100 border border-dark img-rounded mx-auto d-block img-thumbnail mb-4" />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Antes.</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Despues.</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-6 order-md-2 mb-4">
                            <ul className="list-group mb-3">
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <h2 className="d-flex justify-content-between align-items-center mb-3">
                                        <span className="text-dark">
                                            <b>
                                                {product.productName}
                                            </b>
                                        </span>
                                    </h2>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div className="text-dark">
                                        <h5 className="my-0">
                                            <span>
                                                <b>
                                                    Precio *: 
                                                </b>
                                            </span>
                                        </h5>
                                    </div>
                                    <h5>
                                        <span className="text-success">
                                            <b>
                                                &#36;{' '}
                                                {product.productPrice.toLocaleString('es-ES', {
                                                    style: 'currency',
                                                    currency: 'COP',
                                                })}
                                            </b>
                                        </span>
                                    </h5>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div className="text-dark">
                                        <h6 className="my-0">
                                        Estado *:{' '}
                                        </h6>
                                        <small className="text-dark">UNIDADES.</small>
                                    </div>
                                    <span className="text-dark">
                                        <b>
                                            {product.productQty <= 0
                                            ? 'Agotado.'
                                            : 'En Stock.'}
                                        </b>
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between lh-condensed">
                                    <div className="text-dark">
                                        <h6 className="my-0">
                                            Talla *: 
                                        </h6>
                                        <small className="text-muted">Talla.</small>
                                    </div>
                                    <span className="text-dark">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect01">Talla *:</label>
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect01">
                                                <option value="" selected>--- Seleccióna Talla ---</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-dark">
                                        <h6 className="my-0">
                                            Oro *: 
                                        </h6>
                                        <small>Oro.</small>
                                    </div>
                                    <span className="text-dark">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect02">Oro *:</label>
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect02">
                                                <option value="" selected>--- Seleccióna Oro ---</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-dark">
                                        <h6 className="my-0">
                                            Piedra *: 
                                        </h6>
                                        <small>Piedra.</small>
                                    </div>
                                    <span className="text-dark">
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend">
                                                <label class="input-group-text" for="inputGroupSelect03">Piedra *:</label>
                                            </div>
                                            <select class="custom-select" id="inputGroupSelect03">
                                                <option value="" selected>--- Seleccióna Piedra ---</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </span>
                                </li>
                                <li className="list-group-item d-flex justify-content-between bg-light">
                                    <div className="text-dark">
                                        <h6 className="my-0">
                                            Descripción *: 
                                        </h6>
                                        <small>Descripción.</small>
                                    </div>
                                    <span className="text-dark" style={{textAlign: "justify"}}>
                                        {product.productDesc}
                                    </span>
                                </li>
                                <li className="list-group-item justify-content-between">
                                    <span>
                                        <button
                                            className='btn btn-outline-warning btn-large btn-block mb-5 py-2'
                                            disabled={product.productQty <= 0}
                                            onClick={handleAddToCart}
                                        >
                                            <i className="fas fa-cart-plus" style={{fontSize:"25px"}}></i> Añadir Al Carrito.
                                        </button>
                                    </span>
                                </li>
                                <li className="list-group-item justify-content-between">
                                    <strong>
                                        <a 
                                        href="https://api.whatsapp.com/send?phone=573133966349&text=Hola%2C%20vengo%20desde%20tu%20perfil%20de%20Instagram%20y%20deseo%20obtener%20mas%20informaci%C3%B3n%20%20%F0%9F%92%8E" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="btn btn-outline-success btn-large btn-block mb-5 py-2">
                                            <i className="fab fa-whatsapp" style={{fontSize:"25px"}}></i> Comprar Por WhatsAPP.
                                        </a>
                                    </strong>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>    
    );
};

export default Products;