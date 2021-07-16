import { useAppAction, useAppSelector } from '../hooks';
import { toggleSidebar, toggleTheme } from './global.actions';

export const useGlobalState = () => useAppSelector((state) => state.global);

export const useSidebarStatus = () =>
  useAppSelector((state) => {
    const { isMobile, isSidebarOpen } = state.global;
    return !isMobile || (isMobile && isSidebarOpen);
  });

export const useDetectMobile = () => useAppSelector((state) => state.global.isMobile);

export const useToggleTheme = () => useAppAction(toggleTheme);

export const useToggleSidebar = () => useAppAction(toggleSidebar);
