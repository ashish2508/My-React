// @ts-nocheck
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { getFullPokedexNumber, getPokedexNumber } from "../utils";
import TypeCard from "./TypeCard";

export default function PokeCard(props) {
	const { selectedPokemon } = props;
	const [data, setData] = useState(null);
	const [loading, setloading] = useState(false);

	const { name, height, abilities, stats, types, moves, sprites } = data || {};

	const imgList = Object.keys(sprites || {}).filter((val) => {
		if (!sprites[val]) {
			return false;
		}
		if (["versions", "other"].includes(val)) {
			return false;
		}
		return true;
	});

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
				const suffix = `pokemon/${getPokedexNumber(selectedPokemon)}`;
				const finalURL = baseURL + suffix;
				const res = await fetch(finalURL);
				if (!res.ok) {
					throw new Error(`Failed to fetch data for ${selectedPokemon}`);
				}
				const pokemonData = await res.json();
				setData(pokemonData);
				console.log(pokemonData);
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
	if (loading || !data) {
		return (
			<div>
				<h4>Loading....</h4>
			</div>
		);
	}
	return (
		<div className="poke-card">
			<div>
				<h4>#{getFullPokedexNumber(selectedPokemon)}</h4>
				<h2>{name}</h2>
			</div>
			<div className="type-container">
				{types.map((typeObj, typeIndex) => {
					return <TypeCard key={typeIndex} type={typeObj?.type?.name} />;
				})}
			</div>
			<img
				className="default-img"
				src={"/pokemon/" + getFullPokedexNumber(selectedPokemon) + ".png"}
				alt={`${name}-large-img`}
			/>
			<div className="img-container">
				{imgList.map((spriteUrl, spriteIndex) => {
					const imgUrl = sprites[spriteUrl];
					return (
						<img
							key={spriteIndex}
							src={imgUrl}
							alt={`${name}-img-${spriteUrl}`}
							style={{
								fontWeight: "bold",
								borderStyle: "ridge",
								borderWidth: "5px",
								borderColor: "cyan",
								borderRadius: "0",
								cursor: "pointer",
							}}
						/>
					);
				})}
			</div>
			<h3 style={{ color: "#7AC74C" }}>STATS</h3>
			<div className="stats-card">
				{stats.map((statObj, statIndex) => {
					const { stat, base_stat } = statObj;
					return (
						<div key={statIndex} className="stat-item">
							<p
								style={{
									fontWeight: "bold",
									letterSpacing: "3px",
									fontFamily: "JetBrains Mono",
								}}
							>
								{stat?.name.replaceAll("-", " ")}
							</p>
							<h4 style={{ fontFamily: "JetBrains Mono" }}>{base_stat}</h4>
						</div>
					);
				})}
			</div>
			<h3 style={{ color: "darkmagenta" }}>MOVES</h3>
			<div className="pokemon-move-grid">
				{moves.map((moveObj, moveIndex) => {
					return (
						<button
							className="button-card pokemon-move"
							key={moveIndex}
							onClick={() => {}}
						>
							<p style={{fontFamily:"Fira Code"}}>{moveObj?.move?.name.replaceAll("-", " ")}</p>
						</button>
					);
				})}
			</div>
		</div>
	);
}
