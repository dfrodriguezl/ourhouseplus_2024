import React from 'react';
import { SearchPill, StyledMenu, StyledMenuItem } from '.';
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Theme } from '@material-ui/core';

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

export interface OwnProps {
  updateUrbanism(event: React.ChangeEvent<HTMLInputElement>): void;
  urbanism: any;
}

type Props = OwnProps;
export default function UrbanismMenu(props: Props) {
  const { urbanism, updateUrbanism } = props;
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
        <RadioGroup aria-label="urbanism" name="urbanism" value={urbanism} onChange={updateUrbanism}>
          <SearchPill
            label="Urbanism"
            placeholder="Choose type of urbanism"
            value={urbanism}
            onClick={handleClick}
          />
          <StyledMenu
            id="customized-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <StyledMenuItem>
              <FormControlLabel
                value="City Block"
                control={<Radio className={classes.radio} />}
                labelPlacement="start"
                label={
                  <label>
                    <div className={classes.radioLabel}>City Block</div>
                    <div className={classes.radioSubLabel}>High rise - High density</div>
                  </label>
                }
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <FormControlLabel
                value="Residential Quarter"
                control={<Radio className={classes.radio} />}
                labelPlacement="start"
                label={
                  <label>
                    <div className={classes.radioLabel}>Residential Quarter</div>
                    <div className={classes.radioSubLabel}>Low rise - High density</div>
                  </label>
                }
              />
            </StyledMenuItem>
            <StyledMenuItem>
              <FormControlLabel
                value="Rural Quarter"
                control={<Radio className={classes.radio} />}
                labelPlacement="start"
                label={
                  <label>
                    <div className={classes.radioLabel}>Rural Quarter</div>
                    <div className={classes.radioSubLabel}>Low rise - Low density</div>
                  </label>
                }
              />
            </StyledMenuItem>
          </StyledMenu>
        </RadioGroup>
      </FormControl>
    </div>
  );
}
