import React from 'react';

import {
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Container,
  Box,
  withWidth,
} from '@material-ui/core';
import StyledLink from './StyledLink';
import DescriptionIcon from '@material-ui/icons/Description';
import { STYLES, isMobile } from '../../utils/constants';
import { HeadingDivider } from '../../utils/HeadingDivider';
import { ARTICLES } from './constants';

export const Articles = ({ width }) => (
  <Container style={STYLES.FULLHEIGHT}>
    <Box py={10}>
      <Box letterSpacing={isMobile(width) ? 0 : 15}>
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

export default withWidth()(Articles);