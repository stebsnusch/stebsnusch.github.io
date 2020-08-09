
import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const StyledLink = withTheme(styled(Link)`
    color: ${({ theme }) => theme.palette.grey[800]};
    text-decoration: none;
    &:hover{
      color: ${({ theme }) => theme.palette.primary.main};
      text-decoration: none;
    }
  `);

  export default withTheme(StyledLink);