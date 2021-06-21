import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export function useAppAction(action) {
  const dispatch = useDispatch();
  return useCallback((...params) => dispatch(action(...params)), [dispatch, action]);
}

export function useAppSelector(selector) {
  return useSelector(selector);
}
