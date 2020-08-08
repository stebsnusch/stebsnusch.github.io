import React, { useState } from 'react';

import LoadingBar from 'react-top-loading-bar';
import TrackVisibility from 'react-on-screen';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Header } from './components/Header';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#79ccbd',
      }
    }
  });
  const [progress, setProgress] = useState(0);

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <LoadingBar
          color={theme.palette.primary.main}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Container maxWidth="sm">
          <Header />
          <Grid direction="column" justify="center" spacing={5} alignItems="flex-start" container>
            <Grid item>
              <TrackVisibility>
                <About setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid item>
              <TrackVisibility>
                <Skills setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid item>
              <TrackVisibility>
                <Experience setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid item>
              <TrackVisibility>
                <Contact setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
