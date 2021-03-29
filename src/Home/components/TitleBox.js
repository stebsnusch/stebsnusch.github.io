import styled, { keyframes } from "styled-components";
import { Box } from "@material-ui/core";

const appear = keyframes`
  from{
    opacity: 0;
  } 
  to {
    opacity: 1;
  }
`;

export const TitleBox = styled(Box)`
	animation: ${appear} 2s ease;
	z-index: 2;
	${({ isMobile }) => isMobile && "margin-left: 0;"}
`;
