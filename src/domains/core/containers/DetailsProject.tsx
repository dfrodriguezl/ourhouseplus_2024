import { Fragment } from 'react';
import { Grid, makeStyles, createStyles } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { PageContainer } from 'domains/core/containers';
import { img_basic_volume, img_facade, img_interior } from 'assets';
import { ToolbarDetailsProject, TopPanel } from '../components';
import { loadProjectById } from 'domains/shapeDiver/slice';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { compose } from 'recompose';
import { Project } from 'domains/shapeDiver/models';
import { useEffect } from 'react';
import { CommercialContainer, ContainerWhite, FacadeContainer, GeneralParameters, GeolocatedContainer } from 'domains/common/components';
import DwellingsContainer from 'domains/common/components/DwellingsContainer';

const useStyles = makeStyles(() =>
  createStyles({
    topPanel: {
      background: 'transparent linear-gradient(93deg, #D6D5E4 0%, #D9D7E1 52%, #E5DED0 100%) 0% 0% no-repeat padding-box',
      height: '60px'
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
    }
  })
);

interface RouteProps {
  id: string;
}

interface StateProps {
  currentProject: Project | undefined;
}

interface DispatchProps {
  loadProjectById: typeof loadProjectById;
}

type Props = StateProps & DispatchProps & RouteComponentProps<RouteProps>;
export const DetailsProjects = (props: Props) => {
  const { loadProjectById, currentProject, match: { params } } = props;
  const classes = useStyles();

  useEffect(() => {
    loadProjectById(params.id);
  }, [loadProjectById, params])


  return (
    <Fragment>
      <PageContainer background="black-model">
        <Grid container xs={12} className={classes.topPanel} >
          <TopPanel />
          <ToolbarDetailsProject currentProject={currentProject!} id={params.id}/>
          <GeneralParameters project={currentProject} />
          <ContainerWhite img={img_basic_volume} modelData={currentProject?.modelData}></ContainerWhite>
          <DwellingsContainer img={img_facade} modelData={currentProject?.modelData}></DwellingsContainer>
          <CommercialContainer img={img_facade}></CommercialContainer>
          <FacadeContainer img={img_interior} modelData={currentProject}></FacadeContainer>
          <GeolocatedContainer img={img_interior}></GeolocatedContainer>
        </Grid>
      </PageContainer>
    </Fragment>
  )
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      currentProject: state.domains.shapediver.currentProject
    }),
    {
      loadProjectById
    }
  ))
  (DetailsProjects);

export default container;

