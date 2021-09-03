import React, { useState } from 'react';
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
    background: 'rgba(255, 255, 255, 0)',
    fontSize: 12,
    '&:focus': {
      outline: 'none'
    }
  },
  fieldHover: {
    backgroundColor: '#C9C6C6',
    borderRadius: 32,
    opacity: 0.55,
    cursor: 'pointer'
  },
  box: {
    padding: '10px 10px'
  }
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
  const [hover, setHover] = useState(false);
  const classes = useStyles();

  return (
    <div className={`${classes.field} ${classes.box} ${hover ? classes.fieldHover : ''}`} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
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
