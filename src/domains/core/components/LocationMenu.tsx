import React from 'react';
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Theme } from '@material-ui/core';
import { SearchPill, StyledMenu, StyledMenuItem } from '.';
import { Location } from 'domains/core/models';
import { RootState } from 'app/store';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useState } from 'react';

const styles = makeStyles((theme: Theme) => ({
  radio: {
    padding: '10px 10px',
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
  },
  menuList:{
    marginTop:30
  }
}))

interface StateProps {
  locations: Location[];
}

interface OwnProps {
  updateLocation(value: string): void;
  location: Location | undefined;
}

type Props = OwnProps & StateProps;
function LocationMenu(props: Props) {
  const { location, updateLocation } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [visible, setVisible] = useState<Boolean>(false);

  const classes = styles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(!visible);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateLocation(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="location" name="location" value={location?.city || ''} onChange={handleOnChange}>
          <SearchPill
            label="Location"
            placeholder="Where will the project be?"
            value={location?.city || ''}
            onClick={handleClick}
            onChange={handleOnChange}
          />
          {
            visible?<StyledMenu
            id="location-menu"
            className={classes.menuList}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              props.locations.map(x =>
                <StyledMenuItem key={x.id} onClick={() => {
                  updateLocation(x.city);
                  setVisible(!visible);
                  }}>
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
          </StyledMenu>:null
          }
          
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

