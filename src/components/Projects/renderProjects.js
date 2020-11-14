import React from 'react';

import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  Divider,
  Chip
} from '@material-ui/core';
import { cardStyles } from './cardStyles';
import { STYLES } from '../../utils/constants';


export const renderProjects = (project, index) => (
  <Grid md={4} sm={6} xs={12} item key={index}>
    <Card style={cardStyles.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        {project.thumb &&
          <img style={STYLES.FULLWIDTH} src={require(`../../assets/${project.thumb}`)} alt={project.title} />}
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary" paragraph>

            {project.description}
          </Typography>
        </Box>
        <Grid spacing={1} container>
          {project.tech.map((tech, index) => (
            <Grid key={index} item>
              <Chip label={tech} size="small" color="secondary" variant="outlined" />
            </Grid>
          ))}
        </Grid>
      </CardContent>
      <Divider />
      <CardActions>
        {project.url &&
          <Button
            href={project.url}
            size="small"
            variant="contained"
            color="primary"
            disableElevation
          >
            VISIT
          </Button>
        }
        <Button
          size="small"
          href={project.repo}
          color="primary"
          variant="outlined"
        >
          SOURCE CODE
                      </Button>
      </CardActions>
    </Card>
  </Grid>
);
