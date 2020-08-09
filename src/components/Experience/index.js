import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';

import { STYLES } from '../../utils/constants';
import { COMPANIES } from './constants';

export const Experience = ({ setProgress, isVisible }) => {
  const [company, setCompany] = useState(COMPANIES[0]);

  const handleChange = (e) => setCompany(e.target.value);

  useEffect(() => {
    isVisible && setProgress(60)
  });


  return (
    <Fragment>
      <Typography variant="h3" style={STYLES.SECTION} gutterBottom>Experience</Typography>
      <FormControl margin="dense" variant="outlined" fullWidth>
        <InputLabel id="companySelect">Company</InputLabel>
        <Select
          labelId="companySelect"
          id="companies"
          value={company}
          onChange={handleChange}
          label="Company"
        >
          {COMPANIES.map((company, index) => (
            <MenuItem key={index} value={company}>{company.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      {company &&
        <Box mt={2}>
          <Typography variant="h4" color="primary" style={STYLES.SUBSECTION}>
            {company.role} @ {company.name}
          </Typography>
          <Typography variant="caption" color="textSecondary" paragraph>
            {company.period}
          </Typography>
          
            {company.description}
          
        </Box>
      }
    </Fragment>
  );
};

Experience.propTypes = {
  setProgress: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
}