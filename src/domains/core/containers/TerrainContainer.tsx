import { Grid, makeStyles, createStyles, Typography, IconButton, Divider, Input, Button, Snackbar, SnackbarContent, Theme } from "@material-ui/core";
import { ArrowBackIos, CloudUpload, Add, Close } from "@material-ui/icons";
import { PageContainer } from ".";
import { LocationMenu, UrbanismMenu } from "../components";
import { Densities, Density, Location } from "../models";
import { getLocations, setOption } from 'domains/core/coreSlice';
import { Fragment, useEffect, useRef, useState } from "react";
import { RouteComponentProps, withRouter } from "react-router";
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RootState } from "app/store";
import _ from 'lodash';
import { useAuth0 } from '@auth0/auth0-react';
import { loadProjectsByUsername, saveProject, setDensityGeneral, setIdProject, setImportModel, setInitialParams, setSaveSuccess, setTerrain } from "domains/shapeDiver/slice";
import { Project } from "domains/shapeDiver/models";
import JSZip from "jszip";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bolder'
    },
    backIcon: {
      color: 'white'
    },
    backText: {
      color: 'white',
      fontWeight: 'bolder'
    },
    containerText: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'lighter'
    },
    backgroundProject: {
      background: '#FFFFFF1A 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 50px',
      '&:hover': {
        backgroundColor: '#FFFFFF33'
      },
    },
    backgroundProjectWhite: {
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      width: '100%',
      marginTop: 20,
      display: 'flex',
      padding: '15px 50px',
      marginBottom: 50,
      borderRadius: 31
    },
    uploadIcon: {
      background: '#FF6C6C',
      color: 'white'
    },
    containerWhiteTextBold: {
      color: '#000000',
      fontWeight: 'bolder'
    },
    containerWhiteText: {
      color: '#00000080'
    },
    containerWhiteTextSmall: {
      color: '#00000080',
      fontSize: 15
    },
    dividerStyle: {
      width: '100%',
      marginTop: 10
    },
    fieldDivider: {
      backgroundColor: 'black',
      height: '100%'
    },
    searchBox: {
      marginTop: 10,
      marginLeft: 70,
      marginRight: 70,
      background: 'rgba(255, 255, 255, 0.9)',
      borderRadius: 32,
      boxShadow: '4px 4px 3px #00000029',
      border: '1px solid #707070'
    },
    button: {
      cursor: 'pointer',
      borderRadius: 20,
      backgroundColor: '#FF6C6C',
      color: 'white',
      textTransform: 'none',
      margin: '30px 0px',
      '&:hover': {
        backgroundColor: '#FF6C6C'
      },
      padding: '10px 30px'
    },
    infoContainer: {
      padding: '0px 20px'
    },
    titleContainer: {
      color: "white"
    },
    rigthContainer: {
      borderLeft: '0.5px solid #ffffff33',
      paddingLeft: 30,
      paddingRight: 30
    },
    root: {
      background: theme.palette.common.white,
      color: theme.palette.common.black,
    },
    link:{
      textAlign: 'center', 
      width: '100%', 
      textDecoration: 'underline',
      '&:hover': {
        cursor: 'pointer'
      }
    }
  })
);

interface StateProps {
  locations: Location[];
  projects: any[];
}

interface DispatchProps {
  getLocations: typeof getLocations;
  saveProject: typeof saveProject;
  setInitialParams: typeof setInitialParams;
  setDensityGeneral: typeof setDensityGeneral;
  setSaveSuccess: typeof setSaveSuccess;
  setIdProject: typeof setIdProject;
  setOption: typeof setOption;
  setImportModel: typeof setImportModel;
  setTerrain: typeof setTerrain;
  loadProjectsByUsername: typeof loadProjectsByUsername;
}

