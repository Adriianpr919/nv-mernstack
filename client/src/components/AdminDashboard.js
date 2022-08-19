import React from 'react';
import './AdminStyle.css';

const AdminDashboard = () => {
    /********************************************** 
     * VIEWS
    **********************************************/
    const showHeader = () => (
        <div className="bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="fontFamilyH6">
                            <i class="fa-solid fa-house-user"></i> Panel De Administrador.
                        </h5>
                    </div>
                </div>
            </div>
        </div>
    );

    const showActionBtns = () => (
        <div className="bg-light my-2">
            <div className="container">
                <div className="row pb-3">
                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-dark btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal1">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-info btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal2">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría Talla.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-warning btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal3">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría Color De Oro.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-secondary btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal4">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Categoría Color De Piedra.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-primary btn-block" data-bs-toggle="modal" data-bs-target="#addCategoryModal5">
                            <i class="fa-solid fa-circle-plus"></i><h5 className="fontFamilyH6">Añadir Productos.</h5>
                        </button>
                    </div>

                    <div className="col-md-4 my-1">
                        <button className="btn btn-outline-success btn-block">
                            <i class="fa-solid fa-eye"> 
                                {' '}
                                <h5 className="fontFamilyH6">Ver Pedidos.</h5> 
                            </i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    /********************************************** 
     * MODAL PLUGIN DEFINITIONS
    **********************************************/
    const showCategoryModal1 = () => (
        <div id="addCategoryModal1" className="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header bg-dark text-white">
                    <h5 className="modal-title" id="exampleModalLabel">
                    <i class="fa-solid fa-circle-plus"></i> Añadir Categoría.
                    </h5>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Cerrar.">
                        <span>
                        <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                        </span>
                    </button>
                </div>
                <div className="modal-body my-2">
                    <form>
                    <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="Añadir Categoría." />
                        <label for="floatingInputGrid"><i class="fa-solid fa-circle-plus"></i> Añadir Categoría. *:</label>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                    <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                    </button>
                    <button type="button" className="btn btn-outline-success">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar.
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
    const showCategoryModal2 = () => (
        <div id="addCategoryModal2" className="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header bg-info">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <i class="fa-solid fa-circle-plus"></i> Añadir Categoría Talla.
                    </h5>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Cerrar.">
                        <span>
                        <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                        </span>
                    </button>
                </div>
                <div className="modal-body my-2">
                    <form>
                    <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="Añadir Categoría Talla." />
                        <label for="floatingInputGrid"><i class="fa-solid fa-circle-plus"></i> Añadir Categoría Talla. *:</label>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                    <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                    </button>
                    <button type="button" className="btn btn-outline-success">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar.
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
    const showCategoryModal3 = () => (
        <div id="addCategoryModal3" className="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header bg-warning">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <i class="fa-solid fa-circle-plus"></i> Añadir Categoría Color De Oro.
                    </h5>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Cerrar.">
                        <span>
                        <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                        </span>
                    </button>
                </div>
                <div className="modal-body my-2">
                    <form>
                    <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="Añadir Categoría Color De Oro." />
                        <label for="floatingInputGrid"><i class="fa-solid fa-circle-plus"></i> Añadir Categoría Color De Oro. *:</label>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                    <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                    </button>
                    <button type="button" className="btn btn-outline-success">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar.
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
    const showCategoryModal4 = () => (
        <div id="addCategoryModal4" className="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header bg-secondary text-white">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <i class="fa-solid fa-circle-plus"></i> Añadir Categoría Color De Piedra.
                    </h5>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Cerrar.">
                        <span>
                        <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                        </span>
                    </button>
                </div>
                <div className="modal-body my-2">
                    <form>
                    <div className="row g-2">
                    <div className="col-md">
                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" placeholder="Añadir Categoría Color De Piedra." />
                        <label for="floatingInputGrid"><i class="fa-solid fa-circle-plus"></i> Añadir Categoría Color De Piedra. *:</label>
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                    <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                    </button>
                    <button type="button" className="btn btn-outline-success">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar.
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
    const showCategoryModal5 = () => (
        <div id="addCategoryModal5" className="modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                <div className="modal-header bg-primary text-white">
                    <h5 className="modal-title" id="exampleModalLabel">
                        <i class="fa-solid fa-circle-plus"></i> Añadir Productos.
                    </h5>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" aria-label="Cerrar.">
                        <span>
                        <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                        </span>
                    </button>
                </div>
                <div className="modal-body my-2">
                    <form>
                    <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInputGrid" placeholder="Nombre Del Producto." />
                            <label for="floatingInputGrid"><i class="fa-solid fa-circle-plus"></i> Nombre Del Producto. *:</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInputGrid" placeholder="Precio Anterior." />
                            <label for="floatingInputGrid"><i class="fa-solid fa-circle-dollar-to-slot"></i> Precio Anterior. *:</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInputGrid" placeholder="Precio Actual." />
                            <label for="floatingInputGrid"><i class="fa-solid fa-circle-dollar-to-slot"></i> Precio Actual. *:</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                            <input type="number" className="form-control" id="floatingInputGrid" placeholder="Cantidad." />
                            <label for="floatingInputGrid"><i class="fa-solid fa-hashtag"></i> Cantidad. *:</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                talla
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                                color de oro
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                                color de piedra
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                            <textarea className="form-control" placeholder="Descripción." id="floatingTextarea2" style={{height: "100px"}}></textarea>
                            <label for="floatingTextarea2"><i class="fa-solid fa-circle-plus"></i> Descripción. *:</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-floating mb-3">
                            <select className="form-select" id="floatingSelect" aria-label="Selecciónar Categorías.">
                                <option selected>--- Abrir Este Menú De Selecciónar Categorías ---</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <label for="floatingSelect"><i class="fa-solid fa-circle-plus"></i> Selecciónar Categorías. *:</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="form-floating mb-3">
                            <input type="file" className="form-control" id="inputGroupFile02" />
                            <label for="floatingFile"><i class="fa-solid fa-file-image"></i> Fotos. *:</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                        1 of 2
                        </div>
                        <div className="col">
                        2 of 2
                        </div>
                    </div>
                    </div>
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-outline-danger" data-bs-dismiss="modal">
                    <i class="fa-solid fa-circle-xmark"></i> Cerrar.
                    </button>
                    <button type="button" className="btn btn-outline-success">
                    <i class="fa-solid fa-floppy-disk"></i> Guardar.
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
    /********************************************** 
     * RENDERING
    **********************************************/
    return (
        <section>
            {showHeader()}
            {showActionBtns()}
            {showCategoryModal1()}
            {showCategoryModal2()}
            {showCategoryModal3()}
            {showCategoryModal4()}
            {showCategoryModal5()}
        </section>
    );
};

export default AdminDashboard;
