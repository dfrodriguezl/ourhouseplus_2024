import React from 'react'
import { compose } from 'recompose';
import { Container, createStyles, Grid, makeStyles } from '@material-ui/core'
import { Footer, Header } from 'domains/core/components'

const useStyles = makeStyles(() =>
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
    },
    menuButton: {
      marginLeft: '20px 0',
    },
    member: {
      fontSize: 12,
      marginRight: 5,
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
    <Container>
      <Grid container direction="column" alignItems="stretch" className={classes.pageContainer}>
        {
          !removeHeader &&
          <Grid item>
            <Header />
          </Grid>
        }
        <Grid item className={classes.bodyContainer}>
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


