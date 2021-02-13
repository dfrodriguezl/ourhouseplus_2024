import { Divider, Grid, IconButton, makeStyles, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { doSearch } from 'domains/core/coreSlice';
import { SearchParams } from 'domains/core/models';
import SearchPill from './SearchPill';
import { SearchOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
  searchBox: {
    marginTop: theme.spacing(4),
    background: theme.palette.primary.light,
    padding: '10px 30px',
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
    <Grid container className={classes.searchBox}>
      <Grid item>
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
      <Grid item>
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
      <Grid item>
        <SearchPill
          label="Urbanism"
          placeholder="Choose type of urbanism"
          onChange={updateUrbanism}
          value={urbanism}
        />
      </Grid>
      <Grid item>
        <div style={{ paddingLeft: 24, marginRight: -24 }}>
          <IconButton>
            <SearchOutlined color="secondary" />
          </IconButton>
        </div>
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
