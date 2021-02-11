import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login } from 'domains/core/containers';
import { Container, createStyles, Grid, makeStyles, ThemeProvider } from '@material-ui/core';
import { Footer, Header } from 'domains/core/components';
import theme from 'app/theme';

const useStyles = makeStyles(() =>
  createStyles({
    pageContainer: {
      minHeight: '100vh',
      height: '100vh',
      width: '100%',
      margin: 0
    },
    bodyContainer: {
      flex: 1,
      minHeight: 0,
      maxHeight: '100%'
    },
    menuButton: {
      marginLeft: 'auto',
    },
    member: {
      fontSize: 12,
      marginRight: 5,
    }
  })
);

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Grid container direction="column" alignItems="stretch" className={classes.pageContainer}>
          <Grid item>
            <Header />
          </Grid>
          <Grid item className={classes.bodyContainer}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} />
            </Switch>
          </Grid>
          <Grid item style={{ zIndex: 10 }}>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;
