import { useState } from "react";
import { first151Pokemon, getFullPokedexNumber } from "../utils";
export default function SideNav(props) {
	const { selectedPokemon, setSelectedPoekmon, handleToggleMenu,showSideMenu } = props;
	const [searchValue, setSearchValue] = useState("");
	const filteredPokemon = first151Pokemon.filter((ele, eleIndex) => {
		if (getFullPokedexNumber(eleIndex).includes(searchValue.toLowerCase())) {
			return true;
		}
		if (ele.toLowerCase().includes(searchValue.toLowerCase())) {
			return true;
		}

		return false;
	});

	return (
		<nav className={" " + (!showSideMenu ? "open" : "")}>
			<div className={"header " + (!showSideMenu ? "open" : "")}>
				<button className="open-nav-button" onClick={handleToggleMenu}>
					←
				</button>
				<h1 className="text-gradient">Pokédex</h1>
			</div>
			<input
				placeholder="E.g. 001 or Bulbasaur"
				type="text"
				value={searchValue}
				onChange={(e) => {
					setSearchValue(e.target.value);
				}}
			/>
			{filteredPokemon.map((pokemon, pokemonIndex) => {
				const truePokedexNumber = first151Pokemon.indexOf(pokemon);
				return (
					<button
						onClick={() => {
							setSelectedPoekmon(truePokedexNumber);
              handleToggleMenu();//closed the nav
						}}
						key={pokemonIndex}
						className={
							"nav-card" +
							(pokemonIndex === selectedPokemon ? "nav-card-selected" : " ")
						}
					>
						<p>{getFullPokedexNumber(truePokedexNumber)}</p>
						<p>{pokemon}</p>
					</button>
				);
			})}
		</nav>
	);
}
