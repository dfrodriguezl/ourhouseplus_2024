import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Helvetica',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
      light: '#6D6D6D',
      dark: '#1B1B1B'
    },
    secondary: {
      main: '#000000', //White
    },
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
