import { Counter, counterApp } from "@/utils/counters";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterSlice {
  counterState: Counter[];
}

const initialState: CounterSlice = {
  counterState: counterApp,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementValue: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.counterState = state.counterState.map((counter) =>
        counter.id === id ? { ...counter, value: counter.value + 1 } : counter
      );
    },
    decrementValue: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.counterState = state.counterState.map((counter) =>
        counter?.id === id
          ? counter.value === 0
            ? counter
            : { ...counter, value: counter.value - 1 }
          : counter
      );
    },
    resetValue: (state) => {
      state.counterState = state.counterState.map((counter) => {
        return { ...counter, value: 0 };
      });
    },
  },
});

export const { incrementValue, decrementValue, resetValue } =
  counterSlice.actions;
export default counterSlice.reducer;
