import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';
import { useGlobalState, useToggleSidebar } from '@/store/global/global.hooks';
import { urls } from '@/ultilities';
import Link from 'next/link';

export default function Sidebar() {
  const { isMobile, isSidebarOpen } = useGlobalState();
  const toggleSidebar = useToggleSidebar();

  const classes = useStyles();
  const menus = [
    { label: 'home', path: urls.home },
    { label: 'nguoi muon', path: urls.listClients },
  ];
  
  return (
    <Drawer
      variant={isMobile ? 'temporary' : 'permanent'}
      open={isSidebarOpen}
      onClose={toggleSidebar}
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isSidebarOpen,
        [classes.drawerClose]: !isSidebarOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isSidebarOpen,
          [classes.drawerClose]: !isSidebarOpen,
        }),
      }}>
      <div className={classes.toolbar}></div>
      <Divider />
      <List>
        {menus.map((menu, index) => (
          <Link href={menu.path} key={menu.path}>
            <ListItem button key={menu.path}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={menu.label} />
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}
