import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Project } from 'domains/shapeDiver/models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backgroundProject: {
      background: '#FFFFFF1A 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 0px',
      marginBottom: 50,
      '&:hover': {
        backgroundColor: '#FFFFFF33'
      },
    },
    summaryText: {
      fontWeight: 100,
      color: 'white',
      opacity: 0.8,
      marginRight: 5
    },
    principalParameters: {
      color: 'white',
      fontWeight: 400
    },
  })
);


interface OwnProps {
  project: Project | undefined;
}

type Props = OwnProps;
const GeneralParameters = (props: Props) => {
  const { project } = props;
  const classes = useStyles();

  return (
    <Grid item container xs={12} className={classes.backgroundProject} direction="row">
      <Grid item container xs={4} style={{ justifyContent: 'center' }}>
        <Typography variant="body2" className={classes.principalParameters} style={{ justifyContent: 'center' }}>
          <span className={classes.summaryText}>Location</span> {project?.location?.city}
        </Typography>
      </Grid>
      <Grid item container xs={4} style={{ justifyContent: 'center' }}>
        <Typography variant="body2" className={classes.principalParameters}>
          <span className={classes.summaryText}>Area</span> {project?.area} m2
        </Typography>
      </Grid>
      <Grid item container xs={4} style={{ justifyContent: 'center' }}>
        <Typography variant="body2" className={classes.principalParameters}>
          <span className={classes.summaryText}>Building Plan</span> Suburban
        </Typography>
      </Grid>

    </Grid>
  )
}

export default GeneralParameters;
