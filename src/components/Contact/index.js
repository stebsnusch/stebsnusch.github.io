import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { STYLES } from '../../utils/constants';
import { SOCIAL_MEDIA } from './constants';

export const Contact = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(100)
  });

  return (
    <Grid item>
      <Typography variant="h3" style={STYLES.SECTION} gutterBottom>Contact</Typography>
      <Grid direction="row" spacing={1} container>
        {SOCIAL_MEDIA.map((item, index) => (
          <Grid key={index} item>
            <Button
              href={item.url}
              variant="contained"
              color="primary"
              target="_blank"
              disableElevation
            >
              {item.name}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

Contact.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}