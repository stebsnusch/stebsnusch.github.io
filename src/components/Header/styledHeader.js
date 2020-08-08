import React from 'react';
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

const Header = ({ className }) => {

  const menuItems = [
    {
      name: 'Welcome',
      href: '/',
    },
    {
      name: 'About Me',
      href: '#about',
    },
    {
      name: 'Skills',
      href: '#skills',
    },
    {
      name: 'Experience',
      href: '#experience',
    },
  ];

  const menuButtons = (item, index) => (
    <Grid key={index} item>
      <Button>{item.name}</Button>
    </Grid>
  );

  return (
    <Box borderBottom={1} className={className} width={1}>
      <Container maxWidth="md">
        <Grid
          alignItems="center"
          justify="space-around"
          direction="row"
          container
          fullWidth
        >
          {menuItems.map((item, index) => menuButtons(item, index))}
        </Grid>
      </Container>
    </Box>
  );
};
const StyledHeader = withTheme(styled(Header)`
  background: white;
  padding: 20px;
  position: fixed;
  top: 0;
  border-color: ${({ theme }) => theme.palette.grey[300]};
`);
export default StyledHeader;