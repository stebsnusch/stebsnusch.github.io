import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Avatar,
} from '@material-ui/core';
import { CHARACTERISTICS } from './constants';
import { renderCharacteristics } from './renderCharacteristics';
import { STYLES } from '../../utils/constants';
import { HeadingDivider } from '../../utils/HeadingDivider';

export const Header = () => (
  <Container>
    <Box py={8} height="100%" style={STYLES.FULLHEIGHT} display="flex" alignItems="center">
      <Grid container spacing={2} alignItems="center">
        <Grid md={4} sm={12} item>
          <Avatar
            src={require('../../assets/profile_pic.jpg')}
            alt="Stephany Nusch -  Girl mdiling at the camera"
            style={STYLES.AVATAR}
          />
        </Grid>
        <Grid item sm={12} md={8}>
          <Typography variant="h1" align="left">
            <Box letterSpacing={15} fontWeight="600">
              Stephany Nusch
          </Box>
          </Typography>
          <Typography variant="h3" align="left" color="textSecondary">
            <Box letterSpacing={15}>
              <strong>software engineer.</strong>
            </Box>
          </Typography>
          <HeadingDivider />
          <Grid container spacing={1}>
            {CHARACTERISTICS.map(renderCharacteristics)}
          </Grid>
        </Grid>

      </Grid>
    </Box>
  </Container>
);

