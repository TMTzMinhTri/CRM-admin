import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  isMobile: false,
  isSidebarOpen: false,
  currentUser: null,
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
    setCurrentUser: (state, action) => ({
      ...state,
      currentUser: action.payload,
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
