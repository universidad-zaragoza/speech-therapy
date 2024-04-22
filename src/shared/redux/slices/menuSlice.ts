/************************************************************************************************************
 *                                                                                                          *
 * File: menuSlice.tsx                                                                                      *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for saving user requests during a conversation                                *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface MenuRootState {
  menuState: {
    isOptionChecked: boolean;
  };
}

// Interface with the structure of the state to be stored
interface MenuState {
  isOptionChecked: boolean;
}

// Initialization of state's variables
const initialState: MenuState = {
  isOptionChecked: false,
};

/**
 * Reducer with the available actions on the state
 */
export const menuSlice = createSlice({
  name: "menuState",
  initialState,
  reducers: {
    setIsOptionChecked: (state: MenuState, action: PayloadAction<boolean>) => {
      state.isOptionChecked = action.payload;
    },
  },
});

export const { setIsOptionChecked } = menuSlice.actions;
export default menuSlice.reducer;
