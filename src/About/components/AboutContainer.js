import styled, { keyframes } from "styled-components";
import { Container } from "@material-ui/core";

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const AboutContainer = styled(Container)`
	z-index: 2;
	animation: ${fadeIn} 1s ease;
`;
