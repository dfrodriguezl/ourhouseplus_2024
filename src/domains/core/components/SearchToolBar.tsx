import _ from 'lodash';
import React, { useEffect, useState, Fragment } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Box, Divider, Grid, makeStyles, Theme, Dialog, List, ListItem } from '@material-ui/core';
import { getLocations, setOption } from 'domains/core/coreSlice';
import { Densities, Density, Location, LocationSimple } from 'domains/core/models';
import { ButtonWrapper, LocationMenu, SearchPill, UrbanismMenu } from 'domains/core/components';
import { setInitialParams, setSaveSuccess, setDensityGeneral, setNameProject, setImportModel, setTerrain, setCoordinates } from 'domains/shapeDiver/slice';
import { setSearchClick } from 'domains/core/coreSlice';
import { RootState } from 'app/store';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { back, forward } from 'assets';
import { useAuth0 } from '@auth0/auth0-react';

const useStyles = makeStyles((theme: Theme) => ({
  searchBox: {
    marginTop: theme.spacing(2),
    background: 'rgba(255, 255, 255, 0.9)',
    padding: '5px 30px',
    borderRadius: 32,
    boxShadow: '4px 4px 3px #00000029',
    border: '1px solid #707070'
  },
  fieldDivider: {
    backgroundColor: theme.palette.common.black,
    height: '100%'
  },
  dialog: {
    height: '100%',
    marginTop: '30%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  list: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  itemList: {
    paddingLeft: 25
  }
}));
interface StateProps {
  locations: Location[];
  searchClick: Boolean;
}
interface DispatchProps {
  setInitialParams: typeof setInitialParams;
  getLocations: typeof getLocations;
  setSearchClick: typeof setSearchClick;
  setSaveSuccess: typeof setSaveSuccess;
  setDensityGeneral: typeof setDensityGeneral;
  setOption: typeof setOption;
  setNameProject: typeof setNameProject;
  setTerrain: typeof setTerrain;
  setCoordinates: typeof setCoordinates;
}

