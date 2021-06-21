import React from 'react';
import clsx from 'clsx';
import { Drawer, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import useStyles from './styles';
import { useGlobalState } from '@/store/global/global.hooks';

export default function Sidebar() {
  const classes = useStyles();
  const globalState = useGlobalState();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: globalState.isSidebarOpen,
        [classes.drawerClose]: !globalState.isSidebarOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: globalState.isSidebarOpen,
          [classes.drawerClose]: !globalState.isSidebarOpen,
        }),
      }}>
      <div className={classes.toolbar}></div>
      <Divider />
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
