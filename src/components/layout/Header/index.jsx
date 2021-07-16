import React from 'react';
import { AppBar, IconButton, Toolbar, Typography, Menu, MenuItem } from '@material-ui/core';
import clsx from 'clsx';
import useStyles from './styles';
import {
  useGlobalState,
  useSidebarStatus,
  useToggleSidebar,
  useToggleTheme,
} from '@/store/global/global.hooks';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from '@material-ui/core/Badge';
import InputBase from '@material-ui/core/InputBase';
import { ToggleTheme } from '@/components';

export default function Header() {
  const isOpenSidebar = useSidebarStatus();
  const { isMobile } = useGlobalState();
  const toggleSidebar = useToggleSidebar();
  const toggleTheme = useToggleTheme();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}>
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  return (
    <AppBar
      position="sticky"
      className={clsx(classes.appBar, {
        [classes.open]: isOpenSidebar,
        [classes.close]: !isOpenSidebar,
      })}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: !isMobile,
          })}>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Mini variant drawer
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </div>
        <ToggleTheme onClick={toggleTheme} />
        <div className={classes.sectionDesktop}>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </div>
        <div className={classes.sectionMobile}>
          <IconButton aria-label="show search" color="inherit">
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
      {renderMenu}
    </AppBar>
  );
}
