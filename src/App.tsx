import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Home, Login, MailchimpFormContainer, SignUp, ListProjects, DetailsProjects, DetailsSummary } from 'domains/core/containers';
import { ThemeProvider } from '@material-ui/core';
import { About, ContactUs, HowItWorks, Investors, Jobs, Leadership, News } from 'domains/common/containers';
import theme from 'app/theme';
import { ShapeDiverContainerStep1, ShapeDiverContainerStep2, ShapeDiverContainerStep3 } from 'domains/shapeDiver/containers';
import { Footer,WaitingList } from 'domains/core/components';

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
        <Route path="/register" component={MailchimpFormContainer} />
        <Route path="/waiting/:name" component={WaitingList} />
        <Route path="/signup" component={SignUp} />
        <Route path="/projects" component={ListProjects} />
        <Route path="/details/:id" component={DetailsProjects} />
        <Route path="/detailsSum/:id" component={DetailsSummary} />
        <Route path="/shapediver/step1" component={ShapeDiverContainerStep1} />
        <Route path="/shapediver/step2" component={ShapeDiverContainerStep2} />
        <Route path="/shapediver/step3" component={ShapeDiverContainerStep3} />
        <Route path="/home" component={Home} />
        <Redirect from="/" to="/home" />
      </Switch>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
