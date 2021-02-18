import { Divider, Grid, IconButton, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doSearch } from 'domains/core/coreSlice';
import { SearchParams } from 'domains/core/models';
import SearchPill from './SearchPill';
import { SearchOutlined } from '@material-ui/icons';
import UrbanismMenu from './UrbanismMenu';

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

interface DispatchProps {
  doSearch(payload: SearchParams): void;
}

type Props = DispatchProps;
const SearchToolBar = (props: Props) => {
  const classes = useStyles();
  const [location, setLocation] = useState<string>('');
  const [area, setArea] = useState<number>();
  const [urbanism, setUrbanism] = useState<string>();

  const updateLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value);
  }

  const updateArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(parseInt(event.target.value));
  }

  const updateUrbanism = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrbanism(event.target.value);
  }

  const search = () => {
    props.doSearch({
      location,
      area: area!,
      urbanism: urbanism!
    })
  }

  return (
    <Grid container className={classes.searchBox}>
      <Grid item container direction="column" xs={3} justify="center">
        <SearchPill
          label="Location"
          placeholder="Where will the project be?"
          onChange={updateLocation}
          value={location}
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

const container = connect<never, DispatchProps>(
  null,
  {
    doSearch
  }
)(SearchToolBar);

export default container;
