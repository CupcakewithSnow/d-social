import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
 isAuth: boolean;
}

const initialState: AuthState = {
 isAuth: false,
};

export const messagesSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  login: (state) => {
   state.isAuth = true;
  },
  logout: (state) => {
   state.isAuth = false;
  },
 },
});

// Action creators are generated for each case reducer function
export const { login, logout } = messagesSlice.actions;

export default messagesSlice.reducer;