type Props = DispatchProps & StateProps & RouteComponentProps;
const SearchToolBar = (props: Props) => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  const { setInitialParams, history, locations, searchClick, getLocations, setSearchClick, setSaveSuccess, setDensityGeneral, setOption, setNameProject, setTerrain, setCoordinates } = props;

  const classes = useStyles();
  const [location, setLocation] = useState<Location>();
  const [locationSimple, setLocationSimple] = useState<LocationSimple>();
  const [area, setArea] = useState<number>();
  const [density, setDensity] = useState<Density>();
  const [searchBoxSelected, setSearchBoxSelected] = useState(1);

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  

  useEffect(() => {
    getLocations();
  }, [getLocations])

  const updateLocation = (value: string) => {
    const loc = _.find(locations, x => x.city === value);
    setLocation(loc); 
  }

  const updateStep = (step: number) => {
    setSearchBoxSelected(step)
    if (step === 4) {
      setSearchClick(false)
      next()
    }
  }

  const updateArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(parseInt(event.target.value));

  }

  const updateDensity = (value: string) => {
    const den = _.find(Densities, x => x.label === value);
    setDensity(den);
    
    const densityLocal = den?.value === 0 ? "suburban" : "urban";
    setLocationSimple({
      id: location?.id!,
      city: location?.city!,
      densityGeneral: location?.density!,
      description: location?.description!,
      maxPriFloors: location![densityLocal].maxPriFloors,
      maxSecFloors: location![densityLocal].maxSecFloors,
      streetFloors: location![densityLocal].streetFloors,
      windowPercentage: location![densityLocal].windowPercentage,
      unitsNumberType: location![densityLocal].unitsNumberType,
      density: location![densityLocal].density,
      flatSize: location![densityLocal].flatSize,
      flatType: location![densityLocal].flatType,
      regen: location![densityLocal].regen,
      lat: location![densityLocal].lat,
      lon: location![densityLocal].lon,
      p_vivs: location![densityLocal].p_vivs,
      axisSelection: location![densityLocal].axisSelection,
      typologies: location![densityLocal].typologies,
      emptySpaceSelection: location![densityLocal].emptySpaceSelection,
      undefinedTower: location![densityLocal].undefinedTower,
      streetDensity: location![densityLocal].streetDensity,
      islandSpacings: location![densityLocal].islandSpacings,
      floorsAlignment: location![densityLocal].floorsAlignment,
      unitsOrganization: location![densityLocal].unitsOrganization
    });
  }


  const next = () => {
    if (isAuthenticated && user) {
      if (user['https://www.rea-web.com/roles'].includes('Administrator')) {
        
        setInitialParams({
          location: locationSimple,
          area: area!,
          density: density!
        });
        setDensityGeneral(density!.value);
        setSaveSuccess(false)
        setOption("save");
        setNameProject("");
        window.importFile = undefined;
        setImportModel('')
        setTerrain(1)
        setCoordinates(undefined)

        history.push('/models/step1');
      }
    } else {
      loginWithRedirect();
    }
  }

  return (
    <Grid container>
      {smallScreen && searchClick ?
        <Fragment>
          <Grid item xs={1}>
            {searchBoxSelected !== 1 ?
              <img src={back} alt="back-arrow" />
              : null}
          </Grid>
          <Grid item xs={10}>
            <Box fontSize={23} style={smallScreen && searchClick ? { color: 'white', textAlign: 'center' } : { marginLeft: 30, color: 'white' }}>
              Start building here
            </Box>
          </Grid>
          <Grid item xs={1} >
            <img src={forward} alt="forward-arrow" />
          </Grid>
        </Fragment> :
        <Box fontSize={23} style={smallScreen && searchClick ? { color: 'white', textAlign: 'center' } : { marginLeft: 30, color: 'white' }}>
          Start building here
        </Box>
      }


      <Grid container className={classes.searchBox} >

        {!smallScreen ?
          <Fragment>
            <Grid item container direction="column" xs={12} sm={3} justify="center" >
              <LocationMenu
                updateLocation={updateLocation}
                location={location!}
                updateStep={updateStep}
              />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
            </Grid>
            <Grid item container direction="column" xs={12} sm={3} justify="center">
              <SearchPill
                label="Area hectares"
                placeholder="total terrain area"
                onChange={updateArea}
                value={area || ''}
                type="number"
              />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
            </Grid>
            <Grid item container direction="column" xs={12} sm={3} justify="center">
              <UrbanismMenu
                updateDensity={updateDensity}
                density={density}
                updateStep={updateStep}
              />
            </Grid>
            <Grid item container xs={1} justify="center">
              <ButtonWrapper
                label="Next"
                size="small"
                onClick={next}
                disabled={!area || !location || !density}
              />
            </Grid>
          </Fragment> :
          searchBoxSelected === 1 ?
            <Fragment>
              <Grid container direction="column" xs={12} justify="center" >
                <LocationMenu
                  updateLocation={updateLocation}
                  location={location!}
                  updateStep={updateStep}
                />
              </Grid>
            </Fragment> :
            searchBoxSelected === 2 ?
              <Grid item container direction="column" xs={12} sm={3} justify="center">
                <Dialog
                  fullScreen
                  open={true}
                  className={classes.dialog}
                  PaperProps={{
                    style: {
                      borderTopLeftRadius: 32,
                      borderTopRightRadius: 32,
                    }
                  }}
                >

                  <List className={classes.list}>
                    <ListItem className={classes.list} onKeyDown={(e) => e.key === 'Enter' ? setSearchBoxSelected(3) : null}>
                      <SearchPill
                        label="Area square feet"
                        placeholder="total terrain area"
                        onChange={updateArea}
                        value={area || ''}
                        type="number"
                      />
                    </ListItem>
                  </List>
                </Dialog >
              </Grid> :
              searchBoxSelected === 3 ?
                <Grid item container direction="column" xs={12} sm={3} justify="center">
                  <UrbanismMenu
                    updateDensity={updateDensity}
                    density={density}
                    updateStep={updateStep}
                  />
                </Grid> : null
        }
        {/* {smallScreen && searchBoxSelected == 1?null:
          <Fragment>
            <Grid item container direction="column" xs={3} justify="center" >
              <LocationMenu
                updateLocation={updateLocation}
                location={location}
              />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
            </Grid>
          </Fragment>
        } */}

        {/* {smallScreen && searchBoxSelected == 1?null:
          <Fragment>
            <Grid item container direction="column" xs={3} justify="center" >
              <LocationMenu
                updateLocation={updateLocation}
                location={location}
              />
            </Grid>
            <Grid item>
              <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
            </Grid>
          </Fragment>
        } */}




      </Grid>
      {smallScreen ?
        <Box fontSize={19} style={{ marginLeft: 30, color: 'white', marginTop: 10 }}>
          3 step selection
        </Box> : null
      }

    </Grid>
  );
}


const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      locations: state.domains.core.locations,
      searchClick: state.domains.core.searchClick
    }),
    {
      getLocations,
      setInitialParams,
      setSearchClick,
      setSaveSuccess,
      setDensityGeneral,
      setOption,
      setNameProject,
      setTerrain,
      setCoordinates
    }
  )
)(SearchToolBar);

export default container;
