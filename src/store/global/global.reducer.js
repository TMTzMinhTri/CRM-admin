import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  isMobile: false,
  isSidebarOpen: false,
  currentUser: null,
  theme: 0,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateGlobalState: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
    setIsMobile: (state, action) => ({
      ...state,
      isMobile: action.payload,
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
