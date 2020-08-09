import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import StyledLink from './StyledLink';
import DescriptionIcon from '@material-ui/icons/Description';
import { STYLES } from '../../utils/constants';

export const Articles = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(80);
  });

  return (
    <Grid item>
      <Typography variant="h3" style={STYLES.SECTION} gutterBottom>Articles</Typography>
      <Typography>Read some of the stuff I wrote.</Typography>
      <List>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <DescriptionIcon />
            </Avatar>
          </ListItemAvatar>
          <StyledLink
            href="https://medium.com/quintoandar-tech-blog/minha-experi%C3%AAncia-no-aceleradev-quintoand-e92570f8d0f"
            target="_blank"
          >
            <ListItemText
              primary="Minha experiência no Aceleradev + QuintoAndar"
            />
          </StyledLink>
        </ListItem>
      </List>
    </Grid>
  );
};

Articles.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}