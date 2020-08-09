import React from 'react';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { STYLES } from '../../utils/constants';
import { CHARACTERISTICS } from './constants';

export const Header = () => (
  <Box py={8}>
    <Grid direction="column" justify="center" spacing={2} alignItems="center" container>
      <Grid item>
        <Avatar alt="Stephany Nusch" src={require('../../assets/profile_pic.png')} style={STYLES.AVATAR} />
      </Grid>
      <Grid item>
        <Typography variant="h1" align="center" style={STYLES.TITLE}>Stephany Nusch</Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" style={STYLES.SUBTITLE}>Software Engineer</Typography>
        <Grid spacing={1} justify="center" container>
          {CHARACTERISTICS.map((item, index) => (
            <Grid key={index} item>
              <Chip size="small" label={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </Box>
);

