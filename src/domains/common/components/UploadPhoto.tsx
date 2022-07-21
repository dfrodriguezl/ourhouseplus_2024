import { Button, createStyles, Grid, IconButton, makeStyles, Snackbar, SnackbarContent, Theme, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import { PageContainer } from "domains/core/containers";
import React, { Fragment, useState } from "react";
import { bill } from "assets";
import { ProjectBudget, Spend } from "domains/core/models";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "app/store";
import Select from 'react-select';
import { editProjectBudget, sendEmail } from "domains/core/coreSlice";
import { Close } from "@material-ui/icons";
import JSZip from "jszip";


const useStyles = makeStyles((theme: Theme) =>
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
    },
    root: {
      background: theme.palette.common.white,
      color: theme.palette.common.black,
    },
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
  const [open, setOpen] = useState(false);
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
    const reader = new FileReader();
    // let fileCompress = selectedImage;
    reader.onload = async function (evt: any) {
      if (evt.target.readyState !== 2) return;

      if (evt.target.error) {
        alert("Error while reading file");
        return;
      }

      const jsZip = new JSZip();
      const fileContent = evt.target.result;
      const zip = await jsZip.file(fileContent.path, fileContent).generateAsync({
        type: 'string',
        compression: 'DEFLATE'
      })

      spend.file = zip;
    }

    reader.readAsArrayBuffer(e.target.files[0]);
    
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
    if (projectSelected?.name && selectedImage) {
      const formData = new FormData();
      //Adding files to the formdata
      formData.append("image", new Blob([selectedImage], { type: selectedImage.type }));
      formData.append("name", new Blob([projectSelected.name], { type: "text/plain" }));
      formData.append("type", new Blob([projectSelected.type], { type: "text/plain" }));
      formData.append("user", new Blob([projectSelected.email!], { type: "text/plain" }));
      editProjectBudget(String(projectSelected?.id), projectSelected!);
      sendEmail(formData);
      setOpen(true);
    } else {
      alert("You must select a project or image");
    }
  }

  const handleCloseSnackbar = () => {
    setOpen(false)
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
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
          >
            <SnackbarContent
              message="The information can take 1-6 hours to show into your account."
              className={classes.root}
              action={
                <Fragment>
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar} style={{ color: 'black' }}>
                    <Close fontSize="small" />
                  </IconButton>
                </Fragment>
              } />

          </Snackbar>
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