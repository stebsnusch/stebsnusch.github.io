import React, { Fragment, useRef } from "react";
import { useIsVisible } from "react-is-visible";
import { withTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Box, Typography } from "@material-ui/core";

import profilePic from "./../assets/profilepic.png";

import { HomeBackground } from "./components/HomeBackground";
import { HomeMobileBackground } from "./components/HomeMobileBackground";
import { ProfilePicture } from "./components/ProfilePicture";
import { TitleBox } from "./components/TitleBox";

export const Home = ({ theme }) => {
	const nodeRef = useRef();
	const isVisible = useIsVisible(nodeRef, { once: true });
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
	const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

	return (
		<Box
			height="100vh"
			width="100%"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection={(isMobile || isTablet) && "column"}
			ref={nodeRef}
		>
			{isVisible && (
				<Fragment>
					<Box
						display="flex"
						justifyContent="center"
						alignItems="center"
						style={{
							position: "relative",
						}}
					>
						<ProfilePicture
							isMobile={isMobile}
							src={profilePic}
							alt="Stephany Nusch"
						/>
						{!isMobile && !isTablet && <HomeBackground />}
					</Box>

					<TitleBox
						isMobile={isMobile}
						ml={20}
						display="flex"
						flexDirection="column"
					>
						<Typography
							align={isMobile ? "center" : "left"}
							color={isMobile ? "textSecondary" : "secondary"}
							variant="h1"
							component="h1"
						>
							Stephany Nusch
						</Typography>
						<Typography
							align={isMobile ? "center" : "left"}
							variant="h2"
							component="h2"
							color={isMobile ? "textSecondary" : "inherit"}
							style={{ fontWeight: 300 }}
						>
							Frontend Engineer
						</Typography>
					</TitleBox>
					{(isMobile || isTablet) && (
						<HomeMobileBackground isTablet={isTablet} />
					)}
				</Fragment>
			)}
		</Box>
	);
};

export default withTheme(Home);
