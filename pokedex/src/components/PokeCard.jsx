/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function PokeCard(props) {
	const { selectedPokemon } = props;
	const [data, setData] = useState(null);
	const [loading, setloading] = useState(false);
	useEffect(() => {
		//if looading, then exit
		if (loading || !localStorage) {
			return;
		}
		//check if the selected pokemon information is available in the cache
		//1.define the cache
		let cache = {};
		if (localStorage.getItem("pokedex")) {
			cache = JSON.parse(localStorage.getItem("pokedex"));
		}
		//2.check if the selected pokemon is in the cache, otherwise fetch from the API
		if (selectedPokemon in cache) {
			//read from cache

			setData(cache[selectedPokemon]);
			return;
		}
		//if we fetch from the API, make sure to store it the cache so that it won't make any api calls and will rather search in the cache(local storage) for the next time we search
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
        setData(pokemonData)
        cache[selectedPokemon]=pokemonData;
        localStorage.setItem("pokedex",JSON.stringify(cache))
			} catch (err) {
				console.log(err.message);
			} finally {
				setloading(false);
			}
		}
    fetchPokemonData()
	}, [selectedPokemon]);

	return <div></div>;
}
