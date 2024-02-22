import React, { useState } from 'react';
import { Button, Grid, Theme, Typography } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { Project } from "../models";
import { post } from 'app/api';
import { useDropzone } from 'react-dropzone';


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
  const { project } = props;
  const classes = useStyles();
  const [projectStyle, setProjectStyle] = useState<string>("");
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': []
    },
    onDrop: (acceptedFiles) => {
      console.log("AC", acceptedFiles[0]);
      setSelectedImage(acceptedFiles[0]);
      const reader = new FileReader();
      // let fileCompress = selectedImage;
      reader.onload = async function (evt: any) {
        if (evt.target.readyState !== 2) return;

        if (evt.target.error) {
          alert("Error while reading file");
          return;
        }

        // const jsZip = new JSZip();
        // const fileContent = evt.target.result;
        // const zip = await jsZip.file(fileContent.path, fileContent).generateAsync({
        //   type: 'string',
        //   compression: 'DEFLATE'
        // })

        // spend.file = zip;
      }

      reader.readAsArrayBuffer(acceptedFiles[0]);
    },
  });

  const createProject = (project: Project) => {
    post("/projects", { data: project }).then((response) => {
      const result: Project = response.data;
      if (result.idProject) {
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

  // const onChangeImage = () => {
  //   // setSelectedImage(e.target.files[0]);
  //   // let spends = Object.assign([], projectSelected?.spends!);
  //   const reader = new FileReader();
  //   // let fileCompress = selectedImage;
  //   reader.onload = async function (evt: any) {
  //     if (evt.target.readyState !== 2) return;

  //     if (evt.target.error) {
  //       alert("Error while reading file");
  //       return;
  //     }

  //     // const jsZip = new JSZip();
  //     // const fileContent = evt.target.result;
  //     // const zip = await jsZip.file(fileContent.path, fileContent).generateAsync({
  //     //   type: 'string',
  //     //   compression: 'DEFLATE'
  //     // })

  //     // spend.file = zip;
  //   }

  //   reader.readAsArrayBuffer(e.target.files[0]);

  //   if (spends) {
  //     spends.push(spend);
  //     setProjectSelected({
  //       ...projectSelected!,
  //       spends: spends
  //     })
  //   } else {
  //     setProjectSelected({
  //       ...projectSelected!,
  //       spends: [spend]
  //     })
  //   }

  // }

  return (
    <Grid container justifyContent="center" alignContent='space-between' alignItems='center' className={classes.containerStyle} direction="column">
      <Typography variant="subtitle1">PROJECT IMAGE</Typography>
      <Grid container justifyContent="space-between" className={classes.containerFormStyle} direction="column" alignContent='center' alignItems='center'>
        <div {...getRootProps({ refKey: 'innerRef' })}>
          <input
            style={{ display: 'none' }}
            {...getInputProps()} />
          <label htmlFor="image-project">
            {selectedImage ?
              <img src={selectedImage ? URL.createObjectURL(selectedImage) : ""} alt="style" width={250} />
              : <Grid container className={classes.dragDropStyle} justifyContent="center" alignContent='center'>
                <Typography variant="subtitle1">DRAG AND DROP</Typography>
              </Grid>}
          </label>
        </div>



        <Grid container className={classes.elementFormStyle} direction="row" justifyContent="center" alignItems='center'>
          <label>Project Style*</label>
          <input id="project-style" className={classes.inputStyle} onChange={handleProjectStyle}></input>
        </Grid>
      </Grid>
      <Button className={classes.buttonStyle} onClick={() => saveProject()}>START PROJECT</Button>
    </Grid>
  );
}