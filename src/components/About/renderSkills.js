import React from 'react';
import {
  Chip,
  Grid,
} from '@material-ui/core';

export const renderSkills = (item, index) => (
  <Grid key={index} item>
    <Chip
      label={item}
      clickable
      color="primary"
      variant="outlined"
    />
  </Grid>
);