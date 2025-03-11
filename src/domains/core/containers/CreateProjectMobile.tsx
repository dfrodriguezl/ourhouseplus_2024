import React, { useState } from 'react';
import { Box, Button, FormControlLabel, FormGroup, Grid, Snackbar, Switch, TextField, Theme, Typography, useMediaQuery, useTheme } from '@mui/material';
import { PageContainer } from '.';
import { useAuth0 } from '@auth0/auth0-react';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { makeStyles, withStyles } from '@mui/styles';
import FolderIcon from '@mui/icons-material/Folder';
import { Project } from '../models';
import { post } from 'app/api';

const useStyles = makeStyles((theme: Theme) => ({
  buttonNewProject: {
    background: '#FFFFFF66',
    textTransform: "none",
    borderRadius: 20,
    margin: "20px 0"
  },
  whiteBox: {
    backgroundColor: "white",
    padding: "7px 0"
  },
  blackBox: {
    backgroundColor: "#2A2A2A",
    padding: "20px 0"
  },
  textInput: {
    borderColor: "white",
    marginTop: 15
  },
  colorLabelSwitch: {
    color: "white"
  },
  containerProject: {
    background: '#707070',
    height: '35px'
  },
  buttonProject: {
    width: "100%"
  }
}));

const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
  },
})(TextField);


interface OwnProps {
  children?: any;
}

type Props = OwnProps;
export default function CreateProjectMobile(props: Props) {
  const { isAuthenticated, user } = useAuth0();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [nameProject, setNameProject] = useState("");
  const [locationProject, setLocationProject] = useState("");
  const [livingRoom, setLivingRoom] = useState<boolean>(false);
  const [dinningRoom, setDinningRoom] = useState<boolean>(false);
  const [bedRoom, setBedRoom] = useState<boolean>(false);
  const [toilets, setToilets] = useState<boolean>(false);
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);


  const createProject = () => {
    let project: Project = {
      name: nameProject,
      location: locationProject,
      livingRoom: livingRoom,
      dinningRoom: dinningRoom,
      bedRoom: bedRoom,
      toilet: toilets,
      user: user?.email
    }


    post("/projects", { data: project }).then((response) => {
      const result: Project = response.data;
      if (result.idProject) {
        setOpenSnackbar(true);
      }
    })
  }

  const handleChangeSwitchLiving = (e: any) => {
    setLivingRoom(e.target.checked);
  }

  const handleChangeSwitchDinning = (e: any) => {
    setDinningRoom(e.target.checked);
  }

  const handleChangeSwitchBed = (e: any) => {
    setBedRoom(e.target.checked);
  }

  const handleChangeSwitchToilet = (e: any) => {
    setToilets(e.target.checked);
  }

  const handleChangeName = (e: any) => {
    setNameProject(e.target.value)
  }

  const handleChangeLocation = (e: any) => {
    setLocationProject(e.target.value)
  }
  

  return (
    <PageContainer background="create-project">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        message="Project created"
      />
      {isAuthenticated ?
          <Grid item container direction="column" alignContent="center" textAlign="center">
            <Typography>PROJECT</Typography>
            <Box>
              <FolderOpenIcon fontSize='large' />
            </Box>
            <Box>
              <Button
                variant="contained"
                endIcon={<AddCircleIcon />}
                className={classes.buttonNewProject}
              >New Project
              </Button>
            </Box>
            <Grid container direction="row" justifyContent="space-around" className={classes.whiteBox}>
              <Typography>Name</Typography>
              <Typography>Next {'>'} </Typography>
            </Grid>
            <Grid container className={classes.blackBox} direction="column">
              <Grid item>
                <CssTextField
                  id="outlined-basic"
                  label="Project Name"
                  variant="outlined"
                  className={classes.textInput}
                  placeholder='Project Name' 
                  value={nameProject}
                  onChange={handleChangeName}/>
                <br />
                <CssTextField
                  id="outlined-basic"
                  label="Location Project"
                  variant="outlined"
                  className={classes.textInput}
                  placeholder='Location Project' 
                  value={locationProject}
                  onChange={handleChangeLocation}/>
              </Grid>
              <Grid item>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="space-around" className={classes.whiteBox}>
              <Typography>Room</Typography>
              <Typography>Next {'>'} </Typography>
            </Grid>
            <Grid container className={classes.blackBox} justifyContent="center">
              <FormGroup>
                <FormControlLabel control={<Switch />} label="Living Room" labelPlacement='start' className={classes.colorLabelSwitch} onChange={handleChangeSwitchLiving} />
                <FormControlLabel control={<Switch />} label="Dinning Room" labelPlacement='start' className={classes.colorLabelSwitch} onChange={handleChangeSwitchDinning} />
                <FormControlLabel control={<Switch />} label="Bed Rooms" labelPlacement='start' className={classes.colorLabelSwitch} onChange={handleChangeSwitchBed} />
                <FormControlLabel control={<Switch />} label="Toilets / Bathrooms" labelPlacement='start' className={classes.colorLabelSwitch} onChange={handleChangeSwitchToilet} />
              </FormGroup>
            </Grid>
            <Grid container className={classes.containerProject}>
              <Button
                className={classes.buttonProject}
                variant="outlined"
                startIcon={<FolderIcon />}
                onClick={() => createProject()}
              >
                Save project
              </Button>
            </Grid>
            <Grid container className={classes.whiteBox} />
          </Grid>
          : null }
    </PageContainer>
  );
}