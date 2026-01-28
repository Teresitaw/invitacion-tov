import "./Footer.css";

const Footer = () => {
	return (
		<>
			<footer className="footer">
				<a className="logo" href="https://teresitaw.github.io/links/" target="_blank">
					<img src="/assets/logo.jpg" alt="logo de teresitaw" />
					<p>© 2026 Teresitaw - Desarrolladora web & Freelancer</p>
				</a>
				<nav className="links">
					<a href="#">Términos y Condiciones</a>
					<a href="#">Política de Privacidad</a>
				</nav>
			</footer>
		</>
	);
};

export default Footer;
