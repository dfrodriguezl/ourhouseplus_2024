import { Fragment } from 'react';
import { Grid, makeStyles, createStyles, Theme, Typography, Button, Box, Divider } from '@material-ui/core';
import { RouteComponentProps, useParams } from 'react-router-dom';
import { PageContainer, TopPanel, GeneralParameters } from 'domains/core/containers';
import { MapGeo } from 'domains/core/components';
import { download, sum } from 'assets';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import clsx from 'clsx';


// Delete this const
const projects = [
    {
        id: 1,
        name: 'Project 1'
    },
    {
        id: 2,
        name: 'Project 2'
    },
    {
        id: 3,
        name: 'Project 3'
    }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topPanel: {
      background: 'transparent linear-gradient(93deg, #D6D5E4 0%, #D9D7E1 52%, #E5DED0 100%) 0% 0% no-repeat padding-box',
      height: '60px'
    },
    iconTop:{
        width:15,
        height: 15
    },
    textTop:{
        fontSize:10
    },
    textProfile: {
        color: 'white',
        marginTop: 30,
        fontSize:12
    },
    becomeMember: {
        borderRadius: 15,
        color: 'white',
        textTransform: 'none',
        border: '2px solid white',
        padding: '0px',
        width: '50%',
        fontSize:10,
        marginTop: 5
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
      subtitleProjects: {
          color: 'white',
          marginTop: 30
      },
      backgroundNew: {
        background: '#FFFFFF33 0% 0% no-repeat padding-box',
        height: '30vh',
        width: '100%',
        marginTop: 10,
        display: 'flex'
      },
      AddBox: {
          background: '#FFFFFF 0% 0% no-repeat padding-box',
          opacity: 0.9,
          border: '1px solid #707070',
          marginBottom: 10,
          height: '10vh',
          width: '10vh',
          display: 'flex'
      },
      text:{
          color: 'white',
          marginTop: 10
      },
      backgroundProject: {
        background: '#FFFFFF1A 0% 0% no-repeat padding-box',
        width: '100%',
        marginTop: 20,
        display: 'flex',
        padding: '15px 0px',
        marginBottom: 50,
        '&:hover': {
            backgroundColor: '#FFFFFF33'
          },
    },
    optionsProject: {
        color: '#FFFFFFB3',
        fontSize: 15
    },
    containerOptions:{
        marginTop: 10
    },
    optionsIcon:{
        marginLeft: 10, 
        fontSize: 15
    },
    imgIcon: {
        height: '15px',
        marginLeft: 10, 
    },
    nameProject:{
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
    principalParameters:{
        color: 'white',
        fontWeight: 400
    },
    infoContainer:{
        padding: '0px 20px'
    },
    titleContainer: {
        color: "white"
    },
    rigthContainer:{
        borderLeft: '0.5px solid #ffffff33',
        paddingLeft: 30
    },
    imgProject: {
        borderRadius: 32
    },
    imgContainer: {
        padding: 20
    },
    whiteText:{
        color: 'white'
    },
    containerMiddle:{
        marginTop: 50
    },
    divider:{
        backgroundColor: '#707070',
        margin: '10px 0px'
    },
    containerEnd:{
        padding: '0px 100px'
    },
    lightContainer:{
        background: '#D6D5E4 0% 0% no-repeat padding-box',
        padding: '20px 60px',
        borderRadius: 32
    },
    boldText:{
        fontWeight: 'bolder',
    },
    groupText: {
        marginTop: 20
    },
    whitePill: {
        backgroundColor: 'white',
        borderRadius: 30,
        border: 'solid 1px #707070',
        textAlign: 'center',
        margin: '2px 20px'
    },
    blackContainer:{
        padding: '20px 60px',
    },
  })
);

interface StateProps {
  searchClick?: Object;
}

interface ownParams {
    id?: string | undefined;
}


interface pillProps{
    text?: string;
}

