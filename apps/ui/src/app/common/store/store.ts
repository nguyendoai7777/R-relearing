import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './slices/counter.slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { mediaPlayerReducer } from '@store/slices/media-player.slice';
import { playStateReducer } from '@store/slices/play-state.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    mediaPlayer: mediaPlayerReducer,
    playState: playStateReducer
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