type Props = StateProps & DispatchProps & RouteComponentProps;
const TerrainContainer = (props: Props) => {
  const classes = useStyles();
  const { getLocations, locations, history, saveProject, setInitialParams, setDensityGeneral, setSaveSuccess, setIdProject, setOption, setImportModel, setTerrain,
    loadProjectsByUsername, projects } = props;
  const [location, setLocation] = useState<any>();
  const [density, setDensity] = useState<Density>();
  const fileInput = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<any>(null);
  const { user, isAuthenticated, loginWithRedirect } = useAuth0();
  const [nameProject, setNameProject] = useState<string>("");
  const [userName, setUserName] = useState<string>(user ? user.name : "");
  const [project, setProject] = useState<Project>();
  const [open, setOpen] = useState(false);
  const [selectedFileCompress, setSelectedFileCompress] = useState<any>(null);
  const [densityLocal, setDensityLocal] = useState<string>("");

  useEffect(() => {
    getLocations();
    setTerrain(1);
  }, [getLocations, setTerrain])

  if (!user) {
    history.push('/home');
    return (<Fragment />);
  }

  const updateLocation = (value: string) => {
    const loc = _.find(locations, x => x.city === value);
    setLocation(loc);
  }

  const updateStep = (step: number) => {
    //TO DO
  }

  const updateDensity = (value: string) => {
    const den = _.find(Densities, x => x.label === value);
    setDensity(den);
    setDensityLocal(den?.value === 0 ? "suburban" : "urban");
  }

  const handleFileUpload = () => {
    fileInput.current!.click();
  }

  const uploadDXF = (event: any) => {

    const file = event.target.files[0];
    const reader = new FileReader();
    setSelectedFile(file);

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

      setSelectedFileCompress(zip);

    }

    reader.readAsArrayBuffer(file);
  }

  const handleClose = () => {
    setSelectedFile(null);
  }

  const saveTerrainForm = () => {
    saveProject({
      projectName: nameProject,
      email: user.email,
      pathTerrain: selectedFileCompress,
      area: 0,
      location: {
        id: location?.id!,
        city: location?.city!,
        densityGeneral: density?.value!,
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
      },
      terrain: 2,
      facadeDirection: undefined,
      roomType: undefined,
      floorSelection: undefined,
      modelData: undefined
    })
    setOpen(true)
  }

  const handleCloseSnackbar = () => {
    setOpen(false)
  }

  const getDensityType = (value: number) => {
    const den = _.find(Densities, (x: Density) => x.value === value);
    return den;
  }

  const gotTo3DView = () => {


    if (isAuthenticated && user) {

      if (user['https://www.rea-web.com/roles'].includes('Administrator')) {

        loadProjectsByUsername(user.email);
        const project = projects[projects.length - 1];
        const locationSaved: any = project?.location;
        const densityGeneral = project?.location?.densityGeneral !== undefined ? project?.location?.densityGeneral! : project?.location?.density!;
        const densityLocal = densityGeneral === 0 ? "suburban" : "urban";

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
          area: project.area === 0 && project.pathTerrain && !project.modelData ? 1 : project.area === 0 && project.modelData?.totalLandArea ? project.modelData?.totalLandArea / 10000 : project?.area!,
          density: getDensityType(densityGeneral)!
        });
        setDensityGeneral(densityGeneral);
        setSaveSuccess(false)
        setNameProject(project?.projectName!)
        setIdProject(project?.id);
        setOption("edit");


        if (!project.area && project.pathTerrain) {
          unzipFile(project.pathTerrain, project?.id, project.terrain);
        } else {
          window.importFile = undefined;
          setImportModel('')
        }
        history.push('/models/step1');
      }
    } else {
      loginWithRedirect();
    }
  }

  async function unzipFile(zip: any, id: string, terrain: number | undefined) {
    const jsDecodeZip = new JSZip();
    const unzipped = await jsDecodeZip.loadAsync(zip);
    const content = await unzipped.file(unzipped.files['undefined'].name)?.async("blob").then(function (fileData) {
      return new File([fileData], id + '.dxf')
    })
    window.importFile = content;
    setTerrain(terrain);
    setImportModel(id + '.dxf');
  }

  return (
    <PageContainer background="black-model">
      <Grid xs={12}>
        <Grid xs={12}>
          <IconButton>
            <ArrowBackIos className={classes.backIcon} />
            <Typography className={classes.backText}>Back</Typography>
          </IconButton>
          <Typography className={classes.title} >Upload terrain shape</Typography>
        </Grid>
        <Grid xs={12} container>
          <Grid xs={2} />
          <Grid xs={10} className={classes.backgroundProject}>
            <Grid xs={3}>
              <Typography className={classes.backText}>How to prepare your DXF file</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className={classes.containerText}>1.Open Autocad</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className={classes.containerText}>2.Draw your terrain shape</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography className={classes.containerText}>3.Upload your file</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={12} item container>
          <Grid xs={3} />
          <Grid container xs={6} className={classes.backgroundProjectWhite}>
            <Grid xs={3} item container justify="center">
              <IconButton className={classes.uploadIcon} onClick={handleFileUpload}>
                <input
                  ref={fileInput}
                  type="file"
                  style={{ display: 'none' }}
                  onChange={(event) => uploadDXF(event)}
                  accept=".dxf"
                />
                {selectedFile ?
                  <Add fontSize="large"></Add> :
                  <CloudUpload fontSize="large"></CloudUpload>
                }
              </IconButton>
            </Grid>
            <Grid xs={9} item container justify="center">
              {selectedFile ?
                <Fragment>
                  <Grid xs={10} item container justify="center">
                    <Typography className={classes.containerWhiteTextBold} style={{ alignSelf: 'center' }}>
                      {selectedFile?.name}
                    </Typography>
                  </Grid>
                  <Grid xs={2} item container>
                    <IconButton style={{ alignSelf: 'center' }} onClick={() => handleClose()}>
                      <Close></Close>
                    </IconButton>
                  </Grid>
                </Fragment> :
                <Typography className={classes.containerWhiteTextBold}>Upload terrain shape
                  <br />
                  <span className={classes.containerWhiteText}>Add DXF file</span>
                </Typography>
              }

            </Grid>
            <Divider className={classes.dividerStyle} />
            <Grid xs={12}>
              <Typography className={classes.containerWhiteTextSmall}>Terrain name</Typography>
            </Grid>
            <Grid xs={12}>
              <Input style={{ height: '60px', width: '100%' }} onChange={(e) => { setNameProject(e.target.value) }} />
            </Grid>
            <Grid xs={12}>
              <Typography className={classes.containerWhiteTextSmall}>Terrain owner</Typography>
            </Grid>
            <Grid xs={12}>
              <Input style={{ height: '60px', width: '100%' }} value={userName} />
            </Grid>
            <Grid xs={12} container justify="center" className={classes.searchBox}>
              <Grid item container direction="column" xs={5} justify="center" >
                <LocationMenu
                  updateLocation={updateLocation!}
                  location={location}
                  updateStep={updateStep!}
                />
              </Grid>
              <Grid item>
                <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
              </Grid>
              <Grid item container direction="column" xs={5} justify="center">
                <UrbanismMenu
                  updateDensity={updateDensity}
                  density={density}
                  updateStep={updateStep}
                />
              </Grid>

            </Grid>
            <Grid xs={12} container justify="center">
              <Button
                size="large"
                className={classes.button}
                onClick={() => saveTerrainForm()}
                disabled={!nameProject || !userName || !selectedFile || !location || !density}
              >
                Save
              </Button>
            </Grid>
            <a className={classes.link}>
              Continue to building a project
            </a>
          </Grid>
        </Grid>
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
          message="Your terrain has been saved"
          className={classes.root}
          action={
            <Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar} style={{ color: 'black' }}>
                <Close fontSize="small" />
              </IconButton>
            </Fragment>
          } />

      </Snackbar>
    </PageContainer>)
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      locations: state.domains.core.locations,
      projects: state.domains.shapediver.projects
    }),
    {
      getLocations,
      saveProject,
      setInitialParams,
      setDensityGeneral,
      setSaveSuccess,
      setIdProject,
      setOption,
      setImportModel,
      setTerrain,
      loadProjectsByUsername
    }
  )
)(TerrainContainer);

export default container;