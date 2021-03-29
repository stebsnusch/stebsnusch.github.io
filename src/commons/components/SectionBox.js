import styled from "styled-components";
import withWidth from "@material-ui/core/withWidth";

import { Box } from "@material-ui/core";

const SectionBox = styled(Box)`
	background-color: ${({ backgroundcolor }) => backgroundcolor};
	height: ${({ isMobile, id }) =>
		isMobile && id === "experience" ? "120vh" : "100vh"};
	display: flex;
	align-items: center;
	position: relative;
	overflow: hidden;
	padding: ${({ isMobile, id, theme }) =>
		isMobile && id === "experience" && `${theme.spacing(4)}px 0`};
`;

export default withWidth()(SectionBox);
