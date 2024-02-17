import React from 'react';
import { Grid, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Project } from "../models";


const useStyles = makeStyles((theme: Theme) => ({
  containerStyle: {
    padding: '60px 30px'
  },
  textContainerStyle: {
    padding: '20px'
  },
  containerButtonStyle: {
    textAlign: 'center'
  },
  containerDescriptionStyle: {
    marginTop: '30px',
    font: 'normal normal normal 16px/18px Centaur',
    color: '#2A2A2A',
    textTransform: 'capitalize'
  },
  textStyleSubtitle: {
    color: 'gray'
  }
}));

interface OwnProps {
  project?: Project;
  children?: any;
  step: number;
}

type Props = OwnProps;
export default function ProjectSummary(props: Props) {
  const { project, step } = props;
  const classes = useStyles();

  return (
    <Grid container direction="column" className={classes.containerStyle}>
      <Typography variant="subtitle1">Project Summary</Typography>
      {step === 2 || step === 3 ?
        <Grid container direction="column" className={classes.containerDescriptionStyle}>
          <Typography variant="subtitle1">{project?.name}</Typography>
          <Typography variant="subtitle1">{project?.location}</Typography>
          <Typography variant="subtitle1">Due - {project?.deliveryDueDate}</Typography>
        </Grid> :
        null}

      {step === 3 ?
        <Grid container direction="column" className={classes.containerDescriptionStyle}>
          <Typography variant="subtitle1" className={classes.textStyleSubtitle}>Rooms Number - {Number(project?.livingRoomNumber!) + Number(project?.bedRoomNumber!) + Number(project?.toiletNumber!)}</Typography>
          <div>
          <Typography variant="subtitle1">{project?.livingRoom}</Typography>
            {project?.livingRoom ?
              project.livingRoomNumber === 1 ?
                <Typography variant="subtitle1">1 Living Room</Typography> :
                <Typography variant="subtitle1">{project.livingRoomNumber} Living Rooms</Typography>
              : null
            }

            {project?.dinningRoom ?
              <Typography variant="subtitle1">Dinning Room</Typography> :
              null
            }

            {project?.bedRoom ?
              project.bedRoomNumber === 1 ?
                <Typography variant="subtitle1">1 Bedroom</Typography> :
                <Typography variant="subtitle1">{project.bedRoomNumber} bedrooms</Typography> :
              null
            }

            {project?.toilet ?
              project.toiletNumber === 1 ?
                <Typography variant="subtitle1">1 Toilet/Bathroom</Typography> :
                <Typography variant="subtitle1">{project.toiletNumber} Toilets/Bathrooms</Typography> :
              null
            }
           
          </div>


        </Grid> :
        null}

    </Grid>
  );
}