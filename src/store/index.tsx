import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slices/listSlice";

const store = configureStore({
  reducer: {
    list: listSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;