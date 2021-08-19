import React, { Fragment } from 'react';
import { Grid, makeStyles, createStyles, Theme, IconButton, Typography, Button } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import { SearchToolBar } from 'domains/core/components';
import { PageContainer } from 'domains/core/containers';
import { Slogan, ScrollDown } from 'domains/common/components';
import { HomeSub1 } from 'domains/core/containers';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { cube, metamorphose } from 'assets';
import AddIcon from '@material-ui/icons/Add';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    topPanel: {
      background: 'transparent linear-gradient(93deg, #D6D5E4 0%, #D9D7E1 52%, #E5DED0 100%) 0% 0% no-repeat padding-box'
    },
    iconTop:{
        width:20,
        height: 20
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
        padding: '2px 5px',
        width: '13%',
        fontSize:12
      },
  })
);

interface StateProps {
  searchClick?: Object;
}

type Props = RouteComponentProps & StateProps;
const ListProjects = (props: Props) => {

    const classes = useStyles();
    const { searchClick } = props;
    const theme = useTheme();
    const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Fragment>
      <PageContainer background="black-model">
          <Grid container xs={12} className={classes.topPanel}>
              <TopPanel />
          </Grid>
          <Grid item container xs={12} direction="column">
            <Typography className={classes.textProfile}>
                Finish setting up your profile to create sharable links and pdf documents
            </Typography>
            <br />
            <Button 
                className={classes.becomeMember} 
                startIcon={<AddIcon />}>
                    Finish your profile
            </Button>
          </Grid>
      </PageContainer>
    </Fragment>
  )
}

const TopPanel = () => {
    const classes = useStyles();

    return (
        <Grid container item xs={12} justify="center">
            <Grid item container spacing={0} xs={1} direction="column" alignItems="center">
                <IconButton aria-label="developers">
                    <img src={cube} alt="developers" className={classes.iconTop}/>
                </IconButton>
                <Typography className={classes.textTop} style={{textAlign: 'center'}}>
                    Developer
                </Typography>    
            </Grid>
            <Grid item container spacing={0} xs={1} direction="column" alignItems="center">
                <IconButton aria-label="investors">
                <img src={metamorphose} alt="investors" className={classes.iconTop}/>
                </IconButton>
                <Typography className={classes.textTop}>
                    Investor
                </Typography>
            </Grid>
        </Grid>
    )
}

// const container = connect<StateProps, {}, {}, RootState>(
//   (state: RootState) => ({
//     searchClick: state.domains.shapediver.searchClick
//   })
// )(ListProjects);

export default ListProjects;
