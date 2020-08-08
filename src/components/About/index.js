import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { avatarStyle, titleStyle, subtitleStyle } from './styles';

export const About = () => (
  <Box mt={10} p={6}>
    <Grid direction="row" justify="space-around" spacing={2} alignItems="center" container fullWidth>
      <Grid item>
        <Avatar alt="Stephany Nusch" src={require('../../assets/profile_pic.png')} style={avatarStyle} />
      </Grid>
      <Grid item>
        <Typography variant="h1" style={titleStyle}>Stephany Nusch</Typography>
        <Typography variant="subtitle1" color="grey" style={subtitleStyle}>Get to know me better!</Typography>
      </Grid>
    </Grid>
  </Box>
);
