import React from 'react'
import { compose } from 'recompose';
import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Footer, Header } from 'domains/core/components'

import background from 'assets/background.jpg';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      minHeight: '100vh',
      height: '100vh',
      width: '100%',
      margin: 0
    },
    headerContainer: {
      // margin: '0 200px',
      justifyContent: 'center',
    },
    bodyContainer: {
      flex: 1,
      minHeight: 0,
      maxHeight: '100%',
      '& div': {
        maxHeight: '100%',
      }
    },
    menuButton: {
      marginLeft: '20px 0',
    },
    member: {
      fontSize: 12,
      marginRight: 5,
    },
    background: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100vw',
      height: '83%'
    }
  })
);

interface OwnProps {
  removeFooter?: boolean;
  removeHeader?: boolean;
  children: any;
}

type Props = OwnProps;
const PageContainer = (props: Props) => {
  const { children, removeHeader, removeFooter } = props;
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <img src={background} alt="background" className={classes.background} />
      <Grid container direction="column" alignItems="stretch" className={classes.pageContainer}>
        {
          !removeHeader &&
          <Grid item>
            <Header />
          </Grid>
        }
        <Grid item container className={classes.bodyContainer} justify="center">
          {children}
        </Grid>
        {
          !removeFooter &&
          <Grid item style={{ zIndex: 10 }}>
            <Footer />
          </Grid>
        }
      </Grid>
    </Container>
  );
}

const container = compose<Props, OwnProps>()(PageContainer);
export default container;


