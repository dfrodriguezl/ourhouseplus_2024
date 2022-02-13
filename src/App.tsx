import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Login, SignUp, ListProjects, DetailsProjects, DetailsSummary, TerrainContainer, Facade, Loading } from 'domains/core/containers';
import { ThemeProvider } from '@material-ui/core';
import { About, ContactUs, HowItWorks, Investors, Jobs, Leadership, News, MailChimpFormContainer } from 'domains/common/containers';
import theme from 'app/theme';
import { ShapeDiverContainerStep1, ShapeDiverContainerStep2, ShapeDiverContainerStep3 } from 'domains/shapeDiver/containers';
import { Footer, WaitingList } from 'domains/core/components';

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
        <Route path="/register" component={MailChimpFormContainer} />
        <Route path="/waiting/:name" component={WaitingList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/projects" component={ListProjects} />
        <Route path="/details/:id" component={DetailsProjects} />
        <Route path="/detailsSum/:id" component={DetailsSummary} />
        <Route path="/models/step1" component={ShapeDiverContainerStep1} />
        <Route path="/models/step2" component={ShapeDiverContainerStep2} />
        <Route path="/models/step3" component={ShapeDiverContainerStep3} />
        <Route path="/home" component={Home} />
        <Route path="/uploadShape" component={TerrainContainer} />
        <Route path="/chooseFacade" component={Facade} />
        <Route path="/loading" component={Loading} />
        <Redirect from="/" to="/register" />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
