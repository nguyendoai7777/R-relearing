import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CounterState = {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

export const initialState: CounterState = {
  value: 0,
  status: 'idle'
};

export interface CountPayload {
  value: number;
  delaySeed?: number;
}

export function fetchCount(amount = 1, delaySeed = 500) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), delaySeed)
  );
}

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async ({ value, delaySeed }: CountPayload ) => {
    const response = await fetchCount(value, delaySeed);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    inc: (state) => {
      state.value += 1;
    },
    dec: (state) => {
      state.value -= 1;
    },
    incByAmount: (state, action: PayloadAction<CountPayload>) => {
      state.value = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { dec, inc, incByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter;
export const counterReducer = counterSlice.reducer;
