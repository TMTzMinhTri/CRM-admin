import { createWrapper } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import globalSlice from '@/store/global/global.reducer';

const makeStore = () =>
  configureStore({
    reducer: {
      [globalSlice.name]: globalSlice.reducer,
    },
    devTools: true,
  });

const reduxWrapper = createWrapper(makeStore);
export default reduxWrapper;
