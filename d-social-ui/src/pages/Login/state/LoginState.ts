import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { AuthApi } from '../../../api/authApi/authApi';
import { IAuthRequest } from '../../../api/authApi/authApi.interface';

export interface AuthState {
 isAuth: boolean;
 loading: boolean;
 error: string;
}

const initialState: AuthState = {
 isAuth: false,
 loading: false,
 error: '',
};

const auth = new AuthApi();

export const authAction = createAsyncThunk('auth-action', (request: IAuthRequest) => {
 return auth.auth(request);
});

export const authSlice = createSlice({
 name: 'auth',
 initialState,
 reducers: {
  login: (state) => {
   state.isAuth = true;
  },
  logout: (state) => {
   state.isAuth = false;
   localStorage.clear();
  },
 },
 extraReducers: (builder) => {
  builder.addCase(authAction.pending, (state) => {
   state.loading = true;
  });
  builder.addCase(authAction.fulfilled, (state, action) => {
   state.loading = false;
   state.isAuth = true;
  });
  builder.addCase(authAction.rejected, (state, action) => {
   state.loading = false;
   state.isAuth = false;
  });
 },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
