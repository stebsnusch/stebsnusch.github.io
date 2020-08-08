import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './components/Header';
import { About } from './components/About';
import { ThemeProvider } from 'styled-components';

function App() {
  const theme = createMuiTheme();

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Container maxWidth="md">
          <About />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
