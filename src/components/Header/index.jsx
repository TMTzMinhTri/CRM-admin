import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';
import { useGlobalState, useToggleSidebar } from '@/store/global/global.hooks';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
  const classes = useStyles();
  const globalState = useGlobalState();
  const toggleSidebar = useToggleSidebar();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.open]: globalState.isSidebarOpen,
        [classes.close]: !globalState.isSidebarOpen,
      })}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          edge="start"
          className={clsx(classes.menuButton, {
            // [classes.hide]: globalState.isSidebarOpen,
          })}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
