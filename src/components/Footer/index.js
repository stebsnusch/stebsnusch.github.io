import React from 'react';

import {
  Typography,
  Button,
  Grid,
  Box,
  Container,
  Link,
} from '@material-ui/core';
import { STYLES } from '../../utils/constants';
import { SOCIAL_MEDIA } from './constants';

export const Footer = () => (
  <Container component="footer">
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="stretch"
      alignContent="center"
      textAlign="center"
      style={STYLES.WHITE_TEXT}
      py={10}
    >
      <Typography variant="h3" color="primary" gutterBottom>
        <Box letterSpacing={15}>
          <strong>contact me.</strong>
        </Box>
      </Typography>

      <Box mb={3}>
        <Typography align="center" paragraph>
          Grab your cup of tea and let's have a chat! Just email <Link href="mailto:contact@stebs.dev">contact@stebs.dev</Link> and we can set up a meeting.
        </Typography>
        <Typography align="center">
          You can also find me on social media:
        </Typography>
      </Box>
      <Grid justify="center" spacing={1} container>
        {SOCIAL_MEDIA.map((item, index) => (
          <Grid key={index} item>
            <Button
              href={item.url}
              variant="outlined"
              color="primary"
              target="_blank"
              disableElevation
            >
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>
      <Box pt={4}>
        <Typography>
          Or even <Link target="_blank" href={require('../../assets/STEPHANY_NUSCH_RESUME.pdf')}>download my resume</Link>!
      </Typography>
      </Box>
      <Box pt={4}>
        <Typography>
          Thanks for coming <span role="img" aria-labelledby="love">❤️</span>
        </Typography>
      </Box>
    </Box>
  </Container>
);