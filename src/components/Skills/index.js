import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import DoneIcon from '@material-ui/icons/Done';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { STYLES } from '../../utils/constants';
import { SKILLS } from './constants';

export const Skills = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(40);
  });


  return (
    <Grid item>
      <Typography variant="h3" style={STYLES.SECTION} gutterBottom>Skills</Typography>
      <Grid spacing={1} container>
        {SKILLS.map((item, index) => (
          <Grid key={index} item>
            <Chip
              label={item}
              clickable
              color="primary"
              icon={<DoneIcon />}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

Skills.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}