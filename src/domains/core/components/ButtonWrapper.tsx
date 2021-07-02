import { useState } from 'react';
import { Button, makeStyles } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';

const styles = makeStyles(() => ({
  button: {
    cursor: 'pointer',
    borderRadius: 20,
    backgroundColor: '#FF6C6C',
    color: 'white',
    textTransform: 'none',
    margin: '10px 0',
    '&:hover': {
      backgroundColor: '#FF6C6C'
    },
  }
}));

interface OwnProps {
  size: 'small' | 'medium' | 'large';
  onClick: () => void;
  disabled: boolean;
  label: string;
}

type Props = OwnProps;
const ButtonWrapper = (props: Props) => {
  const { onClick, disabled, size, label } = props;
  const [hover, setHover] = useState(false);
  const classes = styles();

  return (
    <Button
      size={size}
      onClick={onClick}
      className={classes.button}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {
        hover ? <ArrowForward style={{ fontSize: 22 }} /> : label
      }
    </Button>

  );
}

export default ButtonWrapper;
