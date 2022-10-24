import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongBase } from '@models/media.model';
import { RootState } from '@store/store';
import { LOCAL_KEY } from '@constants/storage-key.const';

export interface CurrentSong {
  currentSong?: SongBase;
  currentList: SongBase[];
}

const currentSongInit = localStorage.getItem(LOCAL_KEY.SetCurrentSong);
const currentListSongInit = localStorage.getItem(LOCAL_KEY.SetCurrentListSong);
if(!currentListSongInit) {
  localStorage.setItem(LOCAL_KEY.SetCurrentListSong, JSON.stringify([]));
}
const initialState: CurrentSong = {
  currentSong: currentSongInit && JSON.parse(currentSongInit) || undefined,
  currentList: currentListSongInit && JSON.parse(currentListSongInit) || [],
};

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
    },
    setCurrentLists: (state, action: PayloadAction<SongBase[]>) => {
      state.currentList = action.payload;
      localStorage.setItem(LOCAL_KEY.SetCurrentListSong, JSON.stringify(action.payload));
    }
  }
});

export const { clear, setCurrentSong, setCurrentLists } = mediaPlayerSlice.actions;
export const selectMediaPlayer = (state: RootState) => state.mediaPlayer;
export const mediaPlayerReducer = mediaPlayerSlice.reducer;


