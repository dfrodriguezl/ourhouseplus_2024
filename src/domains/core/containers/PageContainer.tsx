import { Container, Grid, Theme } from '@mui/material';
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import { Header } from 'domains/core/components'
import { connect } from 'react-redux';
import { RootState } from 'app/store';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageContainer: {
      minHeight: '100vh',
      // height: '100vh',
      width: '100%',
      margin: 0
    },
    pageContainerExcept: {
      minHeight: '140vh',
      height: '140vh',
      width: '100%',
      margin: 0,
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
          <Grid item container className={classes.bodyContainer} justifyContent="center">
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


