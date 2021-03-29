import styled, { keyframes } from "styled-components";
import { Grid } from "@material-ui/core";

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

export const Content = styled(Grid)`
	animation: ${fadeIn} 1s ease;
`;
