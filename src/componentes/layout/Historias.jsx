import "./Historias.css";

const Historias = () => {
	return (
		<>
			<section className="stories">
				<div className="story crear">
					<img className="perfil" src="./assets/perfil.webp" alt="" />
					<div className="plus">+</div>
					<span>Crear historia</span>
				</div>

				<div className="story">
					<img src="./assets/story1.webp" alt="" />
					<span>Jesus te está esperando</span>
				</div>

				<div className="story">
					<img src="./assets/story2.webp" alt="" />
					<span>Jesus quiere ser tu amigo</span>
				</div>

				<div className="story">
					<img src="./assets/story3.webp" alt="" />
					<span>Déjalo encontrarte</span>
				</div>

				<div className="story">
					<img src="./assets/story4.webp" alt="" />
					<span>Déjalo sanarte</span>
				</div>
			</section>
		</>
	);
};

export default Historias;
