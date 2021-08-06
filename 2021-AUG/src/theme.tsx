import red from '@material-ui/core/colors/red';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#98c1d9',
      light: '#e0fbfc',
      dark: '#293241',
    },
    secondary: {
      main: '#ee6c4d',
      light: '#e7b4a5',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
});

export default theme;
