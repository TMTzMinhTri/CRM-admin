import React from 'react';
import AuthApi from '@/Api/auth';
import { SignInContainer } from '@/components';

const Login = () => {
  return <SignInContainer />;
};

Login.hideSidebar = true;
Login.hideHeader = true;
Login.hideBottomNav = true;
export default Login;
