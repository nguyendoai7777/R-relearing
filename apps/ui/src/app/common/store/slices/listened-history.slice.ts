import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SongBase } from '@models/media.model';
import { LOCAL_KEY } from '@constants/storage-key.const';
import { RootState } from '@store/store';

export interface ListenedHistory {
  currentHistoryList: SongBase[];
}

const currentHistoryList = JSON.parse(localStorage.getItem(LOCAL_KEY.SetHistoryList) || '[]');
if (!currentHistoryList) {
  localStorage.setItem(LOCAL_KEY.SetHistoryList, JSON.stringify([]));
}

const initialState: ListenedHistory = {
  currentHistoryList
};

export const listenedHistorySlice = createSlice({
  name: 'listenedHistorySlice',
  initialState,
  reducers: {
    removeOne: (state, action: PayloadAction<number>) => {
      state.currentHistoryList.splice(action.payload, 1);
      localStorage.setItem(LOCAL_KEY.SetHistoryList, JSON.stringify(state.currentHistoryList));
    },
    pushOne: (state, action: PayloadAction<SongBase>) => {
      const cr = JSON.parse(localStorage.getItem(LOCAL_KEY.SetHistoryList) || '[]') as SongBase[];
      if (cr.length <= 0) {
        cr.push(action.payload);
      } else {
        const existed = cr.find(e => e.key === action.payload.key);
        if (!existed) {
          cr.push(action.payload);
        }
      }

      state.currentHistoryList = cr;
      localStorage.setItem(LOCAL_KEY.SetHistoryList, JSON.stringify(cr/*state.currentHistoryList*/));
    },
    clear: (state) => {
      state.currentHistoryList = [];
      localStorage.setItem(LOCAL_KEY.SetHistoryList, JSON.stringify([]));
    }
  }
});

export const { removeOne, pushOne, clear } = listenedHistorySlice.actions;
export const selectListenedList = (state: RootState) => state.listenedHistory;
export const selectListenedReducer = listenedHistorySlice.reducer;
