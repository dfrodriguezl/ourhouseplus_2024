import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      main: '#FFFFFF',
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
  },
  overrides: {
    MuiSlider: {
      colorPrimary: {
        color: 'black'
      },
      valueLabel: {
        color: 'gray'
      }
    }
  }
});

export default theme;
