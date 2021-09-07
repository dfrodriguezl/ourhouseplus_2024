import { Grid, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';
import clsx from 'clsx';

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
    infoContainer: {
      padding: '0px 20px'
    },
    titleContainer: {
      color: "white"
    },
    rigthContainer: {
      borderLeft: '0.5px solid #ffffff33',
      paddingLeft: 30,
      paddingRight: 30
    }
  })
);

interface StateProps {
  img?: any;
  vars?: any;
  title?: string;
  project: any;
}

type Props = StateProps;
const ContainerInfo = (props: Props) => {
  const classes = useStyles();
  const { img, vars, title, project } = props;

  if (project.terr === 0) {
    project.terrain = "Square"
  } else if (project.terr === 1) {
    project.terrain = "Rectangle"
  } else {
    project.terrain = "Custom"
  }


  if (project.windowPc === 0) {
    project.windowPercentage = "50%"
  } else if (project.windowPc === 1) {
    project.windowPercentage = "60%"
  } else {
    project.windowPercentage = "70%"
  }

  if (project.facadeDir === 0) {
    project.facadeDirection = "Horizontal"
  } else if (project.facadeDir === 1) {
    project.facadeDirection = "Vertical"
  }

  if (project.den === 0) {
    project.density = "Suburban"
  } else if (project.den === 1) {
    project.density = "Urban City"
  } else {
    project.density = "Center City"
  }

  if (project.flatS === 0) {
    project.flatSize = "Small"
  } else if (project.flatS === 1) {
    project.flatSize = "Medium"
  } else {
    project.flatSize = "Large"
  }

  if (project.roomT === 0) {
    project.roomType = "Close"
  } else if (project.roomType === 1) {
    project.roomT = "Open"
  } else {
    project.roomType = "Work"
  }

  if (project.unitsNumberT === 0) {
    project.unitsNumberType = "2"
  } else if (project.unitsNumberT === 1) {
    project.unitsNumberType = "3"
  } else {
    project.unitsNumberType = "4"
  }

  return (
    <Grid item container xs={12} direction="row">
      <Grid item container xs={5} justify="center">
        <img alt="basic-volume" src={img} width="80%" />
      </Grid>
      <Grid item container xs={7} className={classes.backgroundProject}>
        <Grid item container xs={6} className={classes.infoContainer}>
          <Typography variant="h6" className={classes.titleContainer}>
            {title}
          </Typography>
          <Grid item container direction="column">
            {vars.map((v: any) => {
              return (
                v.column === 1 ?
                  v.bottom ?
                    <Typography variant="body2" style={{ marginBottom: 15 }} className={classes.titleContainer}>
                      {v.label} <span style={{ float: 'right' }}>
                        {project[v.name]}
                      </span>
                    </Typography> :
                    <Typography variant="body2" style={{ marginBottom: 2 }} className={classes.titleContainer}>
                      {v.label} <span style={{ float: 'right' }}>
                        {project[v.name]}
                      </span>
                    </Typography> : null

              )
            })}
          </Grid>
        </Grid>
        <Grid item container xs={6} className={clsx(classes.infoContainer && classes.rigthContainer)} direction="column">
          {vars.map((v: any) => {
            return (
              v.column === 2 ?
                v.bottom ?
                  <Typography variant="body2" style={{ marginBottom: 15 }} className={classes.titleContainer}>
                    {v.label} <span style={{ float: 'right' }}>
                      {project[v.name]}
                    </span>
                  </Typography> :
                  <Typography variant="body2" style={{ marginBottom: 2 }} className={classes.titleContainer}>
                    {v.label} <span style={{ float: 'right' }}>
                      {project[v.name]}
                    </span>
                  </Typography> : null
            )
          })}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContainerInfo;