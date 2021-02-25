import _ from 'lodash';
import React, { useState } from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Divider, Grid, IconButton, makeStyles, Theme } from '@material-ui/core';
import { doSearch } from 'domains/core/coreSlice';
import { SearchParams, Location } from 'domains/core/models';
import { LocationMenu, SearchPill, UrbanismMenu } from 'domains/core/components';
import { SearchOutlined } from '@material-ui/icons';
import { RootState } from 'app/store';

const useStyles = makeStyles((theme: Theme) => ({
  searchBox: {
    marginTop: theme.spacing(4),
    background: theme.palette.common.white,
    padding: '10px 30px',
    borderRadius: 32,
  },
  fieldDivider: {
    backgroundColor: theme.palette.common.black,
    height: '100%'
  },
  searchButton: {
    margin: 0
  }
}));
interface StateProps {
  locations: Location[];
}
interface DispatchProps {
  doSearch(payload: SearchParams): void;
}

type Props = DispatchProps & StateProps & RouteComponentProps;
const SearchToolBar = (props: Props) => {
  const { doSearch, history, locations } = props;

  const classes = useStyles();
  const [location, setLocation] = useState<Location>();
  const [area, setArea] = useState<number>();
  const [urbanism, setUrbanism] = useState<string>();

  const updateLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const loc = _.find(locations, x => x.city === event.target.value);
    setLocation(loc);
  }

  const updateArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(parseInt(event.target.value));
  }

  const updateUrbanism = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrbanism(event.target.value);
  }

  const search = () => {
    doSearch({
      location,
      area: area!,
      urbanism: urbanism!
    });
    history.push('/shapediver');
  }

  return (
    <Grid container className={classes.searchBox}>
      <Grid item container direction="column" xs={3} justify="center">
        <LocationMenu
          updateLocation={updateLocation}
          location={location}
        />
      </Grid>
      <Grid item>
        <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
      </Grid>
      <Grid item container direction="column" xs={3} justify="center">
        <SearchPill
          label="Area m2"
          placeholder="Add total terrain area"
          onChange={updateArea}
          value={area}
          type="number"
        />
      </Grid>
      <Grid item>
        <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
      </Grid>
      <Grid item container direction="column" xs={3} justify="center">
        <UrbanismMenu
          updateUrbanism={updateUrbanism}
          urbanism={urbanism}

        />
      </Grid>
      <Grid item container xs={1} justify="center">
        <IconButton onClick={search} className={classes.searchButton}>
          <SearchOutlined color="secondary" />
        </IconButton>
      </Grid>
    </Grid>
  );
}

const container = compose<Props, {}>(
  withRouter,
  connect<StateProps, DispatchProps, Props, RootState>(
    (state: RootState) => ({
      locations: state.domains.core.locations,
    }),
    {
      doSearch
    }
  )
)(SearchToolBar);

export default container;
