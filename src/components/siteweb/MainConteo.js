import React from "react";
import userLogo from "../../assets/svg/user.svg";
import copaLogo from "../../assets/svg/cup.svg";
import vacunaLogo from "../../assets/svg/vacuna.svg";

export const MainConteo = () => {
    return (
        <div
            className="container-fluid bg-info py-4 mt-3"
            style={{ color: "#bcb4b4" }}
        >
            <div className="row d-flex justify-content-evenly py-5">
                <div className="col-md-3">
                    <div className="bg-transparent text-center">
                        <img
                            className="img-thumbnail my-2 bg-transparent border-0"
                            src={userLogo}
                            alt="user-logo"
                            width="70px"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                        />
                        <h2 className="my-2 text-white">728</h2>
                        <p className="text-uppercase">Cantidad Clientes</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="bg-transparent text-center">
                        <img
                            className="img-thumbnail my-2 bg-transparent border-0"
                            src={copaLogo}
                            alt="user-logo"
                            width="70px"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                        />
                        <h2 className="my-2 text-white">18</h2>
                        <p className="text-uppercase">Casos Mensuales</p>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="bg-transparent text-center">
                        <img
                            className="img-thumbnail my-2 bg-transparent border-0"
                            src={vacunaLogo}
                            alt="user-logo"
                            width="70px"
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                        />
                        <h2 className="my-2 text-white">5</h2>
                        <p className="text-uppercase">Años de Experiencia</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
