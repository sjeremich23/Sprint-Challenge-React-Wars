import React, { useEffect } from "react";
import axios from "axios";

const CharacterList = () => {
	useEffect(() => {
		axios
			.get("https://swapi.co/api/people/")
			.then(response => {
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return <div></div>;
};
export default CharacterList;
