import { useAppAction, useAppSelector } from '../hooks';
import { toggleSidebar } from './global.actions';

export const useGlobalState = () => useAppSelector((state) => state.global);

export const useSidebarStatus = () =>
  useAppSelector((state) => {
    const { isMobile, isSidebarOpen } = state.global;
    return !isMobile || (isMobile && isSidebarOpen);
  });

export const useDetectMobile = () => useAppSelector((state) => state.global.isMobile);

export const useToggleSidebar = () => useAppAction(toggleSidebar);
