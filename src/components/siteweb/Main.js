import React from "react";
import cachorroHieso from "../../assets/images/cachorro-hieso.jpg";
export const Main = () => {
	return (
		<div className="container-fluid my-5">
			<div className="container">
				<div className="row d-flex justify-content-evenly">
					<div className="col-md-5">
						<img
							src={cachorroHieso}
							alt="dog-hieso"
							className="img-fluid"
						/>
					</div>
					<div className="col-md-5">
						<h2 className="text-info">Sobre Nosotros</h2>
						<p>
							Somos una veterinaria privada confiable con más de
							10 años de experiencia médica. Nuestros personal
							están altamente calificados y siempre a la
							vanguardia con los últimos protocolos diagnósticos.
						</p>
						<p>
							Somos desde hace 7 años los iniciadores del uso de
							la video endoscopia veterinaria como herramienta
							diagnóstica y terapéutica en el La Paz - Bolivia.
						</p>
						<p>
							Además de nuestros personal especialistas trabajamos
							con médicos colaboradores externos en diferentes
							especialidades, con lo cual nos ayuda a ofrecerles
							un servio integral para sus mascotas.
						</p>
					</div>
				</div>
			</div>

			<div className="bg-info text-white">
				<div className="row d-flex justify-content-evenly">
					<div className="col-md-3 bg-danger">Total Clientes</div>
					<div className="col-md-3 bg-success">
						Casos Clinicos Mensuales
					</div>
					<div className="col-md-3 bg-danger">Años de Experiecia</div>
				</div>
			</div>
		</div>
	);
};
