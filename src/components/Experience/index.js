import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { TabPanel } from './TabPanel';

import { STYLES } from '../../utils/constants';

export const Experience = ({ setProgress, isVisible }) => {
  useEffect(() => {
    isVisible && setProgress(75);
  });

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      display: 'flex',
      width: '100%',
      height: 500,
      flexDirection: 'row',
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
      width: '150px'
    },
    tabPanel: {
      width: '100%',
      wordWrap: 'break-word',
    }
  }));

  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function tabProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  return (
    <Fragment width="100%">
      <Typography variant="h3" style={STYLES.SECTION} gutterBottom>Experience</Typography>
      <Fragment className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="item um" {...tabProps(0)} />
          <Tab label="item 2" {...tabProps(1)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          item one
          </TabPanel>
        <TabPanel value={value} index={1}>
          Item two
          </TabPanel>

      </Fragment>
    </Fragment>
  );
};

Experience.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}