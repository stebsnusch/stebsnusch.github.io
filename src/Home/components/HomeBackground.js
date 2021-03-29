import styled, { keyframes } from "styled-components";
import homebg from "./../../assets/homeVector.svg";

const appear = keyframes`
from{
	opacity: 0;
	transform: scale(0) rotate(
		-90deg
		);
} 
to {
	opacity: 1;
	transform: scale(1) rotate(
		0
		);
}
`;

export const HomeBackground = styled.div`
	background-image: url(${homebg});
	position: absolute;
	height: 100vh;
	width: 800px;
	background-size: contain;
	background-repeat: no-repeat;
	top: -250px;
	left: -250px;
	z-index: 1;
	animation: ${appear} 1s ease;
`;
