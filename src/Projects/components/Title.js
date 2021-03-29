import styled, { keyframes } from "styled-components";
import { Box } from "@material-ui/core";

const fadeIn = keyframes`
	from {
		opacity: 0;
    transform: translateY(-20px);
	}
	to {
		opacity: 1;
    transform: translateY(0);
	}
`;

export const Title = styled(Box)`
	animation: ${fadeIn} 1s ease;
	z-index: 2;
`;
