import React from 'react';
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Theme } from '@material-ui/core';
import { SearchPill, StyledMenu, StyledMenuItem } from '.';
import { Location } from 'domains/core/models';
import { RootState } from 'app/store';
import { connect } from 'react-redux';
import { compose } from 'recompose';

const styles = makeStyles((theme: Theme) => ({
  radio: {
    padding: '0 15px',
    fontSize: 12,
    color: theme.palette.common.black,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  radioLabel: {
    paddingRight: 5,
    fontWeight: 'bold',
    fontSize: 12,
    width: 130
  },
  radioSubLabel: {
    fontSize: 12,
  }
}))

interface StateProps {
  locations: Location[];
}

interface OwnProps {
  updateLocation(event: React.ChangeEvent<HTMLInputElement>): void;
  location: Location | undefined;
}

type Props = OwnProps & StateProps;
function LocationMenu(props: Props) {
  const { location, updateLocation } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const classes = styles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="location" name="location" value={location} onChange={updateLocation}>
          <SearchPill
            label="Location"
            placeholder="Where will the project be at"
            value={location?.city}
            onClick={handleClick}
          />
          <StyledMenu
            id="location-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              props.locations.map(x =>
                <StyledMenuItem key={x.id}>
                  <FormControlLabel
                    value={x.city}
                    control={<Radio className={classes.radio} />}
                    labelPlacement="start"
                    label={
                      <label>
                        <div className={classes.radioLabel}>{x.city}</div>
                        <div className={classes.radioSubLabel}>{x.description}</div>
                      </label>
                    }
                  />
                </StyledMenuItem>
              )
            }
          </StyledMenu>
        </RadioGroup>
      </FormControl>
    </div>
  );
}

const container = compose<Props, OwnProps>(
  connect<StateProps, {}, {}, RootState>(
    (state: RootState) => ({
      locations: state.domains.core.locations
    })
  )
)(LocationMenu);

export default container;

