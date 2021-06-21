import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  isMobile: false,
  isSidebarOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsMobile: (state, action) => ({
      ...state,
      isMobile: action.payload,
    }),
    setSideBarOpen: (state) => ({
      ...state,
      isSidebarOpen: !state.isSidebarOpen,
    }),
  },
  extraReducers: {
    [HYDRATE]: (state, action) => ({
      ...state,
      ...action.payload.global,
    }),
  },
});

export default globalSlice;
