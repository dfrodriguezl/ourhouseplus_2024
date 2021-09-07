import { makeStyles, createStyles, Typography, Box } from '@material-ui/core';


const useStyles = makeStyles(() =>
  createStyles({
    whitePill: {
      backgroundColor: 'white',
      borderRadius: 30,
      border: 'solid 1px #707070',
      textAlign: 'center',
      margin: '2px 20px'
    }
  })
);

interface StateProps {
  text?: string;
}

type Props = StateProps;
const WhitePill = (props: Props) => {
  const classes = useStyles();
  const { text } = props;

  return (
    <Box className={classes.whitePill}>
      <Typography variant="body2">
        {text}
      </Typography>
    </Box>
  )
}

export default WhitePill;