import React from 'react';
import { makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) => ({
  field: {
    cursor: 'pointer',
  },
  fieldLabel: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  fieldWrapper: {
    borderRight: '1px black'
  },
  fieldInput: {
    border: '0px',
    background: theme.palette.common.white,
    fontSize: 12,
    '&:focus': {
      outline: 'none'
    }
  },
}));

interface OwnProps {
  label: string;
  placeholder: string;
  value: string | number | undefined;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
  onClick?(event: React.MouseEvent<HTMLElement>): void;
  type?: string;
}

type Props = OwnProps
export default function SearchPill(props: Props) {
  const { label, placeholder, value, onChange, type, onClick } = props;
  const classes = useStyles();

  return (
    <div className={classes.field}>
      <label className={classes.fieldWrapper}>
        <div >
          <div className={classes.fieldLabel}>{label}</div>
          <input
            value={value}
            onChange={onChange}
            onClick={onClick}
            className={classes.fieldInput}
            placeholder={placeholder}
            type={type || "text"}
          />
        </div>
      </label>
    </div>
  );
}
