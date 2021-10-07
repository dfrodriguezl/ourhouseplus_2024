import React from 'react';
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Theme, Dialog, List, ListItem } from '@material-ui/core';
import { SearchPill, StyledMenu, StyledMenuItem } from '.';
import { Location } from 'domains/core/models';
import { RootState } from 'app/store';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { useState } from 'react';
import { setSearchClick } from 'domains/core/coreSlice';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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
  menuList: {
    marginTop: 30,
    [theme.breakpoints.down('sm')]: {
      marginTop: 16
    },
  },
  dialog: {
    height: '100%',
    marginTop: '30%',
    backgroundColor: '#FFF',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32
  },
  list: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
  itemList: {
    paddingLeft: 25
  }
}))


interface DispatchProps {
  setSearchClick: typeof setSearchClick;
}

interface StateProps {
  locations: Location[];
}

interface OwnProps {
  updateLocation(value: string): void;
  location: Location | undefined;
  updateStep(step: number): void;
}



type Props = & OwnProps & StateProps & DispatchProps;
function LocationMenu(props: Props) {
  const { location, updateLocation, updateStep, setSearchClick, locations } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [visible, setVisible] = useState<Boolean>(false);
  const [openDialog, setOpenDialog] = useState(false)
  const [openList, setOpenList] = useState(false)

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = styles();



  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(true);
    setSearchClick(true);
    if (smallScreen) {
      setOpenList(true)
      setOpenDialog(true)
    } else {
      setAnchorEl(event.currentTarget)
      setOpenDialog(false)
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSearchClick(false);
    setOpenDialog(false)
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

          <Dialog
            fullScreen
            open={openDialog}
            onClose={handleClose}
            className={classes.dialog}
            PaperProps={{
              style: {
                borderTopLeftRadius: 32,
                borderTopRightRadius: 32,
              }
            }}
          >

            <List className={classes.list}>
              <ListItem className={classes.list}>
                <SearchPill
                  label="Location"
                  placeholder="Where will the project be?"
                  value={location?.city || ''}
                  onClick={handleClick}
                  onChange={handleOnChange}
                />
              </ListItem>

              {openList ?
                locations.map(x => {

                  return <ListItem button key={x.id} className={classes.itemList} onClick={() => {
                    updateLocation(x.city);
                    setVisible(false);
                    updateStep(2);
                  }}>
                    <div>
                      <span className={classes.radioLabel}>{x.city}</span>
                      <br />
                      <span className={classes.radioSubLabel}>{x.description}</span>
                    </div>
                  </ListItem>
                }) : null
              }
            </List>
          </Dialog>

          {
            visible ? <StyledMenu
              id="location-menu"
              className={classes.menuList}
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {
                locations.map(x =>
                  <StyledMenuItem key={x.id} onClick={() => {
                    updateLocation(x.city);
                    setVisible(false);
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
            </StyledMenu> : null
          }

        </RadioGroup>
      </FormControl>
    </div>
  );
}

const container = compose<Props, OwnProps>(
  connect<StateProps, DispatchProps, {}, RootState>(
    (state: RootState) => ({
      locations: state.domains.core.locations
    }),
    {
      setSearchClick
    }
  )
)(LocationMenu);

export default container;

