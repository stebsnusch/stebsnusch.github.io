import styled, { keyframes } from "styled-components";
import { Box } from "@material-ui/core";

const fadeIn = keyframes`
	from {
		opacity: 0;
    transform: translateX(20px);
	}
	to {
		opacity: 1;
    transform: translateX(0);
	}
`;

export const Subheading = styled(Box)`
	animation: ${fadeIn} 1s ease;
	z-index: 2;
`;
