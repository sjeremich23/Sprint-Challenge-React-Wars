import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
	const [characters, setCharacters] = useState([]);
	useEffect(() => {
		axios
			.get("https://swapi.co/api/people/")
			.then(response => {
				// console.log(response.data.results);
				setCharacters(response.data.results);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<div>
			{characters.map((character, i) => {
				return <CharacterCard key={i} character={character} />;
			})}
		</div>
	);
};
export default CharacterList;
