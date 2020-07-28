import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { ThemeProvider, CSSReset, theme, Text, Stack, Box } from "@chakra-ui/core";

import Home from './Home';
import Privacy from './Privacy';
import TOS from './TOS';
import Header from './Header';

function App() {
  const customTheme = {
    ...theme,
    fonts: {
      body: "Inter, sans-serif",
      heading: theme.fonts.heading,
      mono: theme.fonts.mono
    },
    fontWeights: {
      normal: 400,
      medium: 600,
      bold: 900
    }
  }

  return (
    <ThemeProvider theme = {customTheme}>
      <CSSReset />
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props}/>} />
            <Route path="/privacy" render={(props) => <Privacy {...props}/>} />
            <Route path="/tos" render={(props) => <TOS {...props}/>} />
            <Redirect exact to="/" />
          </Switch>

          <footer>
            <Box p={3} bg="gray.50" h={"70px"}>
              <Stack>
                <Stack spacing={10} isInline justify="center">
                  <Text fontWeight="medium" fontSize="sm"><Link to="/tos">Terms Of Service</Link></Text>
                  <Text fontWeight="medium" fontSize="sm"><Link to="/privacy">Privacy Policy</Link></Text>
                </Stack>
                <Text color="gray.500" fontWeight="normal" fontSize="sm">© 2020 <a href="https://barrickapps.com?ref=pc" target="_blank">Barrick Apps LLC</a></Text>
              </Stack>
            </Box>
          </footer>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
