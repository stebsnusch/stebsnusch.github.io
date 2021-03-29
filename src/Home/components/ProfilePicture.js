import styled, { keyframes } from "styled-components";

const grow = keyframes`
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ProfilePicture = styled.img`
	${({ isMobile }) => isMobile && "width: 300px; height: 300px;"}
	animation: ${grow} 1s ease;
	z-index: 2;
`;
