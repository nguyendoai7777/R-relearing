import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './reducers/counter.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    counter: counterReducer
  }
});

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch;


/**
 *  hooks for redux/toolkit
 *
 */
export const useAppDispatch: () => DispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
