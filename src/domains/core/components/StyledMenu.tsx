import { Menu, MenuItem, MenuProps, withStyles, Theme } from '@material-ui/core';
import React from 'react';

export const StyledMenu = withStyles((theme: Theme) => (
  {
    paper: {
      border: '1px solid #d3d4d5',
      borderRadius: 32
    },
  }

))((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

export const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);
