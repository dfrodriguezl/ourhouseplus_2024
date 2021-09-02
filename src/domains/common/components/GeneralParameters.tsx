import { createStyles, Grid, makeStyles, Theme, Typography } from '@material-ui/core';
import { Project } from 'domains/shapeDiver/models';
import { Densities, Density } from 'domains/core/models';
import _ from 'lodash';

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

  const getDensity = (value: number) => {
    const den = _.find(Densities, (x:Density) => x.value === value);
    return den;
  }

  return (
    <Grid item container xs={12} className={classes.backgroundProject} direction="row">
      <Grid item container xs={4} style={{ justifyContent: 'center' }}>
        <Typography variant="body2" className={classes.principalParameters} style={{ justifyContent: 'center' }}>
          <span className={classes.summaryText}>Location</span> {project?.location?.city}
        </Typography>
      </Grid>
      <Grid item container xs={4} style={{ justifyContent: 'center' }}>
        <Typography variant="body2" className={classes.principalParameters}>
          <span className={classes.summaryText}>Area</span> {project?.area} ha
        </Typography>
      </Grid>
      <Grid item container xs={4} style={{ justifyContent: 'center' }}>
        <Typography variant="body2" className={classes.principalParameters}>
          <span className={classes.summaryText}>Building Plan</span> {getDensity(project?.location?.density!)?.label!}
        </Typography>
      </Grid>

    </Grid>
  )
}

export default GeneralParameters;
