import React from 'react';
import { SearchPill, StyledMenu, StyledMenuItem } from '.';
import { FormControl, FormControlLabel, makeStyles, Radio, RadioGroup, Theme, Dialog, List, ListItem } from '@material-ui/core';
import { Densities, Density } from '../models';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
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
  },
  dialog:{
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

export interface OwnProps {
  updateDensity(value: string): void;
  density: Density | undefined;
  updateStep(step: number): void;
}

type Props = OwnProps;
export default function UrbanismMenu(props: Props) {
  const { density, updateDensity, updateStep } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [visible, setVisible] = React.useState<Boolean>(false);
  const [openDialog, setOpenDialog] = React.useState(true)
  const [openList, setOpenList] = React.useState(false)

  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const classes = styles();

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setVisible(!visible);
    // setAnchorEl(event.currentTarget);
    if(smallScreen){
      setOpenList(true)
      setOpenDialog(true)
    }else{
      setAnchorEl(event.currentTarget)
      setOpenDialog(false)
    }
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

          <Dialog 
            fullScreen
            open={smallScreen?openDialog:false} 
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
                        label="Street Density"
                        placeholder="Choose type of urbanism"
                        value={density?.label || ''}
                        onClick={handleClick}
                        onChange={handleOnChange}
                      />
              </ListItem>

              {openList?
                _.map(Densities,x => {
                  
                  return <ListItem button key={x.value} className={classes.itemList} onClick={() => {
                    updateDensity(x.label);
                    setVisible(!visible);
                    updateStep(4);
                    }}>
                    <div>
                      <span className={classes.radioLabel}>{x.label}</span> 
                      <br/> 
                      <span className={classes.radioSubLabel}>{x.subLabel}</span>
                    </div>
                  </ListItem>
                }):null
            }
            </List>
          </Dialog>

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
