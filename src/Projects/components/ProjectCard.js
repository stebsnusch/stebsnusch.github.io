import React from "react";
import { CardContent, Button, Typography } from "@material-ui/core";

import {
	CardWrapper,
	CardScreenshot,
	StyledCardContent,
	StyledActions,
} from "./cardComponents";

export const ProjectCard = ({ project, theme }) => (
	<CardWrapper elevation={0}>
		<CardContent>
			<CardScreenshot
				borderRadius={30}
				width="100%"
				height="250px"
				background={project.image}
				mb={2}
			></CardScreenshot>
			<Typography variant="h5" component="h5">
				{project.name}
			</Typography>
			<StyledCardContent>
				<Typography variant="body2">{project.description}</Typography>
			</StyledCardContent>
		</CardContent>
		<StyledActions theme={theme}>
			<Button
				style={{ color: theme.palette.initial.default }}
				color="primary"
				variant="contained"
				disableElevation
				fullWidth
				href={project.demo}
				target="_blank"
			>
				Visit
			</Button>
			<Button
				color="primary"
				variant="outlined"
				href={project.repo}
				target="_blank"
				fullWidth
			>
				Source code
			</Button>
		</StyledActions>
	</CardWrapper>
);
