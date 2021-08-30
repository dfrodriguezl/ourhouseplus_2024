import React, { Fragment } from 'react';
import { useState } from 'react';
import { compose } from 'recompose';
import { useAuth0 } from '@auth0/auth0-react';
import { Grid, makeStyles, Divider, IconButton, Theme } from '@material-ui/core';
import { connect } from 'react-redux';
import { getProjectData, saveProject, setAdvancedOptions } from 'domains/shapeDiver/slice';
import { download, save } from 'assets'

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
  }
}));

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
  saveProject: typeof saveProject;
}

interface StateProps {
  projectData: any;
}

type Props = StateProps & DispatchProps;
const ShapeDiverProject = (props: Props) => {
  const { saveProject, projectData } = props;
  const { user } = useAuth0();
  const [projectName, setProjectName] = useState('');
  const classes = styles();

  const saveModelHandler = () => {
    saveProject({
      projectName,
      email: user.email,
      ...projectData,
    });
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
          />
        </Grid>
        <Grid item xs={2}>
          <IconButton onClick={saveModelHandler} disabled={projectName === ''}>
            <img className={classes.buttons} src={save} alt="50" />
          </IconButton>
        </Grid>
        <Grid item xs={2}>
          <IconButton>
            <img className={classes.buttons} src={download} alt="50" />
          </IconButton>
        </Grid>
      </Grid>
      <Divider orientation="horizontal" variant="middle" ></Divider>
    </Fragment>
  );
}

const container = compose<Props, {}>(
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      projectData: getProjectData(state)
    }),
    {
      setAdvancedOptions,
      saveProject,
    }
  )
)(ShapeDiverProject);

export default container;
