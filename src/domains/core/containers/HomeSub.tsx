import React from 'react';
import { Container, Grid, Box, makeStyles, Theme, Avatar, useTheme, Typography, Button } from '@material-ui/core';
import { useHistory, withRouter } from 'react-router-dom';
import { FeasibilityIcon, FinancialIcon, PdfIcon, PreArchitectureIcon, SquareIcon, BuildingIcon, videoSmall } from 'assets';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { ImgVideo } from 'domains/common/components';
import { useTranslation } from 'react-i18next';
import { projects } from '../models';
import { ProjectsList } from '../components';
import { RouteComponentProps } from 'react-router-dom';

const styles = makeStyles((theme: Theme) => ({
  title: {
    paddingTop: 40,
    textAlign: 'center',
    marginBottom: 40
  },
  avatarGray: {
    backgroundColor: "#989696",
    color: "#707070",
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  avatarBlack: {
    backgroundColor: "#000000",
    color: "#707070",
    width: theme.spacing(10),
    height: theme.spacing(10),
    margin: 'auto'
  },
  minContent: {
    width: 'min-content',
    textAlign: 'center',
    marginRight: theme.spacing(1),
    paddingLeft: 50,
    paddingRight: 50
  },
  textSize: {
    fontSize: 13,
    color: "#666666"
  },
  subtitle: {
    paddingTop: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  boldText: {
    fontWeight: 'bolder'
  },
  centerText: {
    textAlign: 'left'
  },
  subtitle1: {
    margin: '40px 20px 10px',
    lineHeight: 1.3
  },
  subtitle2: {
    margin: '20px 20px 20px',
    lineHeight: 1.3,
    fontWeight: 'lighter'
  },
  itemText: {
    textTransform: 'capitalize',
    color: '#6F6E6E'
  },
  buttonGreen: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: 'transparent',
    color: '#6F6E6E',
    textTransform: 'none',
    padding: '-10px 10px',
    borderColor: '#6F6E6E',
    lineHeight: 0,
    margin: '0px 15px 20px'
  },
}));

type Props = RouteComponentProps;
const HomeSub = (props: Props) => {

  const projectList = projects;
  const classes = styles();

  const history = useHistory();

  const isWaiting = history.location.pathname.indexOf('register') > -1;
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const { t } = useTranslation();

  const toGetStarted = () => {
    window.scrollTo(0, 0);
  }


  return (
    <div>
      <Container >
        <Grid container direction="row">
          <ProjectsList projects={projects}></ProjectsList>
        </Grid>
      </Container>
    </div>
  );
}

export default withRouter(HomeSub);