type Props = RouteComponentProps & StateProps;
const DetailsSummary = (props: Props) => {

    const classes = useStyles();

    const params:ownParams = useParams();
    const id = params.id;
    let project = projects.filter((p:any) => {
        return p.id === id;
    })

  return (
    <Fragment>
      <PageContainer background="black-model">
          <Grid container xs={12} className={classes.topPanel} >
                <TopPanel />
              <Grid item container xs={12} direction="row">
                <Grid item container xs={5}>
                    <Typography variant="h6" className={classes.nameProject}>
                        Project 1 <span className={classes.summaryText}>Summary</span>
                    </Typography>
                </Grid>
                <Grid item container xs={7} style={{justifyContent:'flex-end'}}>
                    <Button className={classes.compareButton}
                        endIcon={<VisibilityOffIcon />}>
                        Publish
                    </Button>
                    <Button className={classes.compareButton}
                        endIcon={<EditIcon />}>
                        Edit
                    </Button>
                    <Button className={classes.compareButton}
                        endIcon={<img alt="icon-download" src={download} width={15}/>}>
                        Download pdf
                    </Button>
                </Grid>
              </Grid>
              <GeneralParameters />
              <Grid item container xs={12}>
                  <Grid item xs={4} className={ classes.imgContainer }>
                      <img alt="img-project" src={sum} className={ classes.imgProject }></img>
                  </Grid>
                  <Grid item xs={4} style={{ padding: '0px 75px' }}>
                      <Typography variant="h6" className={classes.whiteText}>
                          Project Name
                      </Typography>
                      <Typography variant="body1" className={classes.whiteText}>
                          Mix family housing
                      </Typography>
                      <Box className={clsx(classes.whiteText, true && classes.containerMiddle, true)}>
                          <Typography variant="body2">
                            Site area (ha)
                          </Typography>
                          <Divider className={ classes.divider }/>
                          <Typography variant="body2">
                            Total dwellings
                          </Typography>
                          <Typography variant="body2">
                            Density u/ha
                          </Typography>
                          <Typography variant="body2">
                            Density hr/ha
                          </Typography>
                          <Divider className={ classes.divider }/>
                          <Typography variant="body2">
                            Plot ratio
                          </Typography>
                          <Divider className={ classes.divider }/>
                          <Typography variant="body2">
                            Max floors
                          </Typography>
                      </Box>
                  </Grid>
                  <Grid item container xs={4} className={ clsx(classes.whiteText, true && classes.containerEnd, true) } alignItems="center">
                      <Box>
                        <Typography variant="body2">
                            Studios
                        </Typography>
                        <Typography variant="body2">
                            Large studios
                        </Typography>
                        <Typography variant="body2">
                            One bedroom
                        </Typography>
                        <Typography variant="body2">
                            Two bedroom
                        </Typography>
                        <Typography variant="body2">
                            Three bedroom
                        </Typography>
                        <Typography variant="body2">
                            Four bedroom
                        </Typography>
                      </Box>
                  </Grid>
              </Grid>
              <Grid item container xs={12} className={ classes.backgroundProject } style={{ padding: 20 }} direction="row">
                <Grid item container xs={6} className={ classes.lightContainer }>
                    <Grid item container xs={12} direction="column">
                        <Typography variant="body1" className={ classes.boldText }>
                            Project area summary
                        </Typography>
                    </Grid>
                    <Grid item container xs={4}>
                        <Typography variant="body2" className={ classes.groupText }>
                            <span className={ classes.boldText }>Plot price</span>
                            <br />
                            Brut plot area 
                            <br />
                            Net plot area
                        </Typography>
                        <Typography variant="body2" className={ classes.groupText }>
                            <span className={ classes.boldText }>Urbanism</span>
                            <br />
                            Roads
                            <br />
                            Green space (parks)
                            <br />
                            Side walks
                        </Typography>
                        <Typography variant="body2" className={ classes.groupText }>
                            <span className={ classes.boldText }>Urbanism</span>
                            <br />
                            Building total area
                            <br />
                            Selling total area
                            <br />
                            Leasing total area
                        </Typography>
                    </Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={4}>
                        <Typography variant="body2" className={ classes.groupText }>
                            <br />
                            <WhitePill text="XXX"/>
                            <WhitePill text="XXX"/>
                        </Typography>
                        <Typography variant="body2" className={ classes.groupText }>
                            <br />
                            <WhitePill text="XXX"/>
                            <WhitePill text="XXX"/>
                            <WhitePill text="XXX"/>
                        </Typography>
                        <Typography variant="body2" className={ classes.groupText }>
                            <br />
                            <WhitePill text="XXX"/>
                            <WhitePill text="XXX"/>
                            <WhitePill text="XXX"/>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={6} className={ classes.blackContainer }>      
                    <Grid item container xs={12} direction="column">
                        <Typography variant="body1" className={ clsx( classes.boldText, true && classes.whiteText, true )  }>
                            Project summary
                        </Typography>
                    </Grid>
                    <Grid item container xs={6} direction="column">
                        <Typography variant="body2" className={ clsx( classes.groupText, true && classes.whiteText, true )  }>
                            <span className={ classes.boldText }>Facade</span>
                            <br />
                            Facade linear meters
                            <br />
                            Facade materials
                            <br />
                        </Typography>
                        <Typography variant="body2" className={ clsx( classes.groupText, true && classes.whiteText, true )  }>
                            <span className={ classes.boldText }>Dwellings</span>
                            <br />
                            Type
                            <br />
                            Studios size
                            <br />
                            Large studios
                            <br />
                            One bedroom
                            <br />
                            Two bedroom
                            <br />
                            Three bedroom
                        </Typography>
                    </Grid>
                    <Grid item container xs={6} direction="column"> 
                        <Typography variant="body2" className={ clsx( classes.groupText, true && classes.whiteText, true )  }>
                                <br />
                                xxxx
                                <br />
                                brick, glass, aluminum, concrete
                                <br />
                            </Typography>
                            <Typography variant="body2" className={ clsx( classes.groupText, true && classes.whiteText, true )  }>
                                <br />
                                small, open kitchen
                                <br />
                                xxxx
                                <br />
                                xxxx
                                <br />
                                xxxx
                                <br />
                                xxxx
                                <br />
                                xxxx
                            </Typography>
                    </Grid>
                    <Grid item container xs={12} justify="flex-end">
                        <Button className={ classes.compareButton } >
                            View project 3D
                        </Button>
                    </Grid>
                    
                </Grid>
                <Grid item container xs={12} style={{ height:'30vh', marginTop:25 }}>
                    <MapGeo />
                </Grid>
              </Grid>
          </Grid>
      </PageContainer>
    </Fragment>
  )
}

const WhitePill = ( props: pillProps ) => {
    const classes = useStyles();
    const { text } = props;

    return (
        <Box className={ classes.whitePill }>
            <Typography variant="body2">
                {text}
            </Typography>
        </Box>
    )
}

export default DetailsSummary;
