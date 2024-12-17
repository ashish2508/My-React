export default function Header(props) {
	const { handleToggleMenu } = props;

	return (
		<header>
			<button className="open-nav-button" onClick={handleToggleMenu}>
				<span className="material-symbols-outlined">menu</span>
			</button>
			<h1 className="text-gradient">Pokédex</h1>
		</header>
	);
}
