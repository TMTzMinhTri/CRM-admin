import AuthApi from '@/Api/auth';

export const doWithServerSide = async (ctx) => {
  let isAuthenticated = false;
  let user = null;
  const accRes = await AuthApi.getCurrentUser(ctx);
  // console.log(accRes);

  if (accRes.object) {
    isAuthenticated = true;
    user = accRes.object;
  }
  const result = {};
  result.props = result.props || {};
  result.props.user = user || null;
  result.props.isAuthenticated = isAuthenticated;
  // console.log(`result`, result);
  return result;
};
