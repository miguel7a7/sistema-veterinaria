import React from "react";
import fotoUser from "../../assets/svg/user.svg";
import foto from "../../assets/images/fondo1.jpg";

export const MainTestimonio = () => {
    return (
        <div className="container my-3">
            <div className="row py-3 text-center">
                <h2 className="mb-4 text-info">
                    Testimonios de Nuestro Clientes
                </h2>
                <div className="col-md-8 offset-md-2">
                    <div
                        id="carouselExampleCaptions"
                        className="carousel slide carousel-fade"
                        data-bs-ride="carousel"
                    >
                        <div className="carousel-indicators">
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="0"
                                className="active bg-info"
                                aria-current="true"
                                aria-label="Slide 1"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="1"
                                aria-label="Slide 2"
                                className="bg-info"
                            ></button>
                            <button
                                type="button"
                                data-bs-target="#carouselExampleCaptions"
                                data-bs-slide-to="2"
                                aria-label="Slide 3"
                                className="bg-info"
                            ></button>
                        </div>
                        <div className="carousel-inner">
                            <div
                                className="carousel-item active py-2"
                                data-bs-interval="10000"
                            >
                                <div
                                    className="card mb-5"
                                    style={{
                                        // maxWidth: "540px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                    }}
                                >
                                    <div className="row g-0">
                                        <div className="col-md-4 mt-2">
                                            <img
                                                src={fotoUser}
                                                className="img-fluid rounded-start"
                                                alt="img-user"
                                                width="150px"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Juan Quispe
                                                </h5>
                                                <p className="card-text">
                                                    Gracias a la veterniaria que
                                                    me atendio fuera de horario
                                                    de trabajo, estoy feliz con
                                                    mi mascota, confio mucho en
                                                    el personal y el doctor para
                                                    todo cuidado de mi mascota.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Actualizado hace 4
                                                        meses.
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="carousel-item py-2"
                                data-bs-interval="10000"
                            >
                                <div
                                    className="card mb-5"
                                    style={{
                                        // maxWidth: "540px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                    }}
                                >
                                    <div className="row g-0">
                                        <div className="col-md-4 mt-2">
                                            <img
                                                src={fotoUser}
                                                className="img-fluid rounded-start"
                                                alt="img-user"
                                                width="150px"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Rosalia Vargas Medrano
                                                </h5>
                                                <p className="card-text">
                                                    No podría estar más contento
                                                    con todo el personal. Dr.
                                                    Brown es un excelente
                                                    cirujano, como se ha
                                                    señalado por los
                                                    especialistas que vimos
                                                    después cirugía. Para
                                                    amabilidad y eficiencia,
                                                    East Hills es de lo mejor!"
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Actualizado hace 15
                                                        dias.
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="carousel-item py-2"
                                data-bs-interval="10000"
                            >
                                <div
                                    className="card mb-5"
                                    style={{
                                        // maxWidth: "540px",
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                    }}
                                >
                                    <div className="row g-0">
                                        <div className="col-md-4 mt-2">
                                            <img
                                                src={fotoUser}
                                                className="img-fluid rounded-start"
                                                alt="img-user"
                                                width="150px"
                                            />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    Juaquin Cortez.
                                                </h5>
                                                <p className="card-text">
                                                    Mucho cuidado! Grandes
                                                    médicos! Siempre disponible
                                                    y amable. El mejor cuidado
                                                    para nuestras mascotas cada
                                                    vez! Ofrecen una estimación
                                                    antes de los servicios para
                                                    que pueda elegir “ahora o
                                                    más tarde”.
                                                </p>
                                                <p className="card-text">
                                                    <small className="text-muted">
                                                        Actualizado hace 2
                                                        meses.
                                                    </small>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="prev"
                        >
                            <span
                                className="carousel-control-prev-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide="next"
                        >
                            <span
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
