import { Divider, Grid, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doSearch } from 'domains/core/coreSlice';
import { SearchParams } from 'domains/core/models';
import SearchPill from './SearchPill';

const useStyles = makeStyles((theme: Theme) => ({
  searchBox: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: theme.palette.common.white,
    padding: 10,
    borderRadius: 32,
  },
  fieldDivider: {
    backgroundColor: theme.palette.common.black,
    height: 40
  }
}));

interface DispatchProps {
  doSearch(payload: SearchParams, pa: number): void;
}

type Props = DispatchProps;
const SearchToolBar = (props: Props) => {
  const classes = useStyles();
  const [location, setLocation] = useState<string>('');
  const [area, setArea] = useState<number>();
  const [urbanism, setUrbanism] = useState<string>();

  const updateLocation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(event.target.value)
  }

  const updateArea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setArea(parseInt(event.target.value))
  }

  const updateUrbanism = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrbanism(event.target.value)
  }

  return (
    <form className={classes.searchBox}>
      <Grid container justify="center" alignItems="center">
        <Grid item container xs={3} justify="center">
          <SearchPill
            label="Location"
            placeholder="Where will the project be?"
            onChange={updateLocation}
            value={location}
          />
        </Grid>
        <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
        <Grid item container xs={3} justify="center" >
          <SearchPill
            label="Area m2"
            placeholder="Add total terrain area"
            onChange={updateArea}
            value={area}
            type="number"
          />
        </Grid>
        <Divider orientation="vertical" variant="middle" className={classes.fieldDivider} />
        <Grid item container xs={3} justify="center">
          <SearchPill
            label="Urbanism"
            placeholder="Choose type of urbanism"
            onChange={updateUrbanism}
            value={urbanism}
          />
        </Grid>
      </Grid>
    </form >
  );
}

const container = connect<never, DispatchProps>(
  null,
  {
    doSearch
  }
)(SearchToolBar);

export default container;
