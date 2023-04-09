import InitialState, { UpdateListAction } from "../../types/store/list";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: InitialState = {
  value: [],
};

export const listSlice = createSlice({
  name: UpdateListAction,
  initialState: initialState,
  reducers: {
    addToList: (state, action: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if(!state.value.find((item)=>item === action.payload)){
        state.value.push(action.payload);
      }
      
    },
    removeFromList: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((item)=>item !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToList, removeFromList } = listSlice.actions;
export default listSlice.reducer;