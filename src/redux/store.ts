import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counterSlice/counterSlice";

export const store = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof store>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
