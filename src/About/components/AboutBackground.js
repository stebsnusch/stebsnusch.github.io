import styled, { keyframes } from "styled-components";
import aboutbg from "./../../assets/aboutVector.svg";

const translateX = keyframes`
	from {
		transform: translateX(-800px);
	}
	to {
		transform: translateX(0);
	}
`;

export const AboutBackground = styled.div`
	background-image: url(${aboutbg});
	position: absolute;
	height: 120vh;
	width: 1000px;
	left: 0;
	background-repeat: no-repeat;
	background-size: cover;
	top: -100px;
	z-index: 1;
	animation: ${translateX} 1s ease;
		${({ isMobile }) =>
			isMobile &&
			`
				width: 500px;
		`}
		
	};
`;
