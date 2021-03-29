import styled, { keyframes } from "styled-components";
import homemobilebg from "./../../assets/mobileHomeVector.svg";

const appear = keyframes`
from{
	opacity: 0;
	transform: translateY(500px)
} 
to {
	opacity: 1;
	transform: translateY(0)
}
`;

export const HomeMobileBackground = styled.div`
	background-image: url(${homemobilebg});
	position: absolute;
	height: 100vh;
	width: 2000px;
	background-size: inherit;
	background-repeat: no-repeat;
	top: 0px;
	left: -500px;
	z-index: 1;
	animation: ${appear} 1s ease;
	${({ isTablet }) =>
		isTablet &&
		`	
		background-size: cover;
		top: inherit;
		left: -900px;
    bottom: -150px;
	`}
`;
