import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/reducer/authReducer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export const server = "http://localhost:5000";
