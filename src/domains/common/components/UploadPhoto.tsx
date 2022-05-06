import { Button, createStyles, Grid, makeStyles, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { PageContainer } from "domains/core/containers";
import React, { useState } from "react";
import { bill } from "assets";
import { ProjectBudget, Spend } from "domains/core/models";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "app/store";
import Select from 'react-select';
import { editProjectBudget, sendEmail } from "domains/core/coreSlice";


const useStyles = makeStyles(() =>
  createStyles({
    addButton: {
      marginLeft: 10
    },
    bottomTextContainer: {
      alignContent: 'flex-end'
    },
    bottomText: {
      fontWeight: 'bolder',
      fontFamily: 'Arial',
      letterSpacing: 2
    },
    container: {
      borderRadius: 20,
      border: '#707070 solid 0px',
      background: 'transparent',
      margin: '20px 90px',
      height: 30
    },
    containerPhoto: {
      textAlign: 'center'
    },
    buttonUpload: {
      background: '#4A7A5A',
      color: 'white',
      textTransform: "capitalize",
      padding: '0px 30px',
      borderRadius: 20
    },
    containerButton: {
      height: '5%'
    }
  })
);

interface DispatchProps {
  editProjectBudget: typeof editProjectBudget;
  sendEmail: typeof sendEmail;
}

interface StateProps {
  listProjects: ProjectBudget[] | undefined;
}

type Props = StateProps & DispatchProps;
const UploadPhoto = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const { listProjects, editProjectBudget, sendEmail } = props;
  const [projectSelected, setProjectSelected] = useState<ProjectBudget>();
  let spend: Spend = {
    date: new Date(),
    detail: "Test detail",
    quantity: 20000,
    type: 1,
    file: selectedImage
  };

  const onChangeImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
    let spends = Object.assign([], projectSelected?.spends!);
    if (spends) {
      spends.push(spend);
      setProjectSelected({
        ...projectSelected!,
        spends: spends
      })
    } else {
      setProjectSelected({
        ...projectSelected!,
        spends: [spend]
      })
    }

  }

  const onChangeProject = (e: any) => {
    setProjectSelected(e)
  }

  const upload = () => {
    if (projectSelected) {
      const formData = new FormData();
      //Adding files to the formdata
      formData.append("image", new Blob([selectedImage],{type: selectedImage.type}));
      formData.append("name", new Blob([projectSelected.name], {type: "text/plain"}));
      editProjectBudget(String(projectSelected?.id), projectSelected!);
      sendEmail(formData);
      alert("Spend created");
    }
  }

  return (
    <PageContainer background={smallScreen ? "waiting-background-list" : "waiting-back"}>
      {smallScreen ?
        <Grid container>
          <Grid item container xs={12} justify="center" className={classes.container} direction="row">
            <Select
              options={listProjects}
              getOptionValue={(o) => String(o.id)}
              getOptionLabel={(o) => o.name}
              placeholder="Choose project."
              onChange={onChangeProject}
            ></Select>
          </Grid>
          <Grid item container xs={12} justify="center" direction="column" alignContent="center" className={classes.containerPhoto}>
            <input
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              id="image-bill"
              onChange={onChangeImage}
            />
            <label htmlFor="image-bill">
              <img src={selectedImage ? URL.createObjectURL(selectedImage) : bill} alt="exmaple-bill" width={250} />
            </label>
            <Typography variant="caption">choose photo <br /> from phone library</Typography>
          </Grid>
          <Grid item container xs={12} justify="center" className={classes.containerButton}>
            <Button className={classes.buttonUpload} component="span" onClick={() => upload()}>Upload</Button>
          </Grid>
          <Grid item container xs={12} justify="center" className={classes.bottomTextContainer}>
            <Typography variant="subtitle1" className={classes.bottomText}>Build on budget.</Typography>
          </Grid>
        </Grid>
        : null}
    </PageContainer>
  )
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      listProjects: state.domains.core.projectsBudget,
    }),
    {
      editProjectBudget,
      sendEmail
    }
  )
)(UploadPhoto);

export default container;