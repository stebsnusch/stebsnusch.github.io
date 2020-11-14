import React from 'react';
import { Grid, Chip } from '@material-ui/core';

export const renderCharacteristics = (item, index) =>
  <Grid key={index} item>
    <Chip
      key={index}
      label={item}
      color="secondary"
      variant="outlined"
    />
  </Grid>
