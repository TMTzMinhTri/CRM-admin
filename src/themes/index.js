import { createMuiTheme } from '@material-ui/core';
import light from './light';
import dark from './dark';

const typeTheme = [light, dark];

const themes = (type) =>
  createMuiTheme({
    ...typeTheme[type],
    drawerWidth: 240,
  });
export default themes;
