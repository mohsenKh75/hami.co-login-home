import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/api";

const initialState = {
  email: null,
  token: null,
  id: null,
  isLoggedIn: false,
  message: "",
};
export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  try {
    const response = await authService.login(user);
    thunkApi.dispatch(loginAction(response));
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginAction: (state, action) => {
      const { email, token, id } = action.payload;
      state.email = email;
      state.id = id;
      state.token = token;
      state.isLoggedIn = true;
    },
    logoutAction: (state) => {
      state.email = initialState.email;
      state.id = initialState.id;
      state.isLoggedIn = initialState.isLoggedIn;
      state.token = initialState.token;
    },
  },
});

export const { loginAction, logoutAction } = authSlice.actions;

export default authSlice.reducer;
