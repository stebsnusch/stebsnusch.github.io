import React, { Fragment, useRef } from "react";
import { withTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useIsVisible } from "react-is-visible";

import { Box, Container, Typography, Grid } from "@material-ui/core";

import { COMPANIES } from "./constants";

import { ExperienceBackground } from "./components/ExperienceBackground";
import { Title } from "./components/Title";
import { Subheading } from "./components/Subheading";
import { Content } from "./components/Content";
import { CompanyCard } from "./components/companyCard";

export const Experience = ({ theme }) => {
	const nodeRef = useRef();
	const isVisible = useIsVisible(nodeRef);
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box display="flex" width="100%" ref={nodeRef}>
			{isVisible && (
				<Fragment>
					<Container style={{ zIndex: 2 }} maxWidth="md">
						<Title mb={5}>
							<Typography variant="h2" component="h3" color="primary">
								Work
							</Typography>
							<Typography variant="h2" component="h3" color="primary">
								Experience
							</Typography>
						</Title>
						<Subheading mb={5}>
							<Typography
								variant="body1"
								component="p"
								style={{ color: theme.palette.tertiary.main }}
							>
								Click in a company card to know more about the work I did there.
							</Typography>
						</Subheading>
						<Content spacing={2} container>
							{COMPANIES.map((company, index) => (
								<Grid xs={12} sm={12} md={company.size} key={index} item>
									<CompanyCard company={company} />
								</Grid>
							))}
						</Content>
					</Container>
					<ExperienceBackground isMobile={isMobile} />
				</Fragment>
			)}
		</Box>
	);
};

export default withTheme(Experience);
