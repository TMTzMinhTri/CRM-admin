import React, { Fragment, useMemo } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import App from 'next/app';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import reduxWrapper from '@/store';
import themes from '@/themes';
import { checkMobileServerSide, detectDevice } from '@/ultilities';
import { setIsMobile, setCurrentUser } from '@/store/global/global.actions';
import { Layout } from '@/components';
import '@/styles/toggle-theme.css';
import { useGlobalState } from '@/store/global/global.hooks';
// import AuthApi from '@/Api/auth';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { theme } = useGlobalState();

  React.useEffect(() => {
    Cookies.set('access_token', 'M5fyNn4a-qb2Nh7X3WoL');
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
    const handleRouteChange = (url, { shallow }) => {
      console.log(`App is changing to ${url} ${shallow ? 'with' : 'without'} shallow routing`);
    };
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.on('routeChangeStart', handleRouteChange);
  }, []);

  const page = useMemo(() => {
    const PageLayout = Component.Layout || Fragment;
    return (
      <Layout
        hideSidebar={Component.hideSidebar}
        hideHeader={Component.hideHeader}
        hideBottomNav={Component.hideBottomNav}>
        <PageLayout>
          <Component {...pageProps}></Component>
        </PageLayout>
      </Layout>
    );
  }, [Component, pageProps]);

  return (
    <MuiThemeProvider theme={themes(theme)}>
      <CssBaseline />
      <div className={clsx({ 'light-theme': theme === 0 }, { 'dark-theme': theme === 1 })}>
        {page}
      </div>
    </MuiThemeProvider>
  );
}

MyApp.getInitialProps = reduxWrapper.getInitialAppProps((store) => async (context) => {
  const device = detectDevice();
  const dispatch = store.dispatch;
  const isMobile =
    checkMobileServerSide(context.ctx.req?.headers['user-agent'] || '') || device.isMobile();
  const processes = [dispatch(setIsMobile(isMobile))];
  // const accRes = await AuthApi.getCurrentUser(context.ctx);
  // if (accRes.object) {
  //   processes.push(dispatch(setCurrentUser(accRes.object)))
  // }

  await Promise.all(processes);

  return {
    ...(await App.getInitialProps(context)),
  };
});

export default reduxWrapper.withRedux(MyApp);
