import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import { FooterEmbebbed, Header } from 'domains/core/components'
import { setExpandAdvanced } from 'domains/shapeDiver/slice';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { useHistory } from 'react-router-dom';


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
    noPadding:{
      padding: 0
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
  const { children, noHeader, background, expandAdvanced } = props;
  const classes = useStyles();

  const history = useHistory();
  const isAbout = history.location.pathname.indexOf('about') > -1;
  const isDetails = history.location.pathname.indexOf('details') > -1;
  const isStep1 = history.location.pathname.indexOf('step1') > -1;
  const isStep2 = history.location.pathname.indexOf('step2') > -1;
  const isStep3 = history.location.pathname.indexOf('step3') > -1;
  const isListProjects = history.location.pathname.indexOf('projects') > -1;
  const isUploadShape = history.location.pathname.indexOf('uploadShape') > -1;
  const isChooseFacade = history.location.pathname.indexOf('chooseFacade') > -1;

  return (
    <div className={background} style={(isAbout || isDetails || isStep1 || isListProjects || isUploadShape || isStep2 || isStep3 || isChooseFacade) ? { overflow: 'auto' } : expandAdvanced}>
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
    expandAdvanced: state.domains.shapediver.expandAdvanced
  }),
  {
    setExpandAdvanced
  }
)(PageContainer);

export default container;


