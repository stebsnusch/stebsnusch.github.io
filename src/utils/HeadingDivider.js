import styled from 'styled-components';
import { withTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';

export const HeadingDivider = withTheme(styled(Divider)`
  max-width: 300px;
  height: 3px;
  background-color: ${({theme}) =>  theme.palette.primary.main};
  margin: 30px 0;
`);