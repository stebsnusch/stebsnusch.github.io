import styled, { keyframes } from "styled-components";
import contactsbg from "./../../assets/ContactsVector.svg";

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

export const ContactBackgroundLight = styled.div`
	background-image: url(${contactsbg});
	background-size: cover;
	position: absolute;
	height: 100vh;
	width: 100%;
	background-repeat: no-repeat;
	bottom: 0;
	left: 0;
	z-index: 1;
	animation: ${appear} 1s ease;
`;
