import React from 'react';

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Container,
  Box
} from '@material-ui/core';
import StyledLink from './StyledLink';
import DescriptionIcon from '@material-ui/icons/Description';
import { STYLES } from '../../utils/constants';
import { HeadingDivider } from '../../utils/HeadingDivider';
import { ARTICLES } from './constants';

export const Articles = () => (
  <Container style={STYLES.FULLHEIGHT}>
    <Box py={20}>
      <Box letterSpacing={15}>
        <Typography variant="h3" gutterBottom>
          <strong>ARTICLES</strong>
        </Typography>
      </Box>
      <HeadingDivider />
      <Box mb={5}>
        <Typography>
          Read some of the stuff I wrote.
      </Typography>
      </Box>
      <List>
        {ARTICLES.map((text, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar>
                <DescriptionIcon />
              </Avatar>
            </ListItemAvatar>
            <StyledLink
              href={text.url}
              target="_blank"
            >
              <ListItemText
                primary={text.title}
              />
            </StyledLink>
          </ListItem>
        ))}
      </List>
      <Box my={5}>
        <Typography>
          More to come very soon! Been working on more articles and tech talks. Will update this page as soon as they're published.
      </Typography>
      </Box>
    </Box>
  </Container>
);