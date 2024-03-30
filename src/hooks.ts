import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import { RootState, AppDispatch } from './store';

export const useMyAppDispatch: () => AppDispatch = useDispatch;
export const useMyAppSelector: TypedUseSelectorHook<RootState> = useSelector;
