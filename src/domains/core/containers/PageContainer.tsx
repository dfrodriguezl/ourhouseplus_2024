import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Header } from 'domains/core/components'
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import React from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      minHeight: '100vh',
      height: '100vh',
      width: '100%',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        minHeight: '80vh',
        height: '90vh'
      },
    },
    pageContainerExcept: {
      minHeight: '140vh',
      height: '140vh',
      width: '100%',
      margin: 0,
      [theme.breakpoints.down('sm')]: {
        minHeight: '80vh',
        height: '90vh'
      },
    },
    headerContainer: {
      justifyContent: 'center',
    },
    bodyContainer: {
      flex: 1,
      minHeight: 0,
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
      height: '100vh'
    },
    noPadding: {
      padding: 0
    }
  })
);

interface DispatchProps {
  
}
interface OwnProps {
  background?: string;
  noHeader?: boolean;
  children: any;
}

interface StateProps {
  
}



type Props = OwnProps & StateProps & DispatchProps;
const PageContainer = (props: Props) => {
  const { children, noHeader, background } = props;
  const classes = useStyles();

  return (
    <div className={background}>
      <Container className={classes.noPadding} >
        <Grid container direction="column" alignItems="stretch" className={classes.pageContainer} >
          {
            !noHeader &&
            <Grid item>
              <Header />
            </Grid>
          }
          <Grid item container className={classes.bodyContainer} justify="center">
            {children}
          </Grid>
        </Grid>

      </Container>
    </div>
  );
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    
  }),
  {
    
  }
)(PageContainer);

export default container;


