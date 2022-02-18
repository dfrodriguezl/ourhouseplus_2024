import { Button, createStyles, Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core'
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { BlackContainer } from '.';
import { AwesomeBuilding } from 'assets';
import CarouselFacade from 'domains/common/components/CarouselFacade';
import { useHistory } from 'react-router-dom';
import { setWindow } from 'domains/shapeDiver/slice';
import { LocationSimple } from '../models';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundProject: {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '30px 30px',
      marginBottom: 50,
      borderRadius: '20px',
    },
    uploadIcon: {
      background: '#FF6C6C',
      color: 'white'
    },
    titleStyle: {
      fontWeight: 'bolder'
    },
    subtitleStyle: {
      color: '#00000080',
      fontSize: 15
    },
    button: {
      cursor: 'pointer',
      borderRadius: 20,
      backgroundColor: '#FF6C6C',
      color: 'white',
      textTransform: 'none',
      margin: '30px 0px',
      '&:hover': {
        backgroundColor: '#FF6C6C'
      },
      padding: '10px 30px'
    },
    link: {
      textAlign: 'center',
      width: '100%',
      textDecoration: 'underline',
      '&:hover': {
        cursor: 'pointer'
      },
      color: '#A2A0A0'
    }
  })
);

interface StateProps {
  location: LocationSimple | undefined;
}
interface DispatchProps {
  setWindow: typeof setWindow;
}

type Props = StateProps & DispatchProps;
const Facade = (props: Props) => {
  const classes = useStyles();
  const history = useHistory();
  const { setWindow, location } = props;

  const goToLoading = () => {
    history.push("/loading")
  }



  return (
    <BlackContainer title={"CHOOSE PROJECT FACADE"}>
      <Grid item container xs={12} className={classes.backgroundProject}>
        <Grid xs={1}></Grid>
        <Grid xs={2} item container>
          <IconButton className={classes.uploadIcon}>
            <img src={AwesomeBuilding} width="70%" alt="awesome-building"/>
          </IconButton>
        </Grid>
        <Grid xs={1} />
        <Grid xs={8}>
          <Typography>
            <span className={classes.titleStyle}>Project look</span>
            <br />
            <span className={classes.subtitleStyle}>Choose option to build</span>
          </Typography>
        </Grid>
        <CarouselFacade setWindow={setWindow} location={location}/>
      </Grid>
      <Grid xs={12} container justify="center">
        <Button
          size="large"
          className={classes.button}
          onClick={() => goToLoading()}
        >
          Next
        </Button>
      </Grid>
      <Grid xs={12} container>
        <a className={classes.link}>
          Save for later
        </a>
      </Grid>

    </BlackContainer>
  );
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location
  }),
  {
    setWindow
  }
)(Facade);

export default container;


