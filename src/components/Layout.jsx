import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import clsx from 'clsx';

import Sidebar from './Sidebar';
import Header from './Header';
import BottomNav from './BottomNav';
import { useGlobalState } from '@/store/global/global.hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
  },
  content: {
    flexGrow: 1,
    width: '100%',
    padding: theme.spacing(3),
    height: '100%',
    overflowY: 'scroll',

    [theme.breakpoints.up('sm')]: {
      '&.open': {
        width: `calc(100% - ${theme.drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
      '&.close': {
        width: `calc(100% - ${theme.spacing(9) + 1}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
      },
    },
  },
}));

export default function Layout({ children, hideHeader, hideSidebar }) {
  const classes = useStyles();
  const { isMobile, isSidebarOpen } = useGlobalState();

  return (
    <div className={classes.root}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Cache-Control" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />
        <meta name="keywords" content="Liên Tân Tiến" />
        <meta name="description" content="Liên Tân TIến" />
        <title>Liên Tân Tiến</title>
      </Head>
      {hideHeader || <Header />}
      {hideSidebar || <Sidebar />}
      <main className={clsx(classes.content, { open: isSidebarOpen }, { close: !isSidebarOpen })}>
        {children}
      </main>
      {isMobile && <BottomNav />}
    </div>
  );
}
