/************************************************************************************************************
 *                                                                                                          *
 * File: store.tsx                                                                                          *
 * Author: Adnana Catrinel Dragut                                                                           *
 * Description: Redux store created for data global storage                                                 *
 * Version: 1.1                                                                                             *
 *                                                                                                          *
 ************************************************************************************************************/
import { configureStore } from "@reduxjs/toolkit";
import facialModuleSlice from "./slices/facialModuleSlice";
import menuSlice from "./slices/menuSlice";
import voiceSlice from "./slices/voiceSlice";

/**
 * Redux store with the available reducers
 */
export const store = configureStore({
  reducer: {
    facialModuleState: facialModuleSlice,
    menuState: menuSlice,
    voiceState: voiceSlice,
  },
});
