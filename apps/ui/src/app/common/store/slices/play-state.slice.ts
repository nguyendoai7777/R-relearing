import { createSlice } from '@reduxjs/toolkit';
import { RootState, useAppSelector } from '@store/store';
import { mediaPlayerSlice } from '@store/slices/media-player.slice';

export interface PlayState {
  id?: string;
  playing: boolean;
}

const initialState: PlayState = {
  id: undefined,
  playing: false,
}

  export const playStateSlice = createSlice({
  name: 'mediaPlayer',
  initialState,
  reducers: {
    play: (state) => {
      state.playing = true;
    },
    pause: (state) => {
      state.playing = false;
    },
  }
});

export const { pause, play } = playStateSlice.actions;
export const selectPlayState = (state: RootState) => state.mediaPlayer;
export const playStateReducer = mediaPlayerSlice.reducer;
