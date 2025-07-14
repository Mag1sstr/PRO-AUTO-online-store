import { createSlice } from "@reduxjs/toolkit";
import type { IUser } from "../../types/interfaces";

interface IAuthState {
  user: IUser | null;
  token: string | null;
}

const initialState: IAuthState = {
  user: null,
  token: localStorage.getItem("token"),
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setToken(state, action) {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setToken, setUser } = authSlice.actions;

export default authSlice.reducer;
