import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongBase } from '@constants/media.model';
import { RootState } from '@store/store';
import { LOCAL_KEY } from '@constants/storage-key.const';

export interface CurrentSong {
  currentSong?: SongBase;
}

const currentSongInit = localStorage.getItem(LOCAL_KEY.SetCurrentSong);

const initialState: CurrentSong = { currentSong: currentSongInit && JSON.parse(currentSongInit) || undefined };

export const mediaPlayerSlice = createSlice({
  name: 'mediaPlayer',
  initialState,
  reducers: {
    clear: (state) => {
      state.currentSong = undefined;
    },
    setCurrentSong: (state, action: PayloadAction<SongBase>) => {
      state.currentSong = action.payload;
      localStorage.setItem(LOCAL_KEY.SetCurrentSong, JSON.stringify(action.payload));
    }
  }
});

export const { clear, setCurrentSong } = mediaPlayerSlice.actions;
export const selectMediaPlayer = (state: RootState) => state.mediaPlayer;
export const mediaPlayerReducer = mediaPlayerSlice.reducer;


