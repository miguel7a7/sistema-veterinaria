import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoDog from "../assets/svg/logo-dog.svg";
import svgReloj from "../assets/svg/reloj.svg";
import svgContacto from "../assets/svg/contactos.svg";

export const NavBar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light  bg-light">
            <div className="container">
                <Link className="navbar-brand text-danger" to="/">
                    <span className="h2 spacing">
                        <h4 className="text-secondary">
                            Veterinaria <img src={logoDog} alt="logo-dog" />
                        </h4>{" "}
                        HUELLITAS{" "}
                    </span>
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarText"
                    aria-controls="navbarText"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <div className="ms-auto">
                        <div className="row">
                            <div className="col-md-6">
                                <img
                                    src={svgReloj}
                                    className="me-2"
                                    alt="logo-reloj"
                                />
                                08:00am - 19:00pm
                            </div>
                            <div className="col-md-6">
                                <img
                                    src={svgContacto}
                                    className="me-2"
                                    alt="logo-contacto"
                                />
                                68166974 - 69755384
                            </div>
                        </div>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-1 menu__link">
                                <NavLink
                                    className="nav-link active"
                                    aria-current="page"
                                    to="/"
                                >
                                    NOSOTROS
                                </NavLink>
                            </li>
                            <li className="nav-item mx-1 menu__link">
                                <NavLink className="nav-link" to="/">
                                    SERVICIOS
                                </NavLink>
                            </li>
                            <li className="nav-item mx-1 menu__link">
                                <NavLink className="nav-link" to="/">
                                    GALERIA
                                </NavLink>
                            </li>
                            <li className="nav-item mx-1 menu__link">
                                <NavLink className="nav-link" to="/">
                                    TIENDA
                                </NavLink>
                            </li>
                            <li className="nav-item mx-1 menu__link">
                                <NavLink className="nav-link" to="/">
                                    CONTACTOS
                                </NavLink>
                            </li>
                            <li className="nav-item mx-1 menu__link">
                                <NavLink className="nav-link" to="/">
                                    LOGIN
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
