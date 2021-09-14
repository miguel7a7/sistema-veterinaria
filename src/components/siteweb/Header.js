import React from "react";
import fondo1 from "../../assets/images/fondo1.jpg";
import fondo2 from "../../assets/images/fondo2.jpg";
import fondo3 from "../../assets/images/fondo4.jpg";

export const Header = () => {
    return (
        <>
            <div
                id="carouselExampleDark"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
                data-bs-pause="false"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleDark"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div
                        className="carousel-item active"
                        data-bs-interval="7000"
                    >
                        <div className="carousel__titulo d-none d-lg-flex text-info">
                            <h1 className="text-danger">
                                Brindar cuidados especiales
                            </h1>
                            <h2 className="text-danger">Para sus mascotas</h2>
                        </div>
                        <img
                            src={fondo1}
                            className="d-block w-100"
                            alt="fondo-1"
                        />

                        {/* <div className="carousel-caption d-block">
							<h5>Juntos con Nuestras Mascotas</h5>
						</div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="7000">
                        <div className="carousel__titulo d-none d-lg-flex text-info">
                            <h1 className="text-danger">¡Tu mascota está</h1>
                            <h2 className="text-danger">
                                en buenas manos con nosotros!
                            </h2>
                            <h6>
                                Trabajamos contigo por la salud de tu mascota
                            </h6>
                        </div>
                        <img
                            src={fondo2}
                            className="d-block w-100"
                            alt="fondo-2"
                        />
                        {/* <div className="carousel-caption">
							<h5>Lo Dejas en BUENAS Manos</h5>
						</div> */}
                    </div>
                    <div className="carousel-item" data-bs-interval="7000">
                        <div className="carousel__titulo d-none d-lg-flex text-info">
                            <h1 className="text-danger">
                                Deje que su mascota reciba
                            </h1>
                            <h2 className="text-danger">
                                la mejor atención en nuestro centro.
                            </h2>
                        </div>
                        <img
                            src={fondo3}
                            className="d-block w-100"
                            alt="fondo-3"
                        />
                        {/* <div className="carousel-caption d-block">
							<h5>Personal Calificado y Garantizado</h5>
						</div> */}
                    </div>
                </div>
            </div>
        </>
    );
};
