import React from 'react';
import { Button, makeStyles, Grid, Typography } from '@material-ui/core';
import { Project } from 'domains/shapeDiver/models';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import EditIcon from '@material-ui/icons/Edit';
import { download } from 'assets';
import { useHistory } from 'react-router-dom';
import { compose } from 'recompose';
import _ from 'lodash';
import { Densities, Density } from 'domains/core/models';
import { useAuth0 } from '@auth0/auth0-react';
import { setInitialParams, setSaveSuccess, setNameProject, setDensityGeneral, setIdProject } from 'domains/shapeDiver/slice';
import { RootState } from 'app/store';
import { connect } from 'react-redux';

const styles = makeStyles(() => ({
  nameProject: {
    color: 'white',
    marginTop: 30,
    fontWeight: 400
  },
  summaryText: {
    fontWeight: 100,
    color: 'white',
    opacity: 0.8,
    marginRight: 5
  },
  compareButton: {
    borderRadius: 15,
    color: 'black',
    textTransform: 'none',
    marginLeft: 10,
    padding: '2px 30px',
    marginTop: 30,
    background: '#D6D5E4 0% 0% no-repeat padding-box',
    fontSize: 15,
    letterSpacing: '0.69px',
    opacity: 1,
    fontWeight: 'bold',
    '&:hover': {
      color: 'white',
    }
  },
}));

interface OwnProps {
  currentProject: Project | undefined;
  id: string;
}


interface DispatchProps {
  setInitialParams: typeof setInitialParams;
  setSaveSuccess: typeof setSaveSuccess;
  setNameProject: typeof setNameProject;
  setDensityGeneral: typeof setDensityGeneral;
  setIdProject: typeof setIdProject;
}


type Props = OwnProps & DispatchProps;
const ToolbarDetailsProject = (props: Props) => {
  const { id, currentProject, setInitialParams, setSaveSuccess, setNameProject, setDensityGeneral, setIdProject } = props;
  const classes = styles();
  const history = useHistory();
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();

  const goToSummary = (id: string) => {
    history.push("/detailsSum/" + id)
  }

  const getDensityType = (value: number) => {
    const den = _.find(Densities, (x: Density) => x.value === value);
    return den;
  }

  const gotTo3DView = (id: string, project: Project) => {
    const locationSaved: any = project?.location;
    const densityGeneral = project?.location?.densityGeneral !== undefined ? project?.location?.densityGeneral! : project?.location?.density!;
    const densityLocal = densityGeneral === 0 ? "suburban" : "urban";

    if (isAuthenticated && user) {

      if (user['https://www.rea-web.com/roles'].includes('Administrator')) {

        setInitialParams({
          location: locationSaved![densityLocal] ?
            {
              id: locationSaved?.id!,
              city: locationSaved?.city!,
              densityGeneral: locationSaved?.density!,
              description: locationSaved?.description!,
              maxPriFloors: locationSaved![densityLocal].maxPriFloors,
              maxSecFloors: locationSaved![densityLocal].maxSecFloors,
              streetFloors: locationSaved![densityLocal].streetFloors,
              windowPercentage: locationSaved![densityLocal].windowPercentage,
              unitsNumberType: locationSaved![densityLocal].unitsNumberType,
              density: locationSaved![densityLocal].density,
              flatSize: locationSaved![densityLocal].flatSize,
              flatType: locationSaved![densityLocal].flatType,
              regen: locationSaved![densityLocal].regen,
              lat: locationSaved![densityLocal].lat,
              lon: locationSaved![densityLocal].lon,
              p_vivs: locationSaved![densityLocal].p_vivs,
              axisSelection: locationSaved![densityLocal].axisSelection,
              typologies: locationSaved![densityLocal].typologies,
              emptySpaceSelection: locationSaved![densityLocal].emptySpaceSelection,
              undefinedTower: locationSaved![densityLocal].undefinedTower,
              streetDensity: locationSaved![densityLocal].streetDensity,
              islandSpacings: locationSaved![densityLocal].islandSpacings,
              floorsAlignment: locationSaved![densityLocal].floorsAlignment,
              unitsOrganization: locationSaved![densityLocal].unitsOrganization,
            } :
            project?.location,
          area: project?.area!,
          density: getDensityType(densityGeneral)!
        });
        setDensityGeneral(densityGeneral);
        setSaveSuccess(false)
        setNameProject(project?.projectName!)
        setIdProject(id);
        history.push('/models/step1');
      }
    } else {
      loginWithRedirect();
    }
  }

  return (
    <Grid item container xs={12} direction="row">
      <Grid item container xs={5}>
        <Typography variant="h6" className={classes.nameProject}>
          {currentProject?.projectName} <span className={classes.summaryText}>Summary</span>
        </Typography>
      </Grid>
      <Grid item container xs={7} style={{ justifyContent: 'flex-end' }}>
        <Button className={classes.compareButton}
          endIcon={<VisibilityOffIcon />}>
          Publish
        </Button>
        <Button className={classes.compareButton}
          endIcon={<EditIcon />}
          onClick={() => gotTo3DView(id, currentProject!)}>
          Edit
        </Button>
        <Button className={classes.compareButton}
          endIcon={<img alt="downlaod-icon" src={download} width={15} />}
          onClick={() => goToSummary(id)}>
          Download pdf
        </Button>
      </Grid>
    </Grid>
  );
}

const container = compose<Props, OwnProps>(
  connect<{}, DispatchProps, {}, RootState>(
    null,
    {
      setInitialParams,
      setSaveSuccess,
      setNameProject,
      setDensityGeneral,
      setIdProject
    }
  )
)(ToolbarDetailsProject);

export default container;

// export default ToolbarDetailsProject;

