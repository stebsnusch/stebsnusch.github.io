import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { STYLES } from '../../utils/constants';

export const About = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(20);
  });

  return (
    <Grid item>
      <Typography variant="h3" style={STYLES.SECTION} gutterBottom>Introduction</Typography>
      <Typography variant="body1" paragraph>
        Hello, there. My name is Stephany and I am a Brazilian Software Engineer, more specifically located in the city of São Paulo.
        I graduated in the first semester of 2016 at FATEC Rubens Lara and have been collecting professional experience since then.
        </Typography>

      <Typography variant="body1" paragraph>
        I am passionate about coding and am always studying in order to learn something new and find ways to improve my skills.
        My goal is to broaden my possibilities as a professional and to challenge myself into looking for the smartest solutions.
        I just love learning and am widely open to every opportunity to evolve both technically and personally.
      </Typography>

      <Typography variant="body1">
        Diversity and inclusion are topics that hold my interest and I value initiatives with the goal to decrease current the inequality in tech.
      </Typography>
    </Grid>
  );
};

About.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}