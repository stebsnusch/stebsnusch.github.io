import React, { useState } from 'react';

import {
  Typography,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
  Container
} from '@material-ui/core';

import { STYLES } from '../../utils/constants';
import { HeadingDivider } from '../../utils/HeadingDivider';
import { COMPANIES } from './constants';

export const Experience = () => {
  const [company, setCompany] = useState(COMPANIES[0]);

  const handleChange = (e) => setCompany(e.target.value);

  return (
    <Container style={STYLES.FULLHEIGHT}>
      <Box py={20} display="flex" flexDirection="column" justifyItems="center">
        <Box letterSpacing={15}>
          <Typography variant="h3" gutterBottom>
            <strong>EXPERIENCE</strong>
          </Typography>
        </Box>
        <HeadingDivider />
        <Box mb={5}>
          <Typography>
            Get to know companies I've worked/work with.
        </Typography>
        </Box>
        <FormControl margin="dense" variant="outlined" fullWidth>
          <InputLabel id="companySelect">Company</InputLabel>
          <Select
            labelId="companySelector"
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
          <Box mt={5}>
            <Typography variant="h4" color="primary" >
              {company.role} @ {company.name}
            </Typography>
            <Typography variant="caption" color="textSecondary" paragraph>
              {company.period}
            </Typography>

            {company.description}

          </Box>
        }
      </Box>
    </Container>
  );
};
