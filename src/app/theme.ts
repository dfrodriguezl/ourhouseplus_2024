import { red } from '@mui/material/colors';
import { createTheme, adaptV4Theme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme(adaptV4Theme({
  typography: {
    fontFamily: 'Roboto',
  },
  palette: {
    primary: {
      main: '#FFFFFF', //White
    },
    secondary: {
      main: '#000000',
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
}));

export default theme;
