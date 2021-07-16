import globalSlice from './global.reducer';

const { setIsMobile, setCurrentUser, updateGlobalState } = globalSlice.actions;

export const toggleSidebar = () => (dispatch, getState) => {
  const {
    global: { isSidebarOpen },
  } = getState();
  return dispatch(updateGlobalState({ key: 'isSidebarOpen', value: !isSidebarOpen }));
};

export const toggleTheme = () => (dispatch, getState) => {
  const {
    global: { theme },
  } = getState();
  return dispatch(updateGlobalState({ key: 'theme', value: theme === 0 ? 1 : 0 }));
};

export { setIsMobile, setCurrentUser };
