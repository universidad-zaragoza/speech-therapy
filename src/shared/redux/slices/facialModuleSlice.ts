/************************************************************************************************************
 *                                                                                                          *
 * File: facialModuleSlice.tsx                                                                              *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: slice created for saving user requests during a conversation                                *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { FacialModuleDTO } from "../../dtos/FacialModuleDTO";

// Interface with the structure of the global state (must be the same as the reducer definition)
export interface FacialModuleRootState {
  facialModuleState: {
    variables: FacialModuleDTO;
  };
}

// Interface with the structure of the state to be stored
interface FacialModuleState {
  variables: FacialModuleDTO;
}

// Initialization of state's variables
const initialState: FacialModuleState = {
  variables: {
    task: "",
    mode: "",
    source: "",
    responseMode: "",
    algorithm: "",
  },
};

/**
 * Reducer with the available actions on the state
 */
export const facialModuleSlice = createSlice({
  name: "facialModuleState",
  initialState,
  reducers: {
    setTask: (state: FacialModuleState, action: PayloadAction<string>) => {
      state.variables.task = action.payload;
    },
    setMode: (state: FacialModuleState, action: PayloadAction<string>) => {
      state.variables.mode = action.payload;
    },
    setSource: (state: FacialModuleState, action: PayloadAction<string>) => {
      state.variables.source = action.payload;
    },
    setResponseMode: (
      state: FacialModuleState,
      action: PayloadAction<string>
    ) => {
      state.variables.responseMode = action.payload;
    },
    setAlgorithm: (state: FacialModuleState, action: PayloadAction<string>) => {
      state.variables.algorithm = action.payload;
    },
  },
});

export const { setTask, setMode, setSource, setResponseMode, setAlgorithm } =
  facialModuleSlice.actions;
export default facialModuleSlice.reducer;
