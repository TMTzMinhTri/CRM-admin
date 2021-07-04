import { GET, POST } from '.';

const AuthApi = {
  getCurrentUser(ctx) {
    return GET({ url: 'partners/me', ctx });
  },
  login(body) {
    return POST({ url: 'users/sign_in', body });
  },
};

export default AuthApi;
