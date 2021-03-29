import React, { Fragment, useRef } from "react";
import Slider from "react-slick";
import { useIsVisible } from "react-is-visible";

import { withTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import { Box, Container, Typography } from "@material-ui/core";
import {
	ProjectsBackgroundBlue,
	ProjectsBackgroundCoral,
} from "./components/ProjectsBackground";

import { Title } from "./components/Title";
import { Subheading } from "./components/Subheading";
import { Content } from "./components/Content";

import { PROJECTS } from "./constants";
import { ProjectCard } from "./components/ProjectCard";

export const Projects = ({ theme }) => {
	const nodeRef = useRef();
	const isVisible = useIsVisible(nodeRef);
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const sliderSettings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 600,
				settings: {
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1,
					initialSlide: 1,
				},
			},
		],
	};

	return (
		<Box display="flex" width="100%" ref={nodeRef}>
			{isVisible && (
				<Fragment>
					<Container style={{ zIndex: 2 }} maxWidth="md">
						<Title mb={5}>
							<Typography
								variant="h3"
								component="h3"
								style={{ color: theme.palette.tertiary.main }}
								align="right"
							>
								Personal projects
							</Typography>
						</Title>
						<Subheading mb={5}>
							<Typography
								variant="body1"
								component="p"
								color="primary"
								align="right"
							>
								Every once in a while I practice my skills building these
							</Typography>
						</Subheading>
						<Content>
							<Slider {...sliderSettings}>
								{PROJECTS.map((project, index) => (
									<ProjectCard key={index} project={project} theme={theme} />
								))}
							</Slider>
						</Content>
					</Container>
					<ProjectsBackgroundCoral isMobile={isMobile} />
					<ProjectsBackgroundBlue isMobile={isMobile} />
				</Fragment>
			)}
		</Box>
	);
};

export default withTheme(Projects);
