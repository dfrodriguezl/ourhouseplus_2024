import { Tooltip, withStyles } from "@material-ui/core";

const CustomTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    color: '#000000',
    fontSize: 11,
    marginBottom: -20,
    borderRadius: '9px',
    border: '1px solid #707070'
  },
}))(Tooltip);

export default CustomTooltip;