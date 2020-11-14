import React from 'react';

import {
  Grid,
  Typography,
  Button,
  Container,
  Box,
} from '@material-ui/core';
import { STYLES, GITHUB_PROFILE } from '../../utils/constants';
import { PROJECTS } from './constants';
import { renderProjects } from './renderProjects';

export const Projects = () => (
  <Container style={STYLES.FULLHEIGHT}>
    <Box py={20}>
      <Box pb={5} letterSpacing={15}>
        <Typography variant="h3" color="primary" gutterBottom>
          <strong>projects.</strong>
        </Typography>
      </Box>
      <Box style={STYLES.WHITE_TEXT} mb={5}>
        <Typography>
          My personal playground. These are some projects I did to practice technologies I'm curious about and also reinforce Computer Science concepts.
      </Typography>
      </Box>

      <Grid
        style={STYLES.OVERFLOW_HIDDEN}
        justify="center"
        alignItems="flex-start"
        alignContent="center"
        spacing={5}
        container>
        {PROJECTS.map(renderProjects)}
        <Grid xs={6} item>
          <Button
            color="primary"
            variant="outlined"
            href={GITHUB_PROFILE}
            fullWidth
          >
            See more
            </Button>
        </Grid>
      </Grid>
    </Box>
  </Container>
);