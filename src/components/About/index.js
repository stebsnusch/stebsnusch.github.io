import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { STYLES } from '../../utils/constants';

export const About = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(25);
  });

  return (
    <Grid item>
      <Typography variant="h3" style={STYLES.SECTION} gutterBottom>About me</Typography>
      <Typography>
        I work as a Software Engineer and am constantly studying to keep up with the latest technologies and Design Patterns.
        I am also familiar with UX concepts and Agile methodology. My goal is to broaden my possibilities as a professional and to
        challenge myself into looking for the smartest solutions. I am passionate about learning and am widely open to every
        opportunity to develop my technical skills.
      </Typography>
    </Grid>
  );
};

About.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}