import React from 'react';

import {
  Typography,
  Box,
  Grid
} from '@material-ui/core';

import { STYLES } from '../../utils/constants';
import { SKILLS } from './constants';
import { renderSkills } from './renderSkills';

export const About = () => (
  <Box
    style={STYLES.FULLHEIGHT}
    display="flex"
    alignItems="center"
    pb={5}
  >
    <Box style={STYLES.WHITE_TEXT}>
      <Typography variant="h3" color="primary" gutterBottom>
        <Box letterSpacing={15} my={5}>
          <strong>about.</strong>
        </Box>
      </Typography>

      <Typography align="justify" paragraph>
        Hello, there. My name is Stephany (she/her), and I am a Brazilian Software Engineer, more specifically located in the city of São Paulo.
        I graduated in the first semester of 2016 at FATEC Rubens Lara and have been collecting professional experience since then.
              </Typography>

      <Typography align="justify" paragraph>
        I am passionate about coding and am always studying to learn something new and find ways to improve my skills.
        My goal is to broaden my possibilities as a professional and to challenge myself to look for the smartest solutions.
        I love learning and am widely open to every opportunity to evolve technically and personally.
              </Typography>

      <Typography align="justify">
        Diversity and inclusion are topics that hold my interest, and I value initiatives to decrease the current inequality in tech.
              </Typography>


      <Typography variant="h3" color="primary" gutterBottom>
        <Box letterSpacing={15} my={5}>
          <strong>skills.</strong>
        </Box>
      </Typography>

      <Grid spacing={2} justify="space-between" container>
        { SKILLS.map(renderSkills) }
      </Grid>
    </Box>
  </Box>
);