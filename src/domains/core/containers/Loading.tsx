import { createStyles, Grid, IconButton, LinearProgress, makeStyles, Theme, Typography } from '@material-ui/core'
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { BlackContainer } from '.';
import { AwesomeBuilding } from 'assets';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';


const itemsLoading = [
  { name: "Initializing", state: "active" },
  { name: "Processing location", state: "active" },
  { name: "Identifying property & lot zoning", state: "active" },
  { name: "Identifying demographic zone data", state: "active" },
  { name: "Analyzing units capacity", state: "active" },
  { name: "Generating project 3D volume", state: "loading" },
  { name: "Generating project 3D facade", state: "loading" },
  { name: "Generating advance options", state: "loading" }
]

const columnSize = 4;

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
    link: {
      textAlign: 'center',
      width: '100%',
      textDecoration: 'none',
      '&:hover': {
        cursor: 'pointer'
      },
      color: '#A2A0A0'
    },
    linearProgress: {
      height: '10px',
      color: "#D9D9D9",
      backgroundColor: '#FF7777',
      marginBottom: 30,
      borderRadius: 5
    },
    rootLinear: {
      width: '100%'
    },
    colorPrimary: {
      backgroundColor: "#D9D9D9"
    },
    bar: {
      borderRadius: 5,
      backgroundColor: '#FF7777',
    },
    listText: {
      marginLeft: 10
    },
    colorIconActive: {
      color: '#FF7777'
    },
    colorIconInactive: {
      color: "#A2A0A0"
    }
  })
);

const Loading = () => {
  const classes = useStyles();

  return (
    <BlackContainer>
      <Grid item container xs={12} className={classes.backgroundProject}>
        <Grid xs={1}></Grid>
        <Grid xs={2} item container>
          <IconButton className={classes.uploadIcon}>
            <img src={AwesomeBuilding} width="70%" />
          </IconButton>
        </Grid>
        <Grid xs={1} />
        <Grid xs={8}>
          <Typography>
            <span className={classes.titleStyle}>Generating project</span>
            <br />
            <span className={classes.subtitleStyle}>REA is generating your custom project</span>
          </Typography>
        </Grid>
        <div className={classes.rootLinear}>
          <LinearProgress variant="determinate" value={75} className={classes.linearProgress} style={{ marginTop: 30 }}
            classes={{ colorPrimary: classes.colorPrimary, bar: classes.bar }} />
        </div>
        <Grid xs={12} container>
          <Grid xs={6} item>
            {itemsLoading.map((item, index) => {
              if (index < columnSize) {
                return (
                  <Typography>
                    {item.state === "active" ?
                      <CheckCircleIcon fontSize='small' className={classes.colorIconActive} /> : null
                    }
                    <span className={classes.listText}>{item.name}</span>
                  </Typography>
                )
              }
            })}
          </Grid>
          <Grid xs={6} item container>
            {itemsLoading.map((item, index) => {
              if (index >= columnSize) {
                return (
                  <Typography>
                    {item.state === "active" ?
                      <CheckCircleIcon fontSize='small' className={classes.colorIconActive} />
                      : <HourglassFullIcon fontSize="small" className={classes.colorIconInactive} />
                    }
                    <span className={classes.listText}>{item.name}</span>
                  </Typography>
                )
              }

            })}
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} container>
        <a className={classes.link}>
          Please wait...
        </a>
      </Grid>
    </BlackContainer>
  );
}

const container = connect<{}, {}, {}, RootState>(
  (state: RootState) => ({}),
  {}
)(Loading);

export default container;


