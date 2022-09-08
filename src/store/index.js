import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import personsReducer from "./personsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    infos: personsReducer,
  },
});
