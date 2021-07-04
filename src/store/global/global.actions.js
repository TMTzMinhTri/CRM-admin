import globalSlice from './global.reducer';

const { setIsMobile, setSideBarOpen, setCurrentUser } = globalSlice.actions;

export const toggleSidebar = () => (dispatch) => dispatch(setSideBarOpen());

export { setIsMobile, setSideBarOpen, setCurrentUser };
