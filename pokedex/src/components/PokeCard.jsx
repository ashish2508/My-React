/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function PokeCard(props) {
	const { selectedPokemon } = props;
	const [data, setData] = useState(null);
	const [loading, setloading] = useState(false);
	useEffect(() => {
		if (loading || !localStorage) {
			return;
		}
		let cache = {};
		if (localStorage.getItem("pokedex")) {
			cache = JSON.parse(localStorage.getItem("pokedex"));
		}
		if (selectedPokemon in cache) {
			setData(cache[selectedPokemon]);
			return;
		}
		async function fetchPokemonData() {
			setloading(true);
			try {
				const baseURL = "https://pokeapi.co/api/v2/";
				const suffix = `pokemon/${selectedPokemon}`;
				const finalURL = baseURL + suffix;
				const res = await fetch(finalURL);
				if (!res.ok) {
					throw new Error(`Failed to fetch data for ${selectedPokemon}`);
				}
				const pokemonData = await res.json();
				setData(pokemonData);
				cache[selectedPokemon] = pokemonData;
				localStorage.setItem("pokedex", JSON.stringify(cache));
			} catch (err) {
				console.log(err.message);
			} finally {
				setloading(false);
			}
		}
		fetchPokemonData();
	}, [selectedPokemon]);

	return <div></div>;
}
