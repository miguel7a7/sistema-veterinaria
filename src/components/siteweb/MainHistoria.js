import React from "react";
import historiaLogo from "../../assets/svg/historia.svg";

export const MainHistoria = () => {
    return (
        <div className="container-fluid carousel__container main__paralax">
            <div className="container h-100 d-flex justify-content-center flex-column">
                <h2 className="py-3 spacing text-danger text__claro">
                    <img src={historiaLogo} alt="logo-historia" width="50px" />
                    Historia
                </h2>
                <p className="spacing fs-5 text__claro">
                    Este proyecto inicio en el 2005 con un pequeño consultorio
                    en un garaje de la Calle. portocarrero #1794 en la zona
                    Villa-Copacabana. Posterior nos mudamos a una calle Tito
                    Yupanqui de la misma zona, y desde allí crecimos junsto a
                    ustedes. Luego de dos años y con la idea de implementar
                    equipos diagnósticos y terapéuticos, ampliamos y ahora somo
                    una de las mejores vterinarias.
                </p>
                <p className="spacing fs-5 text__claro">
                    La historia nos ha enseñado que sin importar el lugar donde
                    estemos, siempre podremos ofrecer la misma calidez,
                    confianza y profesionalismo hacia nuestras mascotas,
                    nuestros pacientes.
                </p>
            </div>
        </div>
    );
};
