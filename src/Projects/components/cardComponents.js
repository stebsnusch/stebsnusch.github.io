import styled from "styled-components";
import { Card, Box, CardActions } from "@material-ui/core";

export const CardWrapper = styled(Card)`
	max-width: 300px;
	margin: 0 auto;
`;

export const CardScreenshot = styled(Box)`
  background-image: url(${({ background }) => background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height 250px;
`;

export const StyledCardContent = styled(Box)`
	height: 70px;
`;

export const StyledActions = styled(CardActions)`
	padding: ${({ theme }) => `${theme.spacing(2)}px`};
`;
