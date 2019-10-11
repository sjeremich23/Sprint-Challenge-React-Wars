import React from "react";
import styled from "styled-components";

const CardWrapper = styled.div`
	margin: 0 auto;
	background-color: #fff;
	box-shadow: 0 5px 10px 0px #000;
	width: 20%;
`;

const CharacterCard = props => {
	// console.log(props);

	return (
		<CardWrapper>
			<h2>{props.character.name}</h2>
			<p>{`Gender: ${props.character.gender}`}</p>
		</CardWrapper>
	);
};

export default CharacterCard;
