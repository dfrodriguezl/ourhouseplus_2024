import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    error: {
      main: red.A400,
    },
    background: {
      default: '#FFF',
    },
    text: {
      primary: '#000',
      secondary: '#FFF'
    }
  }
});

export default theme;
