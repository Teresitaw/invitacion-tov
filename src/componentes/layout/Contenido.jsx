import "./Contenido.css";
import { useState } from "react";

const Contenido = () => {
	const [activo, setActivar] = useState(false);

	return (
		<>
			<div className="seccion-solicitudes">
				<div className="contenedor">
					<div className="titulo">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
						</svg>
						<span>Tus solicitudes de amistad</span>
					</div>
					<div className="icono">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
							<path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
						</svg>
					</div>
				</div>

				<div className="solicitud">
					<div className="imagen">
						<img src="./assets/profile.png" alt="solicitud de amistad de Jesús recibida" />
					</div>
					<div className="info">
						<p className="titulo">Jesús Camino Verdad y Vida</p>
					</div>
					<div className="botones">
						<button className="boton azul" onClick={() => setActivar(true)}>
							Aceptar solicitud
						</button>
						<button className="boton">Eliminar</button>
					</div>
				</div>

				{activo && (
					<div className="modal-overlay" onClick={() => setActivar(false)}>
						<div className="modal-body">
							<img src="./assets/overlay2.png" alt="" />
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default Contenido;
