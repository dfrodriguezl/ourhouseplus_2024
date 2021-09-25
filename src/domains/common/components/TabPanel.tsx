import { makeStyles } from '@material-ui/core';

const styles = makeStyles(() => ({
  tabContainer: {
    width: '100%'
  },
}));

interface StateProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

type Props = StateProps;
const TabPanel = (props: Props) => {
  const { children, value, index, ...other } = props;
  const classes = styles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className={classes.tabContainer}
    >
      {value === index && (
        children
      )}
    </div>
  );
}

export default TabPanel;