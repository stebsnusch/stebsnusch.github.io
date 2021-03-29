import styled, { keyframes } from "styled-components";
import experiencebg from "./../../assets/experienceVector.svg";

const translateY = keyframes`
	from {
		transform: translateY(800px);
	}
	to {
		transform: translateY(0);
	}
`;

export const ExperienceBackground = styled.div`
	background-image: url(${experiencebg});
	position: absolute;
	height: 150vh;
	width: 2000px;
	background-repeat: no-repeat;
	background-size: cover;
	top: 0;
	left: 0;
	z-index: 1;
	animation: ${translateY} 1s ease;
`;
