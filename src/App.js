import React from 'react';

import { createMuiTheme, MuiThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Articles from './components/Articles';
import { STYLES } from './utils/constants';

function App() {
  let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#E56B70',
      },
      secondary: {
        main: '#ED979A',
      }
    },
    typography: {
      fontFamily: '"Open Sans", sans-serif',
    }
  });

  theme = responsiveFontSizes(theme);

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Grid direction="column" container>
          <Header />
          <Grid xs={12} style={STYLES.BACKGROUND_BLACK} item>
            <Container maxWidth="lg">
              <About />
            </Container>
          </Grid>
          <Grid xs={12} item>
            <Experience />
          </Grid>
          <Grid xs={12} style={STYLES.BACKGROUND_BLACK} item>
            <Projects />
          </Grid>
          <Grid xs={12} item>
            <Articles />
          </Grid>
          <Grid xs={12} style={STYLES.BACKGROUND_BLACK} item>
            <Footer />
          </Grid>
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
