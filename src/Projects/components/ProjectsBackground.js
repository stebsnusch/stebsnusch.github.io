import styled, { keyframes } from "styled-components";
import projectsbg1 from "./../../assets/projectsVector1.svg";
import projectsbg2 from "./../../assets/projectsVector2.svg";

const appear = keyframes`
from{
	opacity: 0;
	transform: translateY(500px);
} 
to {
	opacity: 1;
	transform: translateY(0);
}
`;

export const ProjectsBackgroundCoral = styled.div`
	background-image: url(${projectsbg1});
	background-size: cover;
	position: absolute;
	height: 500px;
	width: 100%;
	background-repeat: no-repeat;
	bottom: 0;
	z-index: 1;
	animation: ${appear} 1s ease;
	${({ isMobile }) =>
		isMobile &&
		`
		bottom: -200px;
	`}
`;
export const ProjectsBackgroundBlue = styled.div`
	background-image: url(${projectsbg2});
	background-size: cover;
	position: absolute;
	height: 500px;
	width: 100%;
	background-repeat: no-repeat;
	bottom: 0;
	z-index: 1;
	animation: ${appear} 1s ease;
	${({ isMobile }) =>
		isMobile &&
		`
		bottom: -200px;
	`}
`;
