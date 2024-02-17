import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, CreateProject } from 'domains/core/containers';
import { ThemeProvider } from '@material-ui/core';
import theme from 'app/theme';
import { Footer} from 'domains/core/components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/createProject" component={CreateProject} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
