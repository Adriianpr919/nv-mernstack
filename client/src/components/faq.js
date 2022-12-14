import React from 'react';

const faq = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-12">
                        <div className="list-group" id="myListFaq" role="tablist">
                            <a className="list-group-item list-group-item-action active" data-toggle="list" href="#settings1" role="tab">
                            <i className="fas fa-info-circle" style={{fontSize:"25px", color:"#2d3436"}}></i> ¿Quien fabrican una joya a mi gusto, ustedes lo hacen?
                            </a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#settings2" role="tab">
                            <i className="fas fa-info-circle" style={{fontSize:"25px", color:"#2d3436"}}></i> ¿El precio de las argollas expuestos en la página web son por unidad o por el par?
                            </a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#settings3" role="tab">
                            <i className="fas fa-info-circle" style={{fontSize:"25px", color:"#2d3436"}}></i> ¿Qué hago si no sé cuál es mi talla?
                            </a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#settings4" role="tab">
                            <i className="fas fa-info-circle" style={{fontSize:"25px", color:"#2d3436"}}></i> ¿Qué es PayU?
                            </a>
                            <a className="list-group-item list-group-item-action" data-toggle="list" href="#settings5" role="tab">
                            <i className="fas fa-info-circle" style={{fontSize:"25px", color:"#2d3436"}}></i> ¿Si el producto no este disponible en el color que quiero, ustedes lo fabrican?
                            </a>
                        </div>

                        <div className="tab-content">
                            <div className="tab-pane active" id="settings1" role="tabpanel">
                                <p style={{textAlign: "justify"}}>
                                Diseños anillos y dijes a tu gusto. Debe acercarte a uno de nuestros puntos de ventas donde tengo habilitado el servicio técnico de joyería y solicitar una cotización de acuerdo a tu preferencia.
                                </p>
                            </div>
                            <div className="tab-pane" id="settings2" role="tabpanel">
                                <p style={{textAlign: "justify"}}>
                                El precio de las argollas son por unidad o par? El precio publicados en las argollas son por unidad. Recuerda que nuestros diseños son exclusivos, de alta calidad y garantizamos nuestro oro de 18 Kilates.
                                </p>
                            </div>
                            <div className="tab-pane" id="settings3" role="tabpanel">
                                <p style={{textAlign: "justify"}}>
                                En nuestras página web hemos dispuesto un "PRODUCTO DE Anillos corazón Reborde". Ingrese a este opciones y sigue los sencillos pasos que se te indican. Así podrás conocer de forma rápida la talla que se ajusta a tus necesidades.
                                </p>
                            </div>
                            <div className="tab-pane" id="settings4" role="tabpanel">
                                <p style={{textAlign: "justify"}}>
                                PayU es la plataforma de pagos electrónicos que usa Nury Valenzuela Joyeros para procesar en línea las transacciones generadas en la tienda virtual con las formas de pagos habilitado para tal fin.
                                </p>
                            </div>
                            <div className="tab-pane" id="settings5" role="tabpanel">
                                <p style={{textAlign: "justify"}}>
                                Si, puedo escribirnos por la linea Whatsapp y iniciaremos la fabrican una vez se confirme la compra.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default faq;
