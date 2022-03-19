import { createStyles, Grid, IconButton, makeStyles, Theme, Typography } from '@material-ui/core'
import { setExpandAdvanced } from 'domains/shapeDiver/slice';
import { connect } from 'react-redux';
import { RootState } from 'app/store';
import { GeoContainer, PageContainer } from '.';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      color: 'white'
    }
  })
);

interface DispatchProps {
  setExpandAdvanced: typeof setExpandAdvanced;
}
interface OwnProps {
  children: any;
  title?: string;
}

interface StateProps {
  expandAdvanced?: Object;
}



type Props = OwnProps & StateProps & DispatchProps;
const BlackContainer = (props: Props) => {
  const { children, title } = props;
  const classes = useStyles();
  const history = useHistory();
  const isLoading = history.location.pathname.indexOf('loading') > -1;
  const [open, setOpen] = useState<boolean>(false);

  const goToMap = () => {
    setOpen(true);
  }

  const closeGeoDialog = () => {
    setOpen(false);
  }

  return (
    <PageContainer background="black-model" >
      <Grid xs={12} container>
        <Grid item container xs={12} justify="center">
          <Typography className={classes.title}>{title}</Typography>
        </Grid>
        <Grid xs={2}></Grid>
        <Grid item xs={8}>
          {children}
        </Grid>
      </Grid>
      {!isLoading ?
        <Grid container xs={12}>
          <IconButton onClick={() => goToMap()}>
            <ArrowBackIosIcon className={classes.title} />
            <Typography className={classes.title}>Back</Typography>
          </IconButton>
        </Grid> : null}
        <GeoContainer open={open} location="New York" closeFunction={closeGeoDialog} type="flow"/>
    </PageContainer>
  );
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    expandAdvanced: state.domains.shapediver.expandAdvanced
  }),
  {
    setExpandAdvanced
  }
)(BlackContainer);

export default container;


