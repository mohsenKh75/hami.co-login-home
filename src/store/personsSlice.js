import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "../services/api";

const initialState = {
  data: null,
  loading: false,
  isSuccess: false,
  message: "",
};

export const getPersons = createAsyncThunk(
  "persons/getData",
  async (p, thunkApi) => {
    try {
      return await authService.infos(p);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkApi.rejectWithValue(message);
    }
  }
);

const personsSlice = createSlice({
  name: "persons",
  initialState,
  reducers: {
    updateLocally: (state, action) => {
      const personIndex = state.data.findIndex(
        (itm) => itm.id === action.payload.id
      );

      state.data[personIndex].name = action.payload.name;
      state.data[personIndex].username = action.payload.username;
      state.data[personIndex].email = action.payload.email;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPersons.pending, (state) => {
        state.loading = true;
      })
      .addCase(getPersons.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccess = true;
        state.data = action.payload;
      })
      .addCase(getPersons.rejected, (state, action) => {
        state.loading = false;
        state.isSuccess = false;
        state.data = [];
        state.message = action.payload;
      });
  },
});

export default personsSlice.reducer;
export const { updateLocally, findPerson } = personsSlice.actions;
