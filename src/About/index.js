import React, { Fragment, useRef } from "react";
import { useIsVisible } from "react-is-visible";
import { withTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Box, Typography } from "@material-ui/core";
import { AboutBackground } from "./components/AboutBackground";
import { AboutContainer } from "./components/AboutContainer";

export const About = ({ theme }) => {
	const nodeRef = useRef();
	const isVisible = useIsVisible(nodeRef, { once: true });
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box display="flex" alignItems="center" width="100%" ref={nodeRef}>
			{isVisible && (
				<Fragment>
					<AboutContainer maxWidth="md">
						<Box textAlign={isMobile ? "center" : "inherit"} mb={5}>
							<Typography
								variant="h2"
								component="h3"
								align={isMobile ? "center" : "inherit"}
								color="textSecondary"
							>
								<strong>Hello, there!</strong>
							</Typography>
						</Box>
						<Box mb={5}>
							<Typography
								variant="body1"
								component="p"
								align={isMobile ? "center" : "inherit"}
								color="textSecondary"
							>
								My name is Stephany (she/her), and I am a Brazilian Software
								Engineer.
							</Typography>
						</Box>
						<Box mb={5}>
							<Typography
								variant="body1"
								component="p"
								align={isMobile ? "center" : "inherit"}
								color="textSecondary"
							>
								I love learning and am widely open to every opportunity to
								evolve technically and personally.
							</Typography>
						</Box>
						<Box>
							<Typography
								variant="body1"
								component="p"
								align={isMobile ? "center" : "inherit"}
								color="textSecondary"
							>
								Diversity and inclusion are topics that hold my interest, and I
								value initiatives to decrease the current inequality in tech.
							</Typography>
						</Box>
					</AboutContainer>
					<AboutBackground isMobile={isMobile} />
				</Fragment>
			)}
		</Box>
	);
};

export default withTheme(About);
