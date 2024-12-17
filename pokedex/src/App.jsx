import { useState } from "react";
import Header from "./components/Header";
import PokeCard from "./components/PokeCard";
import SideNav from "./components/SideNav";
function App() {
	const [selectedPokemon, setSelectedPokemon] = useState(0);
	const [showSideMenu, setShowSideMenu] = useState(true);

	function handleToggleMenu() {
		setShowSideMenu(!showSideMenu);
	}
	return (
		<>
			<Header handleToggleMenu={handleToggleMenu} />
			<SideNav
				selectedPokemon={selectedPokemon}
				setSelectedPoekmon={setSelectedPokemon}
				showSideMenu={showSideMenu}
				handleToggleMenu={handleToggleMenu}
			/>
			<PokeCard selectedPokemon={selectedPokemon} />
		</>
	);
}
export default App;
