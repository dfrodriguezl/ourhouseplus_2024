import { useState } from 'react';
import { compose } from 'recompose';
import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { Header } from 'domains/core/components'
import { setExpandAdvanced } from 'domains/shapeDiver/slice';
import { connect } from 'react-redux';
import { RootState } from 'app/store';

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
    }
  })
);

interface DispatchProps {
  setExpandAdvanced: typeof setExpandAdvanced;
}
interface OwnProps {
  background?: string;
  noHeader?: boolean;
  children: any;
}

interface StateProps {
  expandAdvanced?: Object;
}



type Props = OwnProps & StateProps & DispatchProps;
const PageContainer = (props: Props) => {
  const { children, noHeader, background,expandAdvanced, setExpandAdvanced} = props;
  const classes = useStyles();

  
  return (
    <div className={background} style={expandAdvanced}>
      <Container>
        <Grid container direction="column" alignItems="stretch" className={classes.pageContainer}>
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
    expandAdvanced: state.domains.shapediver.expandAdvanced
  }),
  {
    setExpandAdvanced
  }
)(PageContainer);

export default container;


