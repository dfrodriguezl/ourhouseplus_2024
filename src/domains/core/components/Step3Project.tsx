import React, { useState } from 'react';
import { Button, Grid, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Project } from "../models";
import { post } from 'app/api';


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
  containerProjectSummary: {
    borderRight: '1px solid #707070'
  },
  containerFormStyle: {
    marginTop: '50px',
  },
  inputStyle: {
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    border: '1px solid #707070',
    borderRadius: '5px',
    width: '360px',
    height: '40px',
    marginLeft: "30px"
  },
  elementFormStyle: {
    margin: '30px'
  },
  buttonStyle: {
    background: '#707070 0% 0% no-repeat padding-box !important',
    borderRadius: '5px',
    font: 'normal normal normal 20px/23px Centaur !important',
    color: '#FFFFFF !important',
    letterSpacing: '0px',
    padding: '5px 50px !important',
    marginTop: '50px !important'
  },
  dragDropStyle: {
    border: "1px solid gray",
    width: "217px",
    height: "217px",
    borderRadius: "10px"
  }
}));

interface OwnProps {
  project?: Project;
  children?: any;
}

type Props = OwnProps;
export default function Step3Project(props: Props) {
  const {project} = props;
  const classes = useStyles();
  const [projectStyle, setProjectStyle] = useState<string>("");

  const createProject = (project: Project) => {
    post("/projects", {data: project}).then((response) => {
      const result: Project = response.data;
      if(result.idProject){
        alert("Project created!!!");
      }
    })
  }

  const handleProjectStyle = (e: any) => {
    setProjectStyle(e.target.value);
  }

  const saveProject = () => {
    let projectLocal: Project = project!;
    projectLocal.projectStyle = projectStyle;
    createProject(projectLocal);
  }

  return (
    <Grid container justifyContent="center" alignContent='space-between' alignItems='center' className={classes.containerStyle} direction="column">
      <Typography variant="subtitle1">PROJECT IMAGE</Typography>
      <Grid container justifyContent="space-between" className={classes.containerFormStyle} direction="column" alignContent='center' alignItems='center' >
        <Grid container className={classes.dragDropStyle} justifyContent="center" alignContent='center'>
          <Typography variant="subtitle1">DRAG AND DROP</Typography>
        </Grid>

        <Grid container className={classes.elementFormStyle} direction="row" justifyContent="center" alignItems='center'>
          <label>Project Style*</label>
          <input id="project-style" className={classes.inputStyle} onChange={handleProjectStyle}></input>
        </Grid>
      </Grid>
      <Button className={classes.buttonStyle} onClick={() => saveProject()}>START PROJECT</Button>
    </Grid>
  );
}