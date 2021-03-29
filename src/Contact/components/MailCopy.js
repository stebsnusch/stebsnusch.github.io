import styled from "styled-components";
import { Box, InputBase, Button } from "@material-ui/core";

export const MailCopy = styled(Box)`
	width: fit-content;
	background-color: ${({ theme }) => theme.palette.primary.light};
	border-radius: ${({ theme }) => theme.spacing(4)}px;
	border: 5px solid ${({ theme }) => theme.palette.primary.main};
	padding: ${({ theme }) => theme.spacing(1)}px;
	font-size: 1rem;
`;

export const MailInput = styled(InputBase)`
	font-size: 1.5rem;
	padding-left: 20px;
	color: ${({ theme }) => theme.palette.primary.main};
`;

export const MailButton = styled(Button)`
	color: ${({ theme }) => theme.palette.initial.default};
`;
