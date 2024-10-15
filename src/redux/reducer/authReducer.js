import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    registerRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.error = null;
    },
    registerFaliure: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    // login
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
      state.isLoggedIn = false;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload.user;
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFaliure: (state, action) => {
      state.loading = false;
      state.isLoggedIn = false;
      state.error = action.payload.message;
    },
  },
});

export const {
  registerFaliure,
  registerRequest,
  registerSuccess,
  loginFaliure,
  loginRequest,
  loginSuccess,
} = authSlice.actions;
export default authSlice.reducer;
