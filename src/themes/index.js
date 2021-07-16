import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import light from './light';
import dark from './dark';

const typeTheme = [light, dark];

const themes = (type) =>
  createMuiTheme({
    ...typeTheme[type],
    palette: {
      ...typeTheme[type].palette,
      primary: {
        main: '#00629C',
      },
      secondary: { main: '#EAA221' },
    },
    overrides: {
      MuiButton: {
        root: {
          borderRadius: 20,
        },
      },
      MuiInputLabel: {
        root: {
          marginBottom: 8,
          color: '#000000',
        },
        formControl: {
          position: 'unset',
        },
        shrink: {
          transform: 'none !important',
        },
      },
      MuiPaper: {
        root: {
          padding: 24,
        },
      },
    },
    drawerWidth: 240,
  });
export default themes;
