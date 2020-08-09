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
import { Articles } from './components/Articles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Divider from '@material-ui/core/Divider';

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#00997e',
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
          <Grid direction="column" justify="center" spacing={5} alignItems="stretch" container>
            <Grid xs={12} item>
              <TrackVisibility>
                <About setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid xs={12} item>
              <TrackVisibility>
                <Skills setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid xs={12} item>
              <TrackVisibility>
                <Experience setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid xs={12} item>
              <TrackVisibility>
                <Articles setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid xs={12} item>
              <TrackVisibility>
                <Contact setProgress={setProgress} />
              </TrackVisibility>
            </Grid>
            <Grid item>
              <Divider />
            </Grid>
            <Grid xs={12} item>
              <Box mb={3}>
                <Typography color="textSecondary" align="center">Made with ♥ by <Link href="https://github.com/stebsnusch">stebsnusch</Link></Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
