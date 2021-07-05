import React from 'react';
import { SearchPill, StyledMenu, StyledMenuItem } from '.';
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Theme } from '@material-ui/core';
import { Densities, Density } from '../models';
import _ from 'lodash';

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

export interface OwnProps {
  updateDensity(value: string): void;
  density: Density | undefined;
}

type Props = OwnProps;
export default function UrbanismMenu(props: Props) {
  const { density, updateDensity } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [visible, setVisible] = React.useState<Boolean>(false);

  const classes = styles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(!visible);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateDensity(event.target.value);
  }

  return (
    <div>
      <FormControl component="fieldset">
        <RadioGroup aria-label="density" name="density" value={density?.label || ''} onChange={handleOnChange}>
          <SearchPill
            label="Street Density"
            placeholder="Choose type of urbanism"
            value={density?.label || ''}
            onClick={handleClick}
            onChange={handleOnChange}
          />
          {
            visible?<StyledMenu
            id="customized-menu"
            className={classes.menuList}
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {
              _.map(Densities, x =>
                <StyledMenuItem key={x.value} onClick={() => {
                  updateDensity(x.label);
                  setVisible(!visible);
                  }}>
                  <FormControlLabel
                    value={x.label}
                    control={<Radio className={classes.radio} />}
                    labelPlacement="start"
                    label={
                      <label>
                        <div className={classes.radioLabel}>{x.label}</div>
                        <div className={classes.radioSubLabel}>{x.subLabel}</div>
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
