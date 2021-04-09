import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login } from 'domains/core/containers';
import { ThemeProvider } from '@material-ui/core';
import { About, ContactUs, HowItWorks, Investors, Jobs, Leadership, News } from 'domains/common/containers';
import theme from 'app/theme';
import { ShapeDiverContainer, ShapeDiverContainerStep2 } from 'domains/shapeDiver/containers';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/investors" component={Investors} />
        <Route path="/jobs" component={Jobs} />
        <Route path="/leadership" component={Leadership} />
        <Route path="/news" component={News} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/login" component={Login} />
        <Route path="/shapediver/step1" component={ShapeDiverContainer} />
        <Route path="/shapediver/step2" component={ShapeDiverContainerStep2} />
        <Route path="/" component={Home} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
