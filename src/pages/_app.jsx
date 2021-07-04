import React, { Fragment, useMemo } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import App from 'next/app';
import Cookies from 'js-cookie';

import reduxWrapper from '@/store';
import themes from '@/themes';
import { checkMobileServerSide, detectDevice } from '@/ultilities';
import { setIsMobile, setCurrentUser } from '@/store/global/global.actions';
import Layout from '@/components/Layout';
import AuthApi from '@/Api/auth';

function MyApp({ Component, pageProps }) {
  const type = 'ád';

  React.useEffect(() => {
    Cookies.set('access_token', 'M5fyNn4a-qb2Nh7X3WoL');
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const page = useMemo(() => {
    const PageLayout = Component.Layout || Fragment;
    return (
      <Layout hideSidebar={Component.hideSidebar} hideHeader={Component.hideHeader}>
        <PageLayout>
          <Component {...pageProps}></Component>
        </PageLayout>
      </Layout>
    );
  }, [Component, pageProps]);

  return (
    <MuiThemeProvider theme={themes(type === 'light' ? 1 : 0)}>
      <CssBaseline />
      {page}
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
  // console.log(context);

  return {
    ...(await App.getInitialProps(context)),
  };
});

export default reduxWrapper.withRedux(MyApp);
