import { Grid, makeStyles, Divider, IconButton, Theme } from '@material-ui/core';
import { Location } from 'domains/core/models';
import { connect } from 'react-redux';
import { setAdvancedOptions } from 'domains/shapeDiver/slice';
import { download, save } from 'assets'

import { RootState } from 'app/store';
import React, { Fragment } from 'react';

const styles = makeStyles((theme: Theme) => ({
    container: {
      padding: '5% 5% 0% 10%',
    },
    fieldLabel: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      fieldInput: {
        border: '0px',
        background: 'rgba(255, 255, 255, 0)',
        fontSize: 12,
        '&:focus': {
          outline: 'none'
        }
      },
      buttons: {
        width: 20,
        height: 20
      }
  }));

interface DispatchProps {
  setAdvancedOptions: typeof setAdvancedOptions;
}

interface StateProps {
  location: Location | undefined;
}

type Props = StateProps & DispatchProps;
const ShapeDiverProject = (props: Props) => {
  const { location, setAdvancedOptions } = props;
  const classes = styles();


  return (
      <Fragment>
          <Grid container xs={12} direction="row" className={classes.container}>
            <Grid item xs={8}>
                <div>Project name</div>
                <input
                        type="text"
                        placeholder="Project 1"
                        className={classes.fieldInput}
                    />
            </Grid>
            <Grid item xs={2}>
                <IconButton>
                    <img className={classes.buttons} src={save} alt="50" />
                </IconButton>
            </Grid>
            <Grid item xs={2}>
            <IconButton>
                    <img className={classes.buttons} src={download} alt="50" />
                </IconButton>
            </Grid>
          </Grid>
          <Divider orientation="horizontal" variant="middle" ></Divider>     
      </Fragment>
  );
}

const container = connect<StateProps, DispatchProps, {}, RootState>(
  (state: RootState) => ({
    location: state.domains.shapediver.location,
  }),
  {
    setAdvancedOptions
  }
)(ShapeDiverProject);

export default container;
