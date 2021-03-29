import React from "react";
import styled from "styled-components";
import { Box, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { theme } from "../../commons/theme";

const CustomBox = styled(Box)`
	position: absolute;
	right: ${theme.spacing(2)}px;
	top: ${theme.spacing(1)}px;
	color: ${theme.palette.grey[500]};
`;

export const CloseButton = ({ onClose }) => {
	return (
		<CustomBox>
			<IconButton onClick={onClose} aria-label="close">
				<CloseIcon />
			</IconButton>
		</CustomBox>
	);
};
