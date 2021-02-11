import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  field: {
    cursor: 'pointer',
  },
  fieldLabel: {
    fontWeight: 'bold',
    marginBottom: 5
  },
  fieldWrapper: {
    borderRight: '1px black'
  },
  fieldInput: {
    border: '0px',
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
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  type?: string;
}

type Props = OwnProps
export default function SearchPill(props: Props) {
  const { label, placeholder, value, onChange, type } = props;
  const classes = useStyles();

  return (
    <div className={classes.field}>
      <label className={classes.fieldWrapper}>
        <div >
          <div className={classes.fieldLabel}>{label}</div>
          <input
            value={value}
            onChange={onChange}
            className={classes.fieldInput}
            placeholder={placeholder}
            type={type || "text"}
          />
        </div>
      </label>
    </div>
  );
}
