import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import menuBackground from "./../../assets/menuBackground.svg";
import { Box } from "@material-ui/core";

export const Menu = ({ theme, openMenu }) => {
	const MenuBox = styled(Box)`
		display: flex;
		position: fixed;
		z-index: 3;
		padding: ${theme.spacing(1.5)}px;
		border-radius: ${theme.spacing(2)}px;
		top: ${theme.spacing(2)}px;
		left: ${theme.spacing(2)}px;
		box-sizing: border-box;
		background-image: url(${menuBackground});
		cursor: pointer;
	`;

	return (
		<MenuBox onClick={openMenu}>
			<MenuIcon fontSize="large" alt="Menu" />
		</MenuBox>
	);
};
