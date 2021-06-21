import React, { Fragment, useMemo } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import App from 'next/app';

import reduxWrapper from '@/store';
import themes from '@/themes';
import { checkMobileServerSide, detectDevice } from '@/ultilities';
import { setIsMobile } from '@/store/global/global.actions';
import Layout from '@/components/Layout';

function MyApp({ Component, pageProps }) {
  const type = 'ád';

  React.useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const page = useMemo(() => {
    const PageLayout = Component.Layout || Fragment;
    return (
      <Layout>
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
  await dispatch(setIsMobile(isMobile));
  return {
    ...(await App.getInitialProps(context)),
  };
});

export default reduxWrapper.withRedux(MyApp);
