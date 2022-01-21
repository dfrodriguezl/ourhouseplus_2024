import React, { Fragment } from 'react';
import { useState } from 'react';
import { compose } from 'recompose';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, makeStyles, Divider, IconButton, Theme, Snackbar, SnackbarContent } from '@material-ui/core';
import { connect } from 'react-redux';
import { editProject, getProjectData, saveProject, setAdvancedOptions, setExportPNG, setExports, setNameProject } from 'domains/shapeDiver/slice';
import { save } from 'assets'
import CloseIcon from '@material-ui/icons/Close';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import { RootState } from 'app/store';
import { Pdf } from 'domains/common/components';

const styles = makeStyles((theme: Theme) => ({
  container: {
    padding: '5% 5% 0% 10%',
  },
  fieldLabel: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  fieldInput: {
    border: '0px',
    background: 'rgba(255, 255, 255, 0)',
    fontSize: 12,
    '&:focus': {
      outline: 'none'
    }
  },
  buttons: {
    width: 20,
    height: 20
  },
  root: {
    background: theme.palette.common.white,
    color: theme.palette.common.black,
  }
}));

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
  saveProject: typeof saveProject;
  setNameProject: typeof setNameProject;
  editProject: typeof editProject;
  setExports: typeof setExports;
  setExportPNG: typeof setExportPNG;
}

interface StateProps {
  projectData: any;
  saveSuccess: boolean;
  nameProject: string;
  idProject?: string;
  option?: string;
}

type Props = StateProps & DispatchProps;
const ShapeDiverProject = (props: Props) => {
  const { saveProject, projectData, saveSuccess, setNameProject, nameProject, editProject, idProject, option, setExports, setExportPNG } = props;
  const { user } = useAuth0();
  const [projectName, setProjectName] = useState(nameProject);
  const [open, setOpen] = useState(false);
  const classes = styles();
  const [clickedExport, setClickedExport] = useState(false);

  const saveModelHandler = () => {
    saveProject({
      projectName,
      email: user.email,
      ...projectData,
    });

    setOpen(true)
    setNameProject(projectName)
  }

  const editModelHandler = () => {
    editProject(idProject!, {
      projectName: projectName,
      email: user.email,
      ...projectData!
    });

    setOpen(true)
    setNameProject(projectName)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleCallBackPdf = () => {
    setClickedExport(false)
  }

  const exportPdf = () => {    
    // setExports(1)
    setExportPNG(true)
    setClickedExport(true)
  }

  return (
    <Fragment>

      <Grid container xs={12} direction="row" className={classes.container}>
        <Grid item xs={8}>
          <div>Project name</div>
          {saveSuccess ?
            <input
              type="text"
              placeholder="Project 1"
              className={classes.fieldInput}
              defaultValue={nameProject}
              onChange={(e) => setProjectName(e.target.value)}
              disabled
            /> :
            nameProject ?
              <input
                type="text"
                placeholder="Project 1"
                className={classes.fieldInput}
                defaultValue={nameProject}
                onChange={(e) => setProjectName(e.target.value)}
              />
              :
              <input
                type="text"
                placeholder="Project 1"
                className={classes.fieldInput}
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
          }

        </Grid>
        <Grid item xs={2}>
          {option === "edit" ?
            <IconButton onClick={editModelHandler} disabled={projectName === ''}>
              <img className={classes.buttons} src={save} alt="50" />
            </IconButton> :
            option === "save" ?
              <IconButton onClick={saveModelHandler} >
                <img className={classes.buttons} src={save} alt="50" />
              </IconButton> : null
          }

        </Grid>
        <Grid xs={2}>
          <IconButton>
            <PictureAsPdfIcon fontSize="small" onClick={() => exportPdf()} />
          </IconButton>
          <div style={{ visibility: "hidden", overflow: "hidden", height: 0 }}>
            <Pdf exportPdf={clickedExport} project={projectData} parentCallback={handleCallBackPdf} nameProject={nameProject}/>
          </div>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" variant="middle" ></Divider>
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
          message={!saveSuccess ? "Your project has been updated" : "Your project has been saved"}
          className={classes.root}
          action={
            <Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose} style={{ color: 'black' }}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </Fragment>
          } />

      </Snackbar>
    </Fragment>
  );
}

const container = compose<Props, {}>(
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      projectData: getProjectData(state),
      saveSuccess: state.domains.shapediver.saveSuccess,
      nameProject: state.domains.shapediver.nameProject,
      idProject: state.domains.shapediver.idProject,
      option: state.domains.core.option
    }),
    {
      setAdvancedOptions,
      saveProject,
      setNameProject,
      editProject,
      setExportPNG,
      setExports
    }
  )
)(ShapeDiverProject);

export default container;
