import React, { Fragment } from 'react';
import { useState } from 'react';
import { compose } from 'recompose';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, makeStyles, Divider, IconButton, Theme, Snackbar } from '@material-ui/core';
import { connect } from 'react-redux';
import { getProjectData, saveProject, setAdvancedOptions } from 'domains/shapeDiver/slice';
import { save } from 'assets'
import CloseIcon from '@material-ui/icons/Close';

import { RootState } from 'app/store';

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
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  }
}));

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
  saveProject: typeof saveProject;
}

interface StateProps {
  projectData: any;
  saveSuccess: boolean;
}

type Props = StateProps & DispatchProps;
const ShapeDiverProject = (props: Props) => {
  const { saveProject, projectData, saveSuccess } = props;
  const { user } = useAuth0();
  const [projectName, setProjectName] = useState('');
  const [open, setOpen] = useState(false);
  const classes = styles();

  const saveModelHandler = () => {
    // saveProject({
    //   projectName,
    //   email: user.email,
    //   ...projectData,
    // });

    setOpen(true)

  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Fragment>
      <Grid container xs={12} direction="row" className={classes.container}>
        <Grid item xs={8}>
          <div>Project name</div>
          <input
            type="text"
            placeholder="Project 1"
            className={classes.fieldInput}
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            disabled={saveSuccess}
          />
        </Grid>
        <Grid item xs={2}>
          {!saveSuccess ?
            <IconButton onClick={saveModelHandler} disabled={projectName === ''}>
              <img className={classes.buttons} src={save} alt="50" />
            </IconButton> :
            null
          }

        </Grid>
      </Grid>
      <Divider orientation="horizontal" variant="middle" ></Divider>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={6000}
        message="Your project has been saved"
        classes={{ root: classes.root }}
        action={
          <Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  );
}

const container = compose<Props, {}>(
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      projectData: getProjectData(state),
      saveSuccess: state.domains.shapediver.saveSuccess
    }),
    {
      setAdvancedOptions,
      saveProject,
    }
  )
)(ShapeDiverProject);

export default container;
