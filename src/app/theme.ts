import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
  palette: {
    primary: {
      main: '#FFF',
      light: '#F9f9f9',
      dark: '#a6a6a6'
    },
    secondary: {
      main: '#000000', //White
    },
    error: {
      main: red.A400,
    },
    background: {
      default: 'white',
    },
    text: {
      primary: '#000'
    }
  }
});

export default theme;
