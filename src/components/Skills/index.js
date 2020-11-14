import React from 'react';
import {
  Chip,
  Grid,
} from '@material-ui/core';
import { SKILLS } from './constants';

export const Skills = () => {

  return (
    SKILLS.map((item, index) => (
      <Grid key={index} item>
        <Chip
          label={item}
          clickable
          color="primary"
          variant="outlined"
        />
      </Grid>
    ))
  );
};